import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Droplets, Flame, Bug, CircleAlert } from 'lucide-react';

const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    { icon: Droplets, title: t('problem.piles'), desc: t('problem.pilesDesc'), color: 'text-destructive' },
    { icon: Flame, title: t('problem.massa'), desc: t('problem.massaDesc'), color: 'text-secondary' },
    { icon: Bug, title: t('problem.fistula'), desc: t('problem.fistulaDesc'), color: 'text-primary' },
  ];

  const symptoms = [
    t('problem.sym1'), t('problem.sym2'), t('problem.sym3'), t('problem.sym4'),
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
            {t('problem.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('problem.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-medical border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <p.icon className={`w-6 h-6 ${p.color}`} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-destructive/5 border border-destructive/10 rounded-2xl p-6 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-3">
            <CircleAlert className="w-5 h-5 text-destructive" />
            <h3 className="font-bold text-foreground">{t('problem.symptoms')}</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {symptoms.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
