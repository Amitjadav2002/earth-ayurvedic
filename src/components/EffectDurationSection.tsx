import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const EffectDurationSection = () => {
  const { t } = useLanguage();

  const phases = [
    { time: 'effect.week1', desc: 'effect.week1desc', progress: 25 },
    { time: 'effect.week2', desc: 'effect.week2desc', progress: 50 },
    { time: 'effect.week3', desc: 'effect.week3desc', progress: 75 },
    { time: 'effect.week4', desc: 'effect.week4desc', progress: 100 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            {t('effect.title')}
          </h2>
        </motion.div>
        <div className="max-w-2xl mx-auto space-y-0">
          {phases.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full gradient-cta flex-shrink-0 mt-1" />
                {i < phases.length - 1 && <div className="w-0.5 flex-1 bg-primary/20" />}
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-foreground mb-1">{t(p.time)}</h3>
                <p className="text-sm text-muted-foreground">{t(p.desc)}</p>
                <div className="mt-2 w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full gradient-cta"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EffectDurationSection;
