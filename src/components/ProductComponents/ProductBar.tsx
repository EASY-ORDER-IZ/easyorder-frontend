import { newClothes } from '@/store/staticData';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '../ui/button/button';
import { ChevronRight } from 'lucide-react';
import CardItem2 from '../CommonComponents/CardItem/CardItem2';

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
    <div className="flex flex-col items-center justify-center gap-8 px-2">
      <div>
        <span className="font-integral text-h2 font-bold">{title}</span>
      </div>

      <div className="hidden gap-3 sm:grid sm:grid-cols-4">
        {visibleProductsLarge.map((product) => (
          <CardItem2 key={product.id} title={product.name} img={product.img} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {visibleProductsMobile.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex w-full items-center justify-center sm:w-auto">
        <Button
          variant="secondary"
          title="View all"
          className="m-2 rounded-full"
          onClick={handleViewMore}
          suffixIcon={<ChevronRight />}
        />
      </div>
    </div>
  );
};

export default ProductBar;
