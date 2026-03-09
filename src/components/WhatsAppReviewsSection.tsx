import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';

const whatsappReviews = [
  { name: 'अमित जी', message: '💬 "15 दिन में ब्लीडिंग बंद हो गई। बहुत शुक्रिया!" 🙏', time: '10:30 AM' },
  { name: 'Sunita Ji', message: '💬 "Main 2 saal se pareshan thi. Ab 1 mahine mein bahut aaram hai." ❤️', time: '2:45 PM' },
  { name: 'विकास भाई', message: '💬 "ऑपरेशन से बच गया। Earth Ayurvedic का बहुत धन्यवाद!" 🌿', time: '8:15 PM' },
  { name: 'राजेश जी', message: '💬 "1 हफ्ते में ही दर्द कम हो गया। रोज़ सुबह आराम से मल त्याग होता है।" 💪', time: '6:00 AM' },
];

const WhatsAppReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-10 text-foreground"
        >
          {t('whatsapp.reviews')}
        </motion.h2>
        <div className="max-w-lg mx-auto space-y-3">
          {whatsappReviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-4 shadow-card border border-border"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-sm text-foreground">{r.name}</span>
                <span className="text-xs text-muted-foreground ml-auto">{r.time}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{r.message}</p>
              <div className="flex gap-0.5 mt-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 text-secondary fill-secondary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppReviewsSection;
