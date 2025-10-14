import FliterComponent from '@/components/FilterComponents/Filter';
import BreadCrumbComponent from '@/components/FilterComponents/BreadCrumb';
import { useParams } from 'react-router-dom';
import Sort from '@/components/FilterComponents/Sort';
import ProductPagination from '@/components/ProductComponents/Pagination';
import { newClothes } from '@/store/staticData';
import { useState } from 'react';
import ProductCard from '@/components/ProductComponents/ProductCard';
import { Separator } from '@/components/ui/separator';

const CategoryPage = () => {
  const { title } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalItems = newClothes.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  if (currentPage > totalPages) setCurrentPage(totalPages);

  const firstIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = newClothes.slice(firstIndex, firstIndex + itemsPerPage);

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbComponent cate={title} />

      <div className="flex w-full gap-6">
        <div className="hidden flex-col gap-5 sm:flex">
          <FliterComponent />
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="inline-block w-full">
            <div className="inline-block w-auto align-top">
              <div className="mb-4 flex w-full justify-between">
                <div className="w-full">
                  <Sort min={1} max={10} total={100} title={title} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {currentProducts.map((p, idx) => (
                  <ProductCard key={idx} product={p} />
                ))}
              </div>

              <div className="mt-6">
                <Separator />
              </div>

              <div className="mt-4 flex justify-center">
                <ProductPagination
                  totalItems={totalItems}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
