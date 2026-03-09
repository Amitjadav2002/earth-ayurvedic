import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import CausesSection from '@/components/CausesSection';
import SolutionSection from '@/components/SolutionSection';
import BenefitsSection from '@/components/BenefitsSection';
import TreatmentOptionsSection from '@/components/TreatmentOptionsSection';
import HowToUseSection from '@/components/HowToUseSection';
import EffectDurationSection from '@/components/EffectDurationSection';
import WhatsAppReviewsSection from '@/components/WhatsAppReviewsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import OrderCTASection from '@/components/OrderCTASection';
import DietSection from '@/components/DietSection';
import ReviewsSection from '@/components/ReviewsSection';
import ReelsSection from '@/components/ReelsSection';
import CertificatesSection from '@/components/CertificatesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <CausesSection />
      <SolutionSection />
      <BenefitsSection />
      <TreatmentOptionsSection />
      <HowToUseSection />
      <EffectDurationSection />
      <WhatsAppReviewsSection />
      <WhyChooseSection />
      <StatsSection />
      <ReviewsSection />
      {/* <ReelsSection /> */}
      <FAQSection />
      <OrderCTASection />
      {/* <DietSection /> */}
      <CertificatesSection />
      <Footer />
    </>
  );
};

export default Index;
