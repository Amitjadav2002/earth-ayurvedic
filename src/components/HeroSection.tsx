import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Truck, Leaf, Users, Clock, CreditCard } from 'lucide-react';
import productImage from '@/assets/product-image.png';

const HeroSection = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Leaf, text: t('hero.ayurvedic') },
    { icon: Users, text: t('hero.patients') },
    { icon: Clock, text: t('hero.experience') },
    { icon: CreditCard, text: t('hero.cod') },
  ];

  return (
    <section className="gradient-hero min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-accent-foreground tracking-wide uppercase">{t('hero.badge')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-primary font-semibold mb-6">{t('hero.subtitle')}</p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2.5 bg-background border border-border px-3.5 py-2.5 rounded-xl shadow-card"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <h.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground leading-tight">{h.text}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/order"
              className="inline-flex items-center gap-2 gradient-cta text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all shadow-cta"
            >
              🟢 {t('hero.cta')} →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-50" />
              <img
                src={productImage}
                alt="Earth Ayurvedic Piles Care"
                className="relative w-full max-w-md lg:max-w-lg animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t z-50">
  <div className="container mx-auto px-4 py-3">
    <Link
      to="/order"
      className="block w-full text-center gradient-cta text-primary-foreground py-3 rounded-lg text-lg font-bold hover:opacity-90 transition-all"
    >
      Cash On Delivery - {t('hero.cta')} →
    </Link>
  </div>
</div>
    </section>
  );
};

export default HeroSection;
