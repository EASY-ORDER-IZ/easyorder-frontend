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
    <div className="flex flex-col gap-8 px-5">
      <div className="h-0 w-full border opacity-10"></div>

      <div className="flex w-full gap-6">
        <div className="hidden flex-col gap-5 sm:flex">
          <BreadCrumbComponent cate={title} />
          <FliterComponent />
        </div>

        <div className="flex w-full flex-col">
          <div className="flex flex-col gap-5 pt-4 sm:gap-0 lg:mt-7">
            <div className="sm:hidden">
              <BreadCrumbComponent cate={title} />
            </div>

            <Sort min={1} max={10} total={100} title={title} />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:justify-center lg:grid-cols-3">
            {currentProducts.map((p, idx) => (
              <ProductCard key={idx} product={p} />
            ))}
          </div>
          <Separator className="mt-6" />

          <div className="mt-6 flex justify-center md:mt-5">
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
  );
};

export default CategoryPage;
