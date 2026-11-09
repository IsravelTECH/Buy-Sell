import React, { useState } from 'react';
import { Search, X, SlidersHorizontal, ArrowRight, Tag } from 'lucide-react';
import { Product } from '../../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(200);

  if (!isOpen) return null;

  const categories = ['All', 'Apparel', 'Decor', 'Electronics', 'Furniture', 'Collectibles'];

  const filtered = products.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) ||
                         p.description.toLowerCase().includes(query.toLowerCase()) ||
                         p.location.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesPrice = p.price <= maxPrice;
    return matchesQuery && matchesCategory && matchesPrice;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-24 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-panel-elevated rounded-3xl p-5 sm:p-6 border border-white/15 shadow-2xl flex flex-col max-h-[80vh]">
        
        {/* Header Search Bar */}
        <div className="relative flex items-center mb-4">
          <Search className="w-5 h-5 absolute left-4 text-electric pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search verified deals, vintage coats, mechanical cameras..."
            autoFocus
            className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent text-sm font-medium"
          />
          <button
            onClick={onClose}
            className="absolute right-3 p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Controls */}
        <div className="space-y-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-electric text-white shadow-md shadow-electric/25'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-electric" />
              Max Price: <strong className="text-white">${maxPrice}</strong>
            </span>
            <input
              type="range"
              min={10}
              max={300}
              step={5}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-36 h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-electric"
            />
          </div>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto mt-3 space-y-2 flex-1 pr-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-sm">No items matching current criteria</p>
              <button
                onClick={() => { setQuery(''); setSelectedCategory('All'); setMaxPrice(300); }}
                className="mt-2 text-xs text-electric hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-electric/30 transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-electric transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                      <span className="font-bold text-white">${item.price}</span>
                      <span>·</span>
                      <span>{item.location}</span>
                      <span>·</span>
                      <span className="text-aurora">{item.dealRating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-electric text-slate-400 group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
