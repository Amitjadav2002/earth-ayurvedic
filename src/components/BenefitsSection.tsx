import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Zap, Droplets, Flame, Bug, ShieldCheck, Sun, CircleDot, Apple } from 'lucide-react';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Zap, key: 'benefits.pain', color: 'text-secondary' },
    { icon: Droplets, key: 'benefits.bleeding', color: 'text-destructive' },
    { icon: Flame, key: 'benefits.burning', color: 'text-secondary' },
    { icon: Bug, key: 'benefits.itching', color: 'text-primary' },
    { icon: ShieldCheck, key: 'benefits.pus', color: 'text-primary' },
    { icon: Sun, key: 'benefits.dryout', color: 'text-secondary' },
    { icon: CircleDot, key: 'benefits.lumps', color: 'text-primary' },
    { icon: Apple, key: 'benefits.constipation', color: 'text-primary' },
  ];

  return (
    <section id="benefits" className="py-20 gradient-section">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12 text-foreground"
        >
          {t('benefits.title')}
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-xl p-5 shadow-card text-center"
            >
              <b.icon className={`w-8 h-8 mx-auto mb-3 ${b.color}`} />
              <p className="text-sm font-semibold text-foreground">{t(b.key)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
