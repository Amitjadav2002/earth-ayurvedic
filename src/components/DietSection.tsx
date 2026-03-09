import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const DietSection = () => {
  const { t } = useLanguage();

  const eatItems = ['diet.eat1', 'diet.eat2', 'diet.eat3', 'diet.eat4', 'diet.eat5', 'diet.eat6'];
  const avoidItems = ['diet.avoid1', 'diet.avoid2', 'diet.avoid3', 'diet.avoid4', 'diet.avoid5', 'diet.avoid6'];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12 text-foreground"
        >
          {t('diet.title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent rounded-2xl p-6 shadow-card"
          >
            <h3 className="text-xl font-heading font-bold mb-4 text-primary flex items-center gap-2">
              <Check className="w-6 h-6" /> {t('diet.eat')}
            </h3>
            <ul className="space-y-3">
              {eatItems.map((key, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-earth-warm rounded-2xl p-6 shadow-card"
          >
            <h3 className="text-xl font-heading font-bold mb-4 text-destructive flex items-center gap-2">
              <X className="w-6 h-6" /> {t('diet.avoid')}
            </h3>
            <ul className="space-y-3">
              {avoidItems.map((key, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DietSection;
