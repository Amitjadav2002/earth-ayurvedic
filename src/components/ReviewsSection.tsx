import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const reviews = [
  { name: 'राहुल शर्मा', lang: 'hi', text: '2 हफ्ते में ही काफी आराम मिला। दर्द और खुजली दोनों में राहत। बहुत अच्छी दवाई है।', rating: 5, city: 'जयपुर' },
  { name: 'Priya Patel', lang: 'en', text: 'I was suffering from piles for 3 years. After using this medicine for 1 month, I got significant relief. Highly recommended!', rating: 5, city: 'Ahmedabad' },
  { name: 'সুমন দাস', lang: 'bn', text: 'অনেক ভালো ওষুধ। ১ মাসে রক্তপাত বন্ধ হয়ে গেছে। ধন্যবাদ Earth Ayurvedic!', rating: 5, city: 'কলকাতা' },
  { name: 'அருண் குமார்', lang: 'ta', text: 'மிகவும் நல்ல மருந்து. 3 வாரத்தில் பைல்ஸ் கட்டி குறைந்தது. நன்றி!', rating: 5, city: 'சென்னை' },
  { name: 'रवि पाटील', lang: 'mr', text: 'या औषधाने माझी मूळव्याधाची समस्या खूप कमी झाली. खूप चांगले उत्पादन!', rating: 5, city: 'पुणे' },
  { name: 'Ramesh Kumar', lang: 'te', text: 'చాలా మంచి మందు. 2 వారాలలో నొప్పి తగ్గింది. ధన్యవాదాలు!', rating: 4, city: 'హైదరాబాద్' },
];

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12 text-foreground"
        >
          {t('reviews.title')}
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-5 shadow-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.city}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
