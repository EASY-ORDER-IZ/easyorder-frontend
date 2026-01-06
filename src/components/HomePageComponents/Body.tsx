import ProductBar from '@/components/HomePageComponents/ProductBar';
import { newClothes, topSelling, cate } from '@/store/dummmyData';
import CategoryBar from '@/components/HomePageComponents/CategoryBar';

const Body = () => {
  return (
    <div className="flex w-full flex-col gap-13">
      <br />
      <div className="flex w-full flex-col gap-6">
        <ProductBar array={newClothes} title="New In" />
      </div>
      <br />
      <div className="flex w-full flex-col gap-5">
        <ProductBar array={topSelling} title="Top Selling" />
      </div>
      <br />
      <div className="flex w-full justify-center">
        <CategoryBar array={cate} title="Shop by category" />
      </div>
    </div>
  );
};

export default Body;
