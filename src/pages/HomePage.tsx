import { Footer } from '../components/footer';
import LandingBg from '@/components/CommonComponents/LandingBg';
import StylesFilter from '@/components/ProductComponents/StylesFilter';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-30">
      <LandingBg className="" />
      <StylesFilter />
      <Footer />
    </div>
  );
};

export default HomePage;
