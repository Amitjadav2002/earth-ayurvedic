import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import Img4 from "../assets/4.png";

const CertificatesSection = () => {
  const { t } = useLanguage();

  const certs = [
    { img: Img1, label: 'GMP Certified' },
    { img: Img3, label: 'AYUSH Approved' },
    { img: Img2, label: 'ISO 9001:2015' },
    { img: Img4, label: 'FSSAI Licensed' },
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
          {t('certificates.title')}
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background rounded-2xl p-6 text-center shadow-card"
            >
              <img src={c.img} className="w-16 h-16 text-primary mx-auto mb-3" />
              <p className="font-bold text-foreground text-sm">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
