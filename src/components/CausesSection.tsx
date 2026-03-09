import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { AlertTriangle, Armchair, UtensilsCrossed, Droplets, HeartPulse } from 'lucide-react';

const CausesSection = () => {
  const { t } = useLanguage();

  const causes = [
    { icon: AlertTriangle, title: t('causes.cause1') },
    { icon: UtensilsCrossed, title: t('causes.cause2') },
    { icon: Armchair, title: t('causes.cause3') },
    { icon: Droplets, title: t('causes.cause4') },
    { icon: HeartPulse, title: t('causes.cause5') },
  ];

  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-10 text-foreground"
        >
          {t('causes.title')}
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {causes.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 bg-background border border-border rounded-xl px-5 py-3.5 shadow-card"
            >
              <c.icon className="w-5 h-5 text-secondary shrink-0" />
              <span className="font-medium text-foreground text-sm">{c.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
