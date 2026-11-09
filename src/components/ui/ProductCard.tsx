import React, { useRef, useState } from 'react';
import { Product } from '../../data/products';
import { Sparkles, Tag, ShieldCheck, Box } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onToggleWatchlist: (product: Product) => void;
  isWatchlisted: boolean;
  onSetReminder: (product: Product) => void;
  isPremium: boolean;
  onTriggerUpgrade: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onToggleWatchlist,
  isWatchlisted,
  onSetReminder,
  isPremium,
  onTriggerUpgrade
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [sheenPosition, setSheenPosition] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12; // tilt angle
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
    setSheenPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale3d(1.025, 1.025, 1.025)' : 'scale3d(1, 1, 1)'}`,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className="relative rounded-3xl glass-panel p-3.5 sm:p-4 overflow-hidden group cursor-pointer border border-white/10 hover:border-electric/40 hover:shadow-2xl hover:shadow-electric/15"
      onClick={() => onSelect(product)}
    >
      {/* Dynamic Specular Light Sheen */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-10"
        style={{
          background: `radial-gradient(circle 260px at ${sheenPosition.x}% ${sheenPosition.y}%, rgba(255, 255, 255, 0.12), transparent 70%)`,
        }}
      />

      {/* Image Container with 3D Badge */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-obsidian-light mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Live 3D Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10">
          <Box className="w-3.5 h-3.5 text-electric animate-spin" style={{ animationDuration: '8s' }} />
          <span>3D Mesh</span>
        </div>

        {/* Watchlist Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWatchlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-20 ${
            isWatchlisted
              ? 'bg-liquidGold text-black shadow-lg shadow-liquidGold/40 scale-105'
              : 'bg-black/50 text-white hover:bg-black/80 hover:text-liquidGold border border-white/10'
          }`}
          title="Save to Watchlist"
        >
          <Tag className="w-4 h-4" />
        </button>

        {/* Condition tag */}
        <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-lg text-[11px] font-medium bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
          {product.condition}
        </div>
      </div>

      {/* Product Metadata */}
      <div className="space-y-1.5">
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              ${product.price}
            </span>
            <span className="text-xs line-through text-slate-500 font-mono">
              ${product.originalPrice}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-aurora bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            {product.dealRating}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-slate-100 line-clamp-1 group-hover:text-electric transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-white/5">
          <span className="truncate">{product.location}</span>
          <span className="font-mono text-slate-500">{product.timeAgo}</span>
        </div>
      </div>

      {/* Interactive Quick-Action Drawer on Hover */}
      <div className="mt-3 pt-2 flex items-center justify-between gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-white/5 hover:bg-electric hover:text-white text-slate-300 transition-all border border-white/10 flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Inspect 3D</span>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (isPremium) {
              onSetReminder(product);
            } else {
              onTriggerUpgrade();
            }
          }}
          className={`p-2 rounded-xl text-xs border transition-all ${
            isPremium
              ? 'bg-white/5 border-white/10 hover:border-electric/40 text-slate-300 hover:text-white'
              : 'bg-liquidGold/10 border-liquidGold/30 text-liquidGold hover:bg-liquidGold/20'
          }`}
          title={isPremium ? "Set Deal Alert" : "Unlock Deal Alerts (Premium)"}
        >
          <Sparkles className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
