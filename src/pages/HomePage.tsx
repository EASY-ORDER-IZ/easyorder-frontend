import CommentSection from '@/components/customercomments/CommentSection';

import { Footer } from '../components/footer';
import HeroSection from '@/components/HeroSection';
import LandingBg from '@/components/CommonComponents/LandingBg';
import StylesFilter from '@/components/ProductComponents/StylesFilter';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-30">
      <HeroSection />
      <LandingBg className="" />
      <CommentSection />
      <StylesFilter />
      <Footer />
    </div>
  );
};

export default HomePage;
