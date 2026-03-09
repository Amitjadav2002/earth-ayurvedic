import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Truck, Shield } from 'lucide-react';

const OrderCTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 gradient-medical">
      <div className="container mx-auto text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            {t('ordercta.title')}
          </h2>
          <p className="text-muted-foreground mb-6">{t('ordercta.subtitle')}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <div className="bg-card border border-border rounded-xl px-5 py-3 shadow-card">
              <p className="text-sm text-muted-foreground">{t('treat.opt1Sub')}</p>
              <p className="text-2xl font-extrabold text-foreground">₹1000</p>
            </div>
            <div className="bg-primary/5 border-2 border-primary rounded-xl px-5 py-3 shadow-earth">
              <p className="text-sm text-muted-foreground">{t('treat.opt2Sub')}</p>
              <p className="text-2xl font-extrabold text-foreground">₹1300</p>
            </div>
          </div>

          <Link
            to="/order"
            className="inline-flex items-center gap-2 gradient-cta text-primary-foreground px-10 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all shadow-cta"
          >
            🟢 {t('hero.cta')} →
          </Link>

          <div className="flex justify-center gap-6 mt-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-primary" /> {t('order.free')}</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> {t('order.cod')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderCTASection;
