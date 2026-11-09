import React from 'react';
import { X, Clock, ShieldAlert, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

interface FocusDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  dailyLimitMinutes: number;
  setDailyLimitMinutes: (minutes: number) => void;
  sessionElapsedSeconds: number;
  limitType: 'daily' | 'weekly';
  setLimitType: (type: 'daily' | 'weekly') => void;
  onResetSession: () => void;
}

export const FocusDrawer: React.FC<FocusDrawerProps> = ({
  isOpen,
  onClose,
  dailyLimitMinutes,
  setDailyLimitMinutes,
  sessionElapsedSeconds,
  limitType,
  setLimitType,
  onResetSession,
}) => {
  if (!isOpen) return null;

  const totalLimitSeconds = dailyLimitMinutes * 60;
  const progressRatio = Math.min(sessionElapsedSeconds / totalLimitSeconds, 1);
  const remainingSeconds = Math.max(totalLimitSeconds - sessionElapsedSeconds, 0);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  // Circumference for radial progress
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progressRatio * circumference;

  const presetOptions = limitType === 'daily' ? [15, 30, 45, 60] : [120, 240, 360, 480];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto glass-panel-elevated rounded-t-3xl sm:rounded-3xl p-5 sm:p-8 border border-white/15 shadow-2xl">
        
        {/* Top Handle on Mobile */}
        <div className="flex justify-center -mt-2 mb-4 sm:hidden">
          <div className="w-12 h-1.5 rounded-full bg-white/20" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-electric/20 text-electric border border-electric/30 mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Digital Well-being Architecture</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Set Focus Limit</h2>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Design intentional commerce habits. Control your screen-time and curb impulsive scrolling.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex p-1 rounded-2xl bg-white/5 border border-white/10 mb-6 max-w-xs mx-auto">
          <button
            onClick={() => setLimitType('daily')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              limitType === 'daily'
                ? 'bg-electric text-white shadow-md shadow-electric/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Daily Budget
          </button>
          <button
            onClick={() => setLimitType('weekly')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              limitType === 'weekly'
                ? 'bg-electric text-white shadow-md shadow-electric/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Weekly Horizon
          </button>
        </div>

        {/* 3D Radial Progress Chrono Ring */}
        <div className="flex flex-col items-center justify-center my-4 relative">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
              {/* Background Ring */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="currentColor"
                strokeWidth="10"
                className="text-white/10"
                fill="transparent"
              />
              {/* Dynamic Gradient Ring */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="url(#focusGradient)"
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-linear"
                fill="transparent"
              />
              <defs>
                <linearGradient id="focusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0084FF" />
                  <stop offset="50%" stopColor="#38A2FF" />
                  <stop offset="100%" stopColor="#00F5A0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-extrabold text-white tracking-tight font-mono">
                {formatTime(remainingSeconds)}
              </span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">
                Remaining Time
              </span>
              <span className="text-[10px] text-electric font-semibold mt-1 bg-electric/15 px-2 py-0.5 rounded-full">
                {Math.round(progressRatio * 100)}% used
              </span>
            </div>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="space-y-3 mb-6">
          <label className="text-xs font-semibold text-slate-300 block text-center">
            Choose Time Allocation
          </label>
          <div className="grid grid-cols-4 gap-2">
            {presetOptions.map((mins) => (
              <button
                key={mins}
                onClick={() => setDailyLimitMinutes(mins)}
                className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                  dailyLimitMinutes === mins
                    ? 'bg-electric/20 border-electric text-electric shadow-lg shadow-electric/15'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {mins} mins
              </button>
            ))}
          </div>

          {/* Slider */}
          <div className="pt-2 px-2">
            <input
              type="range"
              min={limitType === 'daily' ? 5 : 30}
              max={limitType === 'daily' ? 120 : 600}
              step={5}
              value={dailyLimitMinutes}
              onChange={(e) => setDailyLimitMinutes(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-electric"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>{limitType === 'daily' ? '5m' : '30m'}</span>
              <span className="text-electric font-bold">{dailyLimitMinutes} minutes target</span>
              <span>{limitType === 'daily' ? '2h' : '10h'}</span>
            </div>
          </div>
        </div>

        {/* Reset Session & Confirm Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onResetSession}
            className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            title="Reset Session Timer"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-electric to-blue-600 hover:from-electric-light hover:to-electric text-white shadow-lg shadow-electric/25 transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Lock Focus Protocol</span>
          </button>
        </div>
      </div>
    </div>
  );
};
