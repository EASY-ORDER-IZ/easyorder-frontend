import { Footer } from '../components/footer';
import LandingBg from '@/components/LandingBg';

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-30 ">
      <LandingBg className="" />

      <Footer />
    </div>
  );
};

export default HomePage;
