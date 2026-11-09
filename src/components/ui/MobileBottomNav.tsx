import React from 'react';
import { Home, Search, Clock, Tag, Award, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenSearch: () => void;
  onOpenFocus: () => void;
  onOpenWatchlist: () => void;
  onOpenUpgrade: () => void;
  onScrollToTop: () => void;
  watchlistCount: number;
  isPremium: boolean;
  sessionElapsedSeconds: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenSearch,
  onOpenFocus,
  onOpenWatchlist,
  onOpenUpgrade,
  onScrollToTop,
  watchlistCount,
  isPremium,
  sessionElapsedSeconds,
}) => {
  return (
    <nav className="md:hidden fixed bottom-3 left-3 right-3 z-40">
      <div className="glass-panel-elevated rounded-2xl p-1.5 border border-white/15 shadow-2xl flex items-center justify-around bg-obsidian-card/90 backdrop-blur-2xl">
        
        {/* Home */}
        <button
          onClick={onScrollToTop}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white transition-colors flex-1"
        >
          <Home className="w-5 h-5 text-electric" />
          <span className="text-[10px] font-semibold mt-0.5">Explore</span>
        </button>

        {/* Search */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white transition-colors flex-1"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Search</span>
        </button>

        {/* Focus Timer */}
        <button
          onClick={onOpenFocus}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white transition-colors flex-1 relative"
        >
          <div className="relative">
            <Clock className="w-5 h-5 text-aurora" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-aurora animate-pulse" />
          </div>
          <span className="text-[10px] font-semibold mt-0.5">Focus</span>
        </button>

        {/* Watchlist */}
        <button
          onClick={onOpenWatchlist}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white transition-colors flex-1 relative"
        >
          <div className="relative">
            <Tag className="w-5 h-5 text-liquidGold" />
            {watchlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 px-1 py-0.2 rounded-full bg-liquidGold text-black font-extrabold text-[9px] leading-tight">
                {watchlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold mt-0.5">Saved</span>
        </button>

        {/* VIP / Pro */}
        <button
          onClick={onOpenUpgrade}
          className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors flex-1 ${
            isPremium ? 'text-liquidGold' : 'text-slate-300 hover:text-white'
          }`}
        >
          {isPremium ? (
            <Award className="w-5 h-5 text-liquidGold" />
          ) : (
            <Sparkles className="w-5 h-5 text-liquidGold" />
          )}
          <span className="text-[10px] font-semibold mt-0.5">
            {isPremium ? 'VIP' : 'Upgrade'}
          </span>
        </button>

      </div>
    </nav>
  );
};
