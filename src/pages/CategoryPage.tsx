import FliterComponent from '@/components/FilterComponents/Filter';
import ProductPagination from '@/components/ProductComponents/Pagination';
import { products } from '@/store/dummmyData';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import FilterGroup from '@/components/FilterComponents/FilterGroup';
import AppliedFilters from '@/components/FilterComponents/AppliedFilters';
import DrawerComponent from '@/components/FilterComponents/Drawer';

const CategoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);
  const [tempFilters, setTempFilters] = useState<string[]>([]);
  const [tempPriceRange, setTempPriceRange] = useState<[number, number]>([0, 250]);
  const [hasProducts, setHasProducts] = useState(true);

  const totalItems = products.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  if (currentPage > totalPages) setCurrentPage(totalPages);

  // const firstIndex = (currentPage - 1) * itemsPerPage;

  return (
    <div className="flex flex-col gap-6 p-3 px-22">
      <AppliedFilters appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} />

      <div className="flex w-full gap-6">
        <div className="sm:hidden">
          <DrawerComponent
            appliedFilters={tempFilters}
            setAppliedFilters={setTempFilters}
            priceRange={tempPriceRange}
            setPriceRange={setTempPriceRange}
            onApplyFilters={() => {
              setAppliedFilters(tempFilters);
              setPriceRange(tempPriceRange);
            }}
          />
        </div>

        <div className="hidden w-[400px] flex-col gap-5 sm:flex">
          <FliterComponent
            appliedFilters={tempFilters}
            setAppliedFilters={setTempFilters}
            priceRange={tempPriceRange}
            setPriceRange={setTempPriceRange}
            onApplyFilters={() => {
              setAppliedFilters(tempFilters);
              setPriceRange(tempPriceRange);
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="inline-block w-full">
            <div className="inline-block w-auto align-top">
              <div className="max-w-full p-2">
                <FilterGroup
                  appliedFilters={appliedFilters}
                  priceRange={priceRange}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  onHasProducts={setHasProducts}
                />
              </div>

              <div className="mt-6">
                <Separator />
              </div>

              {hasProducts && (
                <div className="mt-4 flex justify-center">
                  <ProductPagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
