import FliterComponent from '@/components/FilterComponents/Filter';
import ProductPagination from '@/components/ProductComponents/Pagination';
import { products } from '@/store/dummmyData';
import { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import FilterGroup from '@/components/FilterComponents/FilterGroup';
import AppliedFilters from '@/components/FilterComponents/AppliedFilters';
import DrawerComponent from '@/components/FilterComponents/Drawer';
import CateTabs from '@/components/FilterComponents/Tabs';

const CategoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);
  const [tempFilters, setTempFilters] = useState<string[]>([]);
  const [tempPriceRange, setTempPriceRange] = useState<[number, number]>([0, 250]);
  const [hasProducts, setHasProducts] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'men' | 'women' | 'kids'>('all');

  const getFilteredCount = () => {
    let filtered = products.filter((p) => {
      const matchesFilters =
        appliedFilters.length === 0 ||
        appliedFilters.some(
          (filter) =>
            p.category?.includes(filter) ||
            p.subcategory?.includes(filter) ||
            p.title?.toLowerCase().includes(filter.toLowerCase()) ||
            (p.sizes && p.sizes.includes(filter)),
        );

      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesFilters && matchesPrice;
    });

    if (activeTab === 'women') filtered = filtered.filter((p) => p.gender === 'Women');
    else if (activeTab === 'men') filtered = filtered.filter((p) => p.gender === 'Men');
    else if (activeTab === 'kids') filtered = filtered.filter((p) => p.gender === 'Kids');

    return filtered.length;
  };

  const totalItems = getFilteredCount();
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  if (currentPage > totalPages) setCurrentPage(totalPages);

  // Reset to page 1 when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-6 p-3 px-22">
      <AppliedFilters
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
        setTempFilters={setTempFilters}
      />

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
                <CateTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                <FilterGroup
                  appliedFilters={appliedFilters}
                  priceRange={priceRange}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  activeTabb={activeTab}
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
                    totalPages={totalPages}
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
