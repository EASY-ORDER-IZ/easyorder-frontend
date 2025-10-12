import CommentSection from '@/components/customercomments/CommentSection';
import { Footer } from '../components/footer';
import HeroSection from '@/components/HeroSection';
import ProductBar from '@/components/ProductComponents/ProductBar';
import StylesFilter from '@/components/ProductComponents/StylesFilter';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <ProductBar title="NEW ARRIVALS" />
      <div className="flex w-full justify-center">
        <div className="h-[1px] w-89 bg-[#0000001A] lg:w-310" />
      </div>
      <ProductBar title="top selling" />
      <div className="px-4 lg:px-25">
        <StylesFilter />
      </div>
      <CommentSection />
      <Footer />
    </div>
  );
};

export default HomePage;
