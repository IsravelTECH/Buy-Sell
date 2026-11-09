import React from 'react';
import { Sparkles, Shield, Clock, Compass, Zap, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenFocus: () => void;
  onOpenUpgrade: () => void;
  isPremium: boolean;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenFocus,
  onOpenUpgrade,
  isPremium,
  selectedCategory,
  onSelectCategory,
}) => {
  const categories = ['All', 'Apparel', 'Decor', 'Electronics', 'Furniture', 'Collectibles'];

  return (
    <section className="relative pt-4 sm:pt-12 pb-6 sm:pb-12 text-center max-w-5xl mx-auto px-3 sm:px-4 z-10">
      
      {/* Top Innovation Badge */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-slate-300 backdrop-blur-md mb-3 sm:mb-4 shadow-sm hover:border-electric/40 transition-colors cursor-pointer">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-electric animate-spin" style={{ animationDuration: '6s' }} />
        <span>Buy&amp;Sell 2.0 • 3D Spatial Commerce Engine</span>
        <span className="w-1.5 h-1.5 rounded-full bg-aurora animate-pulse" />
      </div>

      {/* Main Spatial Headline */}
      <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-[1.15]">
        The Mindful Marketplace. <br className="hidden sm:inline" />
        <span className="text-gradient-electric">Unplugged from Noise.</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed px-2">
        High-curation peer commerce powered by real-time WebGL 3D inspection, automated price drop radars, and intentional session time limits.
      </p>

      {/* Interactive Quick Action Buttons */}
      <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <button
          onClick={onOpenFocus}
          className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-lg transition-all flex items-center gap-2 shadow-lg"
        >
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric" />
          <span>Set Focus Limit</span>
        </button>

        {!isPremium && (
          <button
            onClick={onOpenUpgrade}
            className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-liquidGold via-amber-400 to-yellow-500 hover:from-amber-300 hover:to-liquidGold text-black transition-all flex items-center gap-2 shadow-lg shadow-liquidGold/20"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Unlock VIP Deal Radar</span>
          </button>
        )}
      </div>

      {/* Live Metrics Ticker Bar */}
      <div className="mt-6 sm:mt-10 grid grid-cols-3 gap-1.5 sm:gap-4 max-w-2xl mx-auto p-2 sm:p-3 rounded-2xl glass-panel border border-white/10">
        <div className="text-center">
          <p className="text-base sm:text-2xl font-extrabold text-white font-mono">100%</p>
          <p className="text-[9px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Peer Deals</p>
        </div>
        <div className="text-center border-x border-white/10">
          <p className="text-base sm:text-2xl font-extrabold text-electric font-mono">60 FPS</p>
          <p className="text-[9px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">3D WebGL</p>
        </div>
        <div className="text-center">
          <p className="text-base sm:text-2xl font-extrabold text-aurora font-mono">&lt; 30m</p>
          <p className="text-[9px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Screen Time</p>
        </div>
      </div>

      {/* Category Navigation Ribbon */}
      <div className="mt-6 sm:mt-8 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar px-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-electric text-white shadow-lg shadow-electric/25 scale-105'
                : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};
