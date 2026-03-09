import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, languageNames, Language } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import logo from '@/assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Earth Ayurvedic" className="h-10 w-auto" />
          <span className="font-heading text-lg font-bold text-primary hidden sm:block">Earth Ayurvedic</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t('nav.home')}</Link>
          <a href="#benefits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t('nav.reviews')}</a>
          <Link to="/order" className="gradient-cta text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            {t('nav.order')}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{languageNames[language]}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-earth overflow-hidden min-w-[140px] z-50"
                >
                  {(Object.keys(languageNames) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        language === lang ? 'bg-primary text-primary-foreground' : 'hover:bg-accent text-foreground'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium py-2">{t('nav.home')}</Link>
              <a href="#benefits" onClick={() => setMobileOpen(false)} className="text-sm font-medium py-2">{t('nav.reviews')}</a>
              <Link to="/order" onClick={() => setMobileOpen(false)} className="gradient-cta text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center">
                {t('nav.order')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
