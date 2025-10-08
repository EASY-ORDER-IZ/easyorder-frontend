import FliterComponent from '@/components/FilterComponents/Filter';
import BreadCrumbComponent from '@/components/FilterComponents/BreadCrumb';
import { useParams } from 'react-router-dom';
import Sort from '@/components/FilterComponents/Sort';
import ProductPagination from '@/components/ProductComponents/Pagination';
import { newClothes } from '@/store/staticData';
import { useState } from 'react';
import ProductCard from '@/components/ProductComponents/ProductCard';

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
    <div className="flex flex-col gap-8">
      <div className="h-0 w-full border opacity-10"></div>

      <div className="flex w-full gap-6">
        <div className="hidden flex-col gap-5 lg:flex">
          <BreadCrumbComponent cate={title} />
          <FliterComponent />
        </div>

        <div className="flex w-full flex-col">
          <div className="mt-7 flex flex-col pt-4">
            <Sort min={1} max={10} total={100} title={title} />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {currentProducts.map((p, idx) => (
              <ProductCard key={idx} product={p} />
            ))}
          </div>
          <div className="mt-10 h-0 w-full border opacity-10"></div>

          <div className="mt-10 flex justify-center">
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
