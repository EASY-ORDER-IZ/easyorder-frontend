import CommentSection from '@/components/customercomments/CommentSection';
import Footer from '@/components/footer/Footer';

const HomePage = () => {
  return (
    <div className=" flex flex-col gap-30 ">
      <CommentSection />
      <Footer />
    </div>
  );
};

export default HomePage;
