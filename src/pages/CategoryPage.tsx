import FliterComponent from '@/components/FilterComponents/Filter';
import Sort from '@/components/FilterComponents/Sort';
import { newClothes } from '@/store/staticData';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button/button';
import CardSlider from '@/components/CommonComponents/CardItem/CardSlider';
import ProductBar from '@/components/HomePageComponents/ProductBar';
import { footer1 } from '../assets/icons';
import { Footer } from '@/components/HomePageComponents/footer';

const CategoryPage = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 12;
  const totalItems = newClothes.length;
  const visibleProducts = showAll ? newClothes : newClothes.slice(0, itemsPerPage);
  const intrestProducts = newClothes.slice(0, 5);
  const numberOfItemsToShow = visibleProducts.length;
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-6 px-10">
        <div className="mb-4 flex w-full justify-between">
          <div className="w-full">
            <Sort />
          </div>
        </div>
        <div className="flex w-full gap-20">
          <div className="hidden flex-col gap-5 sm:flex">
            <FliterComponent />
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <div className="inline-block w-full">
              <div className="inline-block w-auto align-top">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {visibleProducts.map(() => (
                    <CardSlider />
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-58">
                  <span className="text-text-300 text-list leading-full font-normal">
                    {`Showing ${numberOfItemsToShow} of ${totalItems} products`}
                  </span>
                  {newClothes.length > itemsPerPage && (
                    <div className="flex items-center justify-center">
                      <Button
                        variant="secondary"
                        title={showAll ? 'View Less' : 'Explore Products'}
                        onClick={handleToggle}
                        className="rounded-7xl"
                        suffixIcon={<ChevronRight />}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-300 flex-col gap-5">
        <ProductBar array={intrestProducts} title="You might also like" />
      </div>
      <Footer src={footer1} alt="Footer Background" className="h-[363px]"></Footer>
    </div>
  );
};

export default CategoryPage;
