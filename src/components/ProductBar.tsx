import { newClothes } from '@/store/staticData';
import ProductCard from './ProductCard';
import { Button } from './ui/button/button';
import { useState } from 'react';

interface Props {
  title?: string;
  type?: string[];
}

const ProductBar = ({ title }: Props) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const hasMore = visibleCount < newClothes.length;

  const handleViewMore = () => {
    setVisibleCount(hasMore ? visibleCount + 4 : 4);
  };

  const visibleProducts = newClothes.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-8 px-4 text-center md:px-10 lg:px-40">
      <div className="text-center">
        <span className="font-integral text-[32px] font-bold md:text-[40px]">{title}</span>
      </div>

      <div className="grid grid-cols-2 gap-x-0 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Button onClick={handleViewMore} variant="secondary" className="px-19 py-6">
          {hasMore ? 'View All' : 'View Less'}
        </Button>
      </div>
    </div>
  );
};

export default ProductBar;
