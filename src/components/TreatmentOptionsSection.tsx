import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check, Truck, Star } from 'lucide-react';

const TreatmentOptionsSection = () => {
  const { t } = useLanguage();

  const options = [
    {
      price: '₹1000',
      title: t('treat.opt1Title'),
      subtitle: t('treat.opt1Sub'),
      includes: [t('treat.herbalPills'), t('treat.ayurvedicSyrup')],
      helps: [t('treat.helpBleeding'), t('treat.helpPain'), t('treat.helpSwelling')],
      popular: false,
    },
    {
      price: '₹1300',
      title: t('treat.opt2Title'),
      subtitle: t('treat.opt2Sub'),
      includes: [t('treat.herbalPills'), t('treat.ayurvedicSyrup'), t('treat.constPowder')],
      helps: [t('treat.helpConstipation'), t('treat.helpPiles'), t('treat.helpBleeding'), t('treat.helpPain')],
      popular: true,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-3xl mb-3 block">🩺</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
            {t('treat.title')}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-6 border-2 ${
                opt.popular
                  ? 'border-primary bg-accent shadow-earth'
                  : 'border-border bg-card shadow-medical'
              }`}
            >
              {opt.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3" /> {t('treat.recommended')}
                </div>
              )}

              <div className="text-center mb-5">
                <p className="text-3xl font-extrabold text-foreground mb-1">💰 {opt.price}</p>
                <h3 className="font-bold text-foreground">{opt.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{opt.subtitle}</p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{t('treat.includes')}</p>
                {opt.includes.map((inc, j) => (
                  <div key={j} className="flex items-center gap-2 py-1">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{inc}</span>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{t('treat.helpsIn')}</p>
                {opt.helps.map((h, j) => (
                  <div key={j} className="flex items-center gap-2 py-1">
                    <Check className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <Truck className="w-3.5 h-3.5" />
                <span>{t('treat.codAvailable')}</span>
              </div>

              <Link
                to="/order"
                className={`block text-center py-3 rounded-xl font-bold transition-all ${
                  opt.popular
                    ? 'gradient-cta text-primary-foreground shadow-cta hover:opacity-90'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                🟢 {t('hero.cta')}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentOptionsSection;
