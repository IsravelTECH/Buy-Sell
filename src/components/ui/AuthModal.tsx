import React, { useState } from 'react';
import { X, Mail, Lock, Sparkles, Check, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: { name: string; email: string; type: 'free' | 'premium' }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLogin,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'isravel@gmail.com' && password === 'isravel@1234') {
      onLogin({ name: 'Isravel (Pro)', email, type: 'premium' });
    } else {
      onLogin({ name: email.split('@')[0] || 'User', email: email || 'user@example.com', type: 'free' });
    }
    onClose();
  };

  const handleQuickDemo = (tier: 'free' | 'premium') => {
    if (tier === 'premium') {
      onLogin({ name: 'Isravel (Pro)', email: 'isravel@gmail.com', type: 'premium' });
    } else {
      onLogin({ name: 'Guest Explorer', email: 'guest@buysell.io', type: 'free' });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-md glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-2xl bg-electric/20 text-electric mb-3 border border-electric/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight">
            {isRegistering ? 'Create Free Account' : 'Welcome to BuySellUnplugged'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Mindful commerce with screen-time limits & 3D product inspection.
          </p>
        </div>

        {/* Social Authentication */}
        <div className="space-y-2 mb-4">
          <button
            onClick={() => handleQuickDemo('premium')}
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <span className="text-[#4285F4] font-bold text-sm">G</span>
            <span>Continue with Google</span>
          </button>
          <button
            onClick={() => handleQuickDemo('premium')}
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <span className="text-white font-bold text-sm"></span>
            <span>Sign in with Apple</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center my-4">
          <div className="w-full h-px bg-white/10" />
          <span className="absolute bg-obsidian-light px-3 text-[11px] font-mono text-slate-500 uppercase">
            or email credentials
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="Enter secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-electric to-blue-600 hover:from-electric-light hover:to-electric text-white shadow-lg shadow-electric/25 transition-all mt-2"
          >
            {isRegistering ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        {/* Demo Fast Switch */}
        <div className="mt-5 p-3 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1.5">
          <p className="text-[11px] font-semibold text-slate-400">Instant Demo Shortcuts:</p>
          <div className="flex gap-2">
            <button
              onClick={() => handleQuickDemo('free')}
              className="flex-1 py-1.5 rounded-lg text-[11px] font-bold bg-white/10 hover:bg-white/20 text-slate-300"
            >
              Sign In as Free
            </button>
            <button
              onClick={() => handleQuickDemo('premium')}
              className="flex-1 py-1.5 rounded-lg text-[11px] font-bold bg-liquidGold/20 hover:bg-liquidGold/30 text-liquidGold border border-liquidGold/30"
            >
              Sign In as Pro (Isravel)
            </button>
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-xs text-electric hover:underline"
          >
            {isRegistering ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};
