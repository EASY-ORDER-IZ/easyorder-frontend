import FliterComponent from '@/components/FilterComponents/Filter';
import BreadCrumbComponent from '@/components/FilterComponents/BreadCrumb';
import { useParams } from 'react-router-dom';
import Sort from '@/components/FilterComponents/Sort';
import ProductPagination from '@/components/ProductComponents/Pagination';
import { newClothes } from '@/store/staticData';
import { useState } from 'react';
import ProductCard from '@/components/ProductComponents/ProductCard';
import { Separator } from '@/components/ui/separator';
import { Footer } from '@/components/footer';

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
    <div className="flex flex-col gap-6 px-5">
      <Separator className="max-w-[800px] sm:max-w-[1065px]" />
      <BreadCrumbComponent cate={title} />

      <div className="flex w-full gap-6">
        <div className="hidden flex-col gap-5 sm:flex">
          <FliterComponent />
        </div>

        <div className="flex w-full flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex w-full max-w-[280px] justify-between sm:max-w-[755px]">
              <Sort min={1} max={10} total={100} title={title} />
            </div>
          </div>

          <div className="flex items-center">
            <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3">
              {currentProducts.map((p, idx) => (
                <ProductCard key={idx} product={p} />
              ))}
            </div>
          </div>

          <div className="flex">
            <Separator className="max-w-[280px] sm:max-w-[755px]" />
          </div>

          <div className="flex">
            <div className="flex w-full max-w-[280px] justify-center sm:max-w-[755px]">
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
      <Footer />
    </div>
  );
};

export default CategoryPage;
