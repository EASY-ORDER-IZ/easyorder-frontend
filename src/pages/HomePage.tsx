import Header from '@/components/HomePageComponents/Header';
import ProductBar from '@/components/HomePageComponents/ProductBar';
import { newClothes, topSelling } from '@/store/dummmyData';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10">
      <Header />
      <div className="flex w-full flex-col gap-13">
        <div className="flex w-full flex-col gap-6">
          <ProductBar initialVisible={4} array={newClothes} title="New In" />
        </div>
        <div className="flex w-full flex-col gap-5">
          <ProductBar initialVisible={4} array={topSelling} title="Top Selling" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
