import React, { useState } from 'react';
import { Search, Clock, Tag, Bell, Award, User, LogOut, Sparkles, ChevronDown } from 'lucide-react';

interface NavbarProps {
  user: { name: string; email: string; type: 'free' | 'premium' };
  onOpenSearch: () => void;
  onOpenFocus: () => void;
  onOpenWatchlist: () => void;
  onOpenReminders: () => void;
  onOpenUpgrade: () => void;
  onOpenAuth: () => void;
  onLogout: () => void;
  onToggleTier: () => void;
  sessionElapsedSeconds: number;
  dailyLimitMinutes: number;
  watchlistCount: number;
  remindersCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onOpenSearch,
  onOpenFocus,
  onOpenWatchlist,
  onOpenReminders,
  onOpenUpgrade,
  onOpenAuth,
  onLogout,
  onToggleTier,
  sessionElapsedSeconds,
  dailyLimitMinutes,
  watchlistCount,
  remindersCount,
}) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const formatElapsed = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const isLimitApproaching = sessionElapsedSeconds > dailyLimitMinutes * 60 * 0.8;

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-8 py-3.5 border-b border-white/10 bg-obsidian/75 backdrop-blur-2xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-lg shadow-electric/25 border border-white/10 hover:scale-105 transition-transform flex items-center justify-center bg-obsidian-light">
            <img src="/favicon.svg" alt="Buy&Sell" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-0.5">
              Buy<span className="text-electric">&</span><span className="text-slate-100">Sell</span>
            </span>
            <span className="hidden sm:block text-[10px] font-mono text-slate-400 tracking-wider">
              MINDFUL 3D COMMERCE
            </span>
          </div>
        </div>

        {/* Center: Search Bar Trigger (HUD style) */}
        <button
          onClick={onOpenSearch}
          className="hidden md:flex items-center justify-between w-72 lg:w-96 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 text-xs transition-all shadow-inner group"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-electric transition-colors" />
            <span>Search marketplace deals...</span>
          </div>
          <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 font-mono text-[10px] text-slate-400">
            ⌘K
          </kbd>
        </button>

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          
          {/* Mobile Search Button */}
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Mindful Focus HUD Counter */}
          <button
            onClick={onOpenFocus}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all ${
              isLimitApproaching
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 animate-pulse'
                : 'bg-white/5 border-white/10 hover:border-electric/40 text-slate-300 hover:text-white'
            }`}
            title="Open Focus Limit Cockpit"
          >
            <Clock className="w-3.5 h-3.5 text-electric" />
            <span>{formatElapsed(sessionElapsedSeconds)}</span>
          </button>

          {/* Watchlist Trigger */}
          <button
            onClick={onOpenWatchlist}
            className="relative p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-semibold"
            title="Saved Watchlist"
          >
            <Tag className="w-4 h-4 text-liquidGold" />
            <span className="hidden sm:inline">Watchlist</span>
            {watchlistCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-liquidGold text-black font-extrabold text-[10px]">
                {watchlistCount}
              </span>
            )}
          </button>

          {/* Reminders / Radar Trigger (Pro) */}
          <button
            onClick={user.type === 'premium' ? onOpenReminders : onOpenUpgrade}
            className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
            title={user.type === 'premium' ? "Price Radars" : "Unlock Deal Radars"}
          >
            <Bell className="w-4 h-4 text-electric" />
            {remindersCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-electric animate-ping" />
            )}
          </button>

          {/* Fast Role / Tier Switcher Pill */}
          <button
            onClick={onToggleTier}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 border shadow-sm ${
              user.type === 'premium'
                ? 'bg-liquidGold/20 border-liquidGold/40 text-liquidGold shadow-liquidGold/10'
                : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
            }`}
            title="Click to toggle between Free and Pro Tier for demo"
          >
            <Award className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider text-[11px]">
              {user.type === 'premium' ? 'Pro Member' : 'Free Mode'}
            </span>
          </button>

          {/* Upgrade Banner for Free Users */}
          {user.type === 'free' && (
            <button
              onClick={onOpenUpgrade}
              className="hidden lg:flex items-center gap-1 px-3.5 py-1.5 rounded-xl font-bold text-xs bg-gradient-to-r from-liquidGold to-amber-500 hover:from-amber-400 hover:to-liquidGold text-black shadow-md shadow-liquidGold/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Upgrade</span>
            </button>
          )}

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="p-1 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors flex items-center"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-electric to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 rounded-2xl glass-panel-elevated p-3 border border-white/15 shadow-2xl z-50 animate-fadeIn">
                <div className="px-2 py-1.5 border-b border-white/10 mb-2">
                  <p className="text-xs font-bold text-white truncate">{user.name}</p>
                  <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                  <span className={`inline-block mt-1 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                    user.type === 'premium' ? 'bg-liquidGold/20 text-liquidGold' : 'bg-white/10 text-slate-400'
                  }`}>
                    {user.type === 'premium' ? 'VIP Unlimited' : 'Free Tier'}
                  </span>
                </div>

                <div className="space-y-1">
                  <button
                    onClick={() => {
                      onToggleTier();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-2 py-1.5 rounded-xl text-xs text-slate-300 hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>Switch Tier Demo</span>
                    <Award className="w-3.5 h-3.5 text-liquidGold" />
                  </button>

                  <button
                    onClick={() => {
                      onOpenFocus();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-2 py-1.5 rounded-xl text-xs text-slate-300 hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>Focus Cockpit</span>
                    <Clock className="w-3.5 h-3.5 text-electric" />
                  </button>

                  {user.type === 'free' ? (
                    <button
                      onClick={() => {
                        onOpenUpgrade();
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-left px-2 py-1.5 rounded-xl text-xs font-bold text-liquidGold hover:bg-liquidGold/10 transition-colors flex items-center justify-between"
                    >
                      <span>Upgrade Plan</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  ) : null}

                  <hr className="my-1 border-white/10" />

                  <button
                    onClick={() => {
                      onLogout();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-2 py-1.5 rounded-xl text-xs text-red-400 hover:bg-red-500/10 transition-colors flex items-center justify-between"
                  >
                    <span>Sign Out</span>
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
