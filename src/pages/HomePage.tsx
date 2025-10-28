import Body from '@/components/HomePageComponents/Body';
import Footer from '@/components/HomePageComponents/Footer';
import Header from '@/components/HomePageComponents/Header';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10 pb-4">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
