import { newClothes } from '@/store/staticData';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '../ui/button/button';

interface Props {
  title: string;
  type?: string[];
}

const ProductBar = ({ title }: Props) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [visibleCountMobile, setVisibleCountMobile] = useState(2);

  const hasMore = visibleCount < newClothes.length;

  const handleViewMore = () => {
    setVisibleCount(hasMore ? newClothes.length : 4);
    setVisibleCountMobile(hasMore ? newClothes.length : 2);
  };

  const visibleProductsLarge = newClothes.slice(0, visibleCount);
  const visibleProductsMobile = newClothes.slice(0, visibleCountMobile);

  return (
    <div className="flex flex-col gap-8 text-center">
      <div>
        <span className="font-integral text-[32px] font-bold md:text-[40px]">{title}</span>
      </div>

      <div className="hidden gap-3 sm:grid sm:grid-cols-4">
        {visibleProductsLarge.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {visibleProductsMobile.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-4 flex w-full justify-center sm:w-auto">
        <Button onClick={handleViewMore} variant="secondary" className="px-19 py-6">
          {hasMore ? 'View All' : 'View Less'}
        </Button>
      </div>
    </div>
  );
};

export default ProductBar;
