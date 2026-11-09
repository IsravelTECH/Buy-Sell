import React from 'react';
import { X, Trash2, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { Product } from '../../data/products';

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  watchlist: Product[];
  onRemoveFromWatchlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const WatchlistDrawer: React.FC<WatchlistDrawerProps> = ({
  isOpen,
  onClose,
  watchlist,
  onRemoveFromWatchlist,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const totalValue = watchlist.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="w-full max-w-md h-full glass-panel-elevated p-4 sm:p-6 flex flex-col justify-between border-l border-white/10 shadow-2xl">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-liquidGold/20 text-liquidGold">
                <Tag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Saved Watchlist</h3>
                <p className="text-xs text-slate-400">{watchlist.length} tracked items</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* List items */}
          <div className="mt-4 space-y-3 max-h-[68vh] overflow-y-auto pr-1">
            {watchlist.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <Tag className="w-10 h-10 mx-auto mb-2 text-slate-600" />
                <p className="text-sm font-semibold text-slate-300">Your Watchlist is empty</p>
                <p className="text-xs text-slate-500 mt-1">
                  Tag products on the marketplace to track real-time price trends.
                </p>
              </div>
            ) : (
              watchlist.map((product) => (
                <div
                  key={product.id}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-electric/30 transition-all"
                >
                  <div
                    className="flex items-center gap-3 cursor-pointer flex-1"
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-electric transition-colors line-clamp-1">
                        {product.title}
                      </h4>
                      <p className="text-sm font-extrabold text-white mt-0.5">
                        ${product.price}
                      </p>
                      <span className="text-[10px] text-aurora font-mono">
                        {product.dealRating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onRemoveFromWatchlist(product.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors"
                      title="Remove from Watchlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Summary */}
        {watchlist.length > 0 && (
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Total Tracked Portfolio:</span>
              <span className="text-base font-extrabold text-white font-mono">${totalValue}</span>
            </div>
            <button
              onClick={() => alert('Exporting portfolio watchlist to PDF / alert digest.')}
              className="w-full py-3 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Export Price Digest
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
