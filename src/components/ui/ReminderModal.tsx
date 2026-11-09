import React, { useState } from 'react';
import { X, Bell, Calendar, DollarSign, CheckCircle, Trash2, Sparkles } from 'lucide-react';
import { Product } from '../../data/products';

export interface ReminderItem {
  id: string;
  productId: string;
  productTitle: string;
  targetPrice: number;
  reminderDate: string;
  createdAt: string;
}

interface ReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  reminders: ReminderItem[];
  onAddReminder: (reminder: ReminderItem) => void;
  onRemoveReminder: (id: string) => void;
}

export const ReminderModal: React.FC<ReminderModalProps> = ({
  isOpen,
  onClose,
  product,
  reminders,
  onAddReminder,
  onRemoveReminder,
}) => {
  const [targetPrice, setTargetPrice] = useState<number>(product ? Math.max(product.price - 5, 5) : 20);
  const [reminderDate, setReminderDate] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'create' | 'list'>('create');
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    const newReminder: ReminderItem = {
      id: `rem-${Date.now()}`,
      productId: product.id,
      productTitle: product.title,
      targetPrice,
      reminderDate: reminderDate || 'Next 24 hours',
      createdAt: new Date().toLocaleDateString(),
    };

    onAddReminder(newReminder);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setActiveTab('list');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto glass-panel-elevated rounded-3xl p-5 sm:p-8 border border-white/15 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab switch */}
        <div className="flex p-1 rounded-2xl bg-white/5 border border-white/10 mb-6 max-w-xs mx-auto">
          <button
            onClick={() => setActiveTab('create')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'create'
                ? 'bg-electric text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Alert
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'list'
                ? 'bg-electric text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Active Radars ({reminders.length})
          </button>
        </div>

        {activeTab === 'create' ? (
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-electric/20 text-electric flex items-center justify-center mx-auto mb-3 border border-electric/30">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Set Price Drop Radar</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                {product ? `Monitoring: ${product.title}` : 'Configure real-time price trigger notification'}
              </p>
            </div>

            {savedSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-2">
                <CheckCircle className="w-12 h-12 text-aurora animate-bounce" />
                <h4 className="text-base font-bold text-white">Radar Activated!</h4>
                <p className="text-xs text-slate-400">We'll alert you the instant price drops below target.</p>
              </div>
            ) : (
              <form onSubmit={handleSave} className="space-y-4">
                {/* Target Price */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-electric" />
                    Notify me when price drops below:
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold">$</span>
                    <input
                      type="number"
                      required
                      min={1}
                      max={product ? product.price : 999}
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-electric"
                    />
                  </div>
                  {product && (
                    <p className="text-[11px] text-slate-400 mt-1">
                      Current listed price is <strong className="text-white">${product.price}</strong>
                    </p>
                  )}
                </div>

                {/* Reminder Date */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-electric" />
                    Target Revisit Date:
                  </label>
                  <input
                    type="date"
                    value={reminderDate}
                    onChange={(e) => setReminderDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-electric to-blue-600 hover:from-electric-light hover:to-electric text-white shadow-lg shadow-electric/25 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Arm Price Radar</span>
                </button>
              </form>
            )}
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Your Active Deal Radars</h3>
            {reminders.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                <Bell className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                <p className="text-xs">No active alerts set yet.</p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {reminders.map((r) => (
                  <div
                    key={r.id}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <h5 className="text-xs font-bold text-white">{r.productTitle}</h5>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5 font-mono">
                        <span className="text-aurora font-bold">Alert at &le; ${r.targetPrice}</span>
                        <span>·</span>
                        <span>{r.reminderDate}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveReminder(r.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors"
                      title="Delete reminder"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
