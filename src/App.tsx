import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product } from './data/products';
import { SpatialBackground } from './components/3d/SpatialBackground';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/ui/HeroSection';
import { ProductCard } from './components/ui/ProductCard';
import { ProductInspector3D } from './components/3d/ProductInspector3D';
import { FocusDrawer } from './components/ui/FocusDrawer';
import { SearchModal } from './components/ui/SearchModal';
import { ReminderModal, ReminderItem } from './components/ui/ReminderModal';
import { WatchlistDrawer } from './components/ui/WatchlistDrawer';
import { UpgradeModal } from './components/ui/UpgradeModal';
import { AuthModal } from './components/ui/AuthModal';
import { Sparkles, ShieldCheck, HeartHandshake, Zap, BellRing } from 'lucide-react';

export function App() {
  // Current user state (default: free mode)
  const [user, setUser] = useState<{ name: string; email: string; type: 'free' | 'premium' }>(() => {
    const saved = localStorage.getItem('buysell_logged_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // ignore
      }
    }
    return { name: 'Guest Explorer', email: 'guest@buysell.io', type: 'free' };
  });

  // Category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Modal visibility states
  const [inspectorProduct, setInspectorProduct] = useState<Product | null>(null);
  const [reminderTargetProduct, setReminderTargetProduct] = useState<Product | null>(null);
  const [isFocusDrawerOpen, setIsFocusDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Watchlist & Reminders state
  const [watchlist, setWatchlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem('buysell_watchlist');
    return saved ? JSON.parse(saved) : [PRODUCTS[0]];
  });

  const [reminders, setReminders] = useState<ReminderItem[]>(() => {
    const saved = localStorage.getItem('buysell_reminders');
    return saved ? JSON.parse(saved) : [
      {
        id: 'rem-sample',
        productId: PRODUCTS[0].id,
        productTitle: PRODUCTS[0].title,
        targetPrice: 20,
        reminderDate: 'Next 24h',
        createdAt: 'Today',
      }
    ];
  });

  // Focus screen time manager
  const [dailyLimitMinutes, setDailyLimitMinutes] = useState<number>(30);
  const [limitType, setLimitType] = useState<'daily' | 'weekly'>('daily');
  const [sessionElapsedSeconds, setSessionElapsedSeconds] = useState<number>(0);
  const [showLimitZenBanner, setShowLimitZenBanner] = useState(false);

  // Keyboard shortcut (Cmd+K / Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Timer loop for mindful focus limit
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionElapsedSeconds((prev) => {
        const next = prev + 1;
        if (next === dailyLimitMinutes * 60) {
          setShowLimitZenBanner(true);
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [dailyLimitMinutes]);

  // Persist watchlist & user
  useEffect(() => {
    localStorage.setItem('buysell_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem('buysell_reminders', JSON.stringify(reminders));
  }, [reminders]);

  useEffect(() => {
    localStorage.setItem('buysell_logged_user', JSON.stringify(user));
  }, [user]);

  // Watchlist handlers
  const handleToggleWatchlist = (product: Product) => {
    setWatchlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromWatchlist = (productId: string) => {
    setWatchlist((prev) => prev.filter((p) => p.id !== productId));
  };

  // Reminder handlers
  const handleAddReminder = (item: ReminderItem) => {
    setReminders((prev) => [...prev, item]);
  };

  const handleRemoveReminder = (id: string) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
  };

  const handleOpenReminderForProduct = (product: Product) => {
    setReminderTargetProduct(product);
    setIsReminderModalOpen(true);
  };

  // Switch demo tier
  const handleToggleTier = () => {
    setUser((prev) => ({
      ...prev,
      type: prev.type === 'premium' ? 'free' : 'premium',
      name: prev.type === 'premium' ? 'Guest Explorer' : 'Isravel (Pro)',
    }));
  };

  // Filter products by selected category
  const filteredProducts = PRODUCTS.filter((p) => {
    return selectedCategory === 'All' || p.category === selectedCategory;
  });

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col selection:bg-electric selection:text-white">
      {/* Three.js 3D WebGL Spatial Background */}
      <SpatialBackground />

      {/* Floating Zen Mode Notice when focus limit is reached */}
      {showLimitZenBanner && (
        <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-black px-4 py-2.5 text-center text-xs font-bold flex items-center justify-center gap-2 shadow-xl animate-fadeIn">
          <BellRing className="w-4 h-4" />
          <span>Mindful Focus Target Reached ({dailyLimitMinutes} mins). Take a break and step away from the screen!</span>
          <button
            onClick={() => setShowLimitZenBanner(false)}
            className="ml-3 px-2 py-0.5 rounded-md bg-black/20 hover:bg-black/30 text-white text-[10px]"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Glass Navigation Bar */}
      <Navbar
        user={user}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFocus={() => setIsFocusDrawerOpen(true)}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        onOpenReminders={() => {
          setReminderTargetProduct(null);
          setIsReminderModalOpen(true);
        }}
        onOpenUpgrade={() => setIsUpgradeOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={() => {
          setUser({ name: 'Guest Explorer', email: 'guest@buysell.io', type: 'free' });
        }}
        onToggleTier={handleToggleTier}
        sessionElapsedSeconds={sessionElapsedSeconds}
        dailyLimitMinutes={dailyLimitMinutes}
        watchlistCount={watchlist.length}
        remindersCount={reminders.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 max-w-7xl mx-auto w-full px-3 sm:px-8 pb-20">
        
        {/* Spatial 3D Hero Section */}
        <HeroSection
          onOpenFocus={() => setIsFocusDrawerOpen(true)}
          onOpenUpgrade={() => setIsUpgradeOpen(true)}
          isPremium={user.type === 'premium'}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 3D Product Catalog Grid */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-white tracking-tight">
                Curated Listings
              </h2>
              <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                {filteredProducts.length} verified items
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="hidden sm:inline">Spatial Tilt: Active</span>
              <span className="w-2 h-2 rounded-full bg-aurora animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setInspectorProduct(p)}
                onToggleWatchlist={handleToggleWatchlist}
                isWatchlisted={watchlist.some((w) => w.id === product.id)}
                onSetReminder={handleOpenReminderForProduct}
                isPremium={user.type === 'premium'}
                onTriggerUpgrade={() => setIsUpgradeOpen(true)}
              />
            ))}
          </div>
        </div>

        {/* Mindful Commerce Pledge / Footer Ribbon */}
        <section className="mt-20 p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-electric/10 via-transparent to-liquidGold/10 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <HeartHandshake className="w-8 h-8 mx-auto text-electric" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              A Platform Engineered for People, Not Addiction
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              BuySellUnplugged does not use infinite algorithmic dopamine loops. You set your time budget, inspect genuine items with real-time 3D PBR accuracy, and directly negotiate peer-to-peer.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-6 px-4 text-center text-xs text-slate-500">
        <p>© 2026 BuySellUnplugged • High-Fidelity 3D Spatial E-Commerce</p>
      </footer>

      {/* 3D Product Inspector Modal */}
      {inspectorProduct && (
        <ProductInspector3D
          product={inspectorProduct}
          onClose={() => setInspectorProduct(null)}
          onSetReminder={handleOpenReminderForProduct}
          onToggleWatchlist={handleToggleWatchlist}
          isWatchlisted={watchlist.some((w) => w.id === inspectorProduct.id)}
          isPremium={user.type === 'premium'}
          onTriggerUpgrade={() => {
            setInspectorProduct(null);
            setIsUpgradeOpen(true);
          }}
        />
      )}

      {/* Mindful Focus Cockpit Drawer */}
      <FocusDrawer
        isOpen={isFocusDrawerOpen}
        onClose={() => setIsFocusDrawerOpen(false)}
        dailyLimitMinutes={dailyLimitMinutes}
        setDailyLimitMinutes={setDailyLimitMinutes}
        sessionElapsedSeconds={sessionElapsedSeconds}
        limitType={limitType}
        setLimitType={setLimitType}
        onResetSession={() => {
          setSessionElapsedSeconds(0);
          setShowLimitZenBanner(false);
        }}
      />

      {/* Spatial Search HUD Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setInspectorProduct(p)}
      />

      {/* Deal Alert & Price Drop Modal */}
      <ReminderModal
        isOpen={isReminderModalOpen}
        onClose={() => setIsReminderModalOpen(false)}
        product={reminderTargetProduct}
        reminders={reminders}
        onAddReminder={handleAddReminder}
        onRemoveReminder={handleRemoveReminder}
      />

      {/* Watchlist Drawer */}
      <WatchlistDrawer
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        watchlist={watchlist}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
        onSelectProduct={(p) => setInspectorProduct(p)}
      />

      {/* 3D Membership Token / Upgrade Modal */}
      <UpgradeModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        onConfirmUpgrade={() => {
          setUser({ name: 'Isravel (Pro)', email: 'isravel@gmail.com', type: 'premium' });
          setIsUpgradeOpen(false);
        }}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={(newUser) => setUser(newUser)}
      />
    </div>
  );
}
