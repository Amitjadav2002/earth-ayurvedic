import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Pill, Wine, Wheat } from 'lucide-react';

const HowToUseSection = () => {
  const { t } = useLanguage();

  const medicines = [
    { icon: Pill, title: 'howto.pills.title', desc: 'howto.pills.desc', step: '1' },
    { icon: Wine, title: 'howto.syrup.title', desc: 'howto.syrup.desc', step: '2' },
    { icon: Wheat, title: 'howto.powder.title', desc: 'howto.powder.desc', step: '3' },
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12 text-foreground"
        >
          {t('howto.title')}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {medicines.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl p-6 shadow-card relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-10 h-10 gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                {m.step}
              </div>
              <m.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{t(m.title)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(m.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
