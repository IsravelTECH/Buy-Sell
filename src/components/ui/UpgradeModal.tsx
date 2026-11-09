import React, { useRef, useState } from 'react';
import { X, Check, Sparkles, ShieldCheck, Zap, ArrowRight, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmUpgrade: (plan: 'monthly' | 'yearly') => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onConfirmUpgrade,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  if (!isOpen) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -15);
    setRotateY(((x - centerX) / centerX) * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const triggerSuccess = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#0084FF', '#00F5A0', '#FFFFFF']
    });
    onConfirmUpgrade(billingCycle);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-liquidGold/30 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-liquidGold/15 blur-[90px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          
          {/* Left Column: 3D Interactive Membership Card */}
          <div className="flex flex-col items-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
                transition: 'transform 0.1s ease-out',
              }}
              className="w-full max-w-sm aspect-[1.586] rounded-3xl p-6 relative overflow-hidden preserve-3d cursor-pointer shadow-2xl border border-liquidGold/40 bg-gradient-to-br from-amber-500/20 via-obsidian-light to-amber-950/40"
            >
              {/* Metallic Damascus Texture Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-liquidGold" />
                    <span className="font-extrabold tracking-widest text-xs uppercase text-liquidGold">
                      Buy&amp;Sell Visionary
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-liquidGold/20 text-liquidGold border border-liquidGold/40">
                    VIP TIER
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                    Unlimited Access Token
                  </p>
                  <p className="text-xl font-mono tracking-widest text-white font-bold">
                    8842 •••• •••• 2026
                  </p>
                </div>

                <div className="flex items-end justify-between border-t border-white/10 pt-3">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Status</p>
                    <p className="text-xs font-bold text-aurora flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-aurora animate-pulse" />
                      Priority Realtime
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Access</p>
                    <p className="text-xs font-bold text-white">Full Spectrum</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4 flex items-center gap-1.5 text-center">
              <Sparkles className="w-3.5 h-3.5 text-liquidGold" />
              Hover or tilt to inspect interactive Damascus foil
            </p>
          </div>

          {/* Right Column: Pricing & Perks */}
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-liquidGold/20 text-liquidGold border border-liquidGold/30">
                Premium Membership
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2">
                Unlock Mindful Commerce
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Gain competitive buyer advantages, instant price drop radars, and screen-time mastery.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex p-1 rounded-2xl bg-white/5 border border-white/10 max-w-xs">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-liquidGold text-black font-extrabold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly ($4.99)
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all relative ${
                  billingCycle === 'yearly'
                    ? 'bg-liquidGold text-black font-extrabold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Annual ($49.99)
                <span className="absolute -top-2 -right-1 px-1.5 py-0.5 rounded-full bg-aurora text-[9px] text-black font-extrabold">
                  SAVE 20%
                </span>
              </button>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {[
                { title: 'Full 3D Model Inspector', desc: 'Examine texture, stitching & wear in real-time WebGL orbit.' },
                { title: 'Sub-Second Deal Alerts', desc: 'Instant push & SMS notifications on target price drops.' },
                { title: 'Mindful Focus Limiter', desc: 'Prevent compulsive buying with customizable session budgets.' },
                { title: 'Unlimited Cloud Watchlist', desc: 'Track up to 200 items with live price trajectory graphs.' },
                { title: 'Direct Encrypted Peer Messaging', desc: 'Skip public comments with private seller communication.' }
              ].map((perk, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-liquidGold/20 text-liquidGold mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{perk.title}</h4>
                    <p className="text-[11px] text-slate-400">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={triggerSuccess}
              className="w-full py-4 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-liquidGold via-amber-400 to-yellow-500 hover:from-amber-300 hover:to-liquidGold text-black shadow-xl shadow-liquidGold/20 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Activate Premium Membership</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
