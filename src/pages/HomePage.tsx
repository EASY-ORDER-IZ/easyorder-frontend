import CommentSection from '@/components/customercomments/CommentSection';
import HeroSection from '@/components/HeroSection';
import { Footer } from '@/components/HomePageComponents/footer';
import { footer1 } from '../assets/icons';
import Body from '@/components/HomePageComponents/Body';

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col gap-10 overflow-visible">
      <HeroSection />
      <Body />
      <CommentSection />
      <Footer src={footer1} alt="Footer Background" className="h-[363px]"></Footer>
    </div>
  );
};

export default HomePage;
