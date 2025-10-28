import CategoryBar from '@/components/HomePageComponents/CategoryBar';
import Header from '@/components/HomePageComponents/Header';
import ProductBar from '@/components/HomePageComponents/ProductBar';
import { newClothes, topSelling, cate } from '@/store/dummmyData';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10">
      <Header />
      <div className="flex w-full flex-col gap-13">
        <div className="flex w-full flex-col gap-6">
          <ProductBar array={newClothes} title="New In" />
        </div>
        <div className="flex w-full flex-col gap-5">
          <ProductBar array={topSelling} title="Top Selling" />
        </div>
        <div className="flex w-full flex-col gap-5">
          <CategoryBar array={cate} title="Shop by categories" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
