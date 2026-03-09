import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const ReelsSection = () => {
  const { t } = useLanguage();

  // Placeholder reels - replace with actual video URLs
  const reels = [
    { id: 1, title: 'Patient Success Story 1', thumbnail: '🎬' },
    { id: 2, title: 'Patient Success Story 2', thumbnail: '🎬' },
    { id: 3, title: 'Patient Success Story 3', thumbnail: '🎬' },
    { id: 4, title: 'How to Use Medicine', thumbnail: '🎬' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12 text-foreground"
        >
          {t('reels.title')}
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="aspect-[9/16] bg-card rounded-2xl shadow-card flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group"
            >
              <div className="text-5xl mb-3">{reel.thumbnail}</div>
              <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                </div>
              </div>
              <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-foreground">{reel.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
