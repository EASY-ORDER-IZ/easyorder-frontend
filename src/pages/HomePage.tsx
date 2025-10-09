import { Footer } from '../components/footer';
import LandingBg from '@/components/LandingBg';
import StylesFilter from '@/components/StylesFilter';

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-30 ">
      <LandingBg className="" />
      <StylesFilter />
      <Footer />
    </div>
  );
};

export default HomePage;
