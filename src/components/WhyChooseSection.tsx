import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Users, Clock, ThumbsUp, Leaf } from 'lucide-react';

const WhyChooseSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '3.5L+', label: t('trust.patients') },
    { icon: Clock, value: '10+', label: t('trust.years') },
    { icon: ThumbsUp, value: '98%', label: t('trust.satisfaction') },
    { icon: Leaf, value: '100%', label: t('trust.ayurvedic') },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-10 text-foreground"
        >
          {t('trust.title')}
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-card border border-border rounded-2xl p-5 shadow-card"
            >
              <div className="w-12 h-12 gradient-cta rounded-full flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground font-medium mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
