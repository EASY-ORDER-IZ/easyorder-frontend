import CommentSection from '@/components/customercomments/CommentSection';
import HeroSection from '@/components/HeroSection';
import ProductBar from '@/components/ProductComponents/ProductBar';
import StylesFilter from '@/components/ProductComponents/StylesFilter';
import { Footer } from '@/components/footer';
import { footer1 } from '../assets/icons';

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col gap-10 overflow-visible">
      <HeroSection />

      <ProductBar title="NEW ARRIVALS" />
      <div className="flex w-full justify-center">
        <div className="bg-background-main h-[1px] w-89 lg:w-310" />
      </div>
      <ProductBar title="top selling" />
      <div className="px-4 lg:px-25">
        <StylesFilter />
      </div>

      <CommentSection />
      <Footer src={footer1} alt="Footer Background" className="h-[363px]"></Footer>
    </div>
  );
};

export default HomePage;
