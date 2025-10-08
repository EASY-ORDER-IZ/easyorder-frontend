import CommentSection from '@/components/customercomments/CommentSection';
import Footer from '../components/footer/Footer';
import LandingBg from '@/components/LandingBg';

const HomePage = () => {
  return (
    <div className=" flex flex-col gap-30 ">
      <LandingBg className="" />
      <CommentSection />
      <Footer />
    </div>
  );
};

export default HomePage;
