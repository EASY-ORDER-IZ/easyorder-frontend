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
      <br />
      <CommentSection />
      <Footer
        src={footer1}
        alt="Footer Background"
        className="h-[8.125rem] sm:h-[15.625rem] md:h-[18.75rem]"
      ></Footer>
    </div>
  );
};

export default HomePage;
