import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <>
    <div className='p-4'>
      <div className="bg-earth-warm rounded-2xl p-5 mb-6 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-bold text-foreground text-sm mb-1">{t('important.info')}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{t('footer.disclaimer')}</p>
        </div>
      </div>
      </div>
      <footer className="bg-primary text-primary-foreground py-8 pb-24 md:pb-8">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold">Earth Ayurvedic</span>
          </div>
          <p className="text-primary-foreground/70 text-sm">10 Years of Trust | 100% Ayurvedic Product</p>
          <p className="text-primary-foreground/50 text-xs">"© 2024 Earth Ayurvedic. All rights reserved."</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
