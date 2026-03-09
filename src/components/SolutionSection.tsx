import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Pill, Wine, Sparkles, Check } from 'lucide-react';
import productImage from '@/assets/product-image.png';

const SolutionSection = () => {
  const { t } = useLanguage();

  const medicines = [
    { icon: Pill, name: t('solution.pills'), color: 'bg-primary' },
    { icon: Wine, name: t('solution.syrup'), color: 'bg-secondary' },
    { icon: Sparkles, name: t('solution.powder'), color: 'bg-medical-green' },
  ];

  const benefits = [
    t('solution.b1'), t('solution.b2'), t('solution.b3'), t('solution.b4'),
  ];

  return (
    <section className="py-16 sm:py-20 gradient-medical">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-3xl mb-3 block">🌿</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
            {t('solution.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img src={productImage} alt="Earth Ayurvedic" className="w-full max-w-xs drop-shadow-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-foreground mb-4">{t('solution.combo')}</h3>
            <div className="space-y-3 mb-6">
              {medicines.map((m, i) => (
                <div key={i} className="flex items-center gap-3 bg-background rounded-xl p-3.5 shadow-card border border-border">
                  <div className={`w-10 h-10 ${m.color} rounded-lg flex items-center justify-center`}>
                    <m.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-foreground">{m.name}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2.5">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
