import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button/button';
import ProductCard from './ProductCard';
import { useState } from 'react';

export interface Product {
  id: number;
  name: string;
  img: string;
  stars?: number;
  price?: number;
  discount?: number;
}

interface Props {
  title: string;
  array: Product[];
  initialVisible: number;
}

const ProductBar = ({ title, array, initialVisible = 4 }: Props) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const visibleProducts = showAll ? array : array.slice(0, initialVisible);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full justify-center">
        <span className="title-text text-title">{title}</span>
      </div>

      <div className="flex w-full flex-wrap justify-evenly gap-4">
        {visibleProducts.map((p) => (
          <ProductCard key={p.id} img={p.img} alt={p.name} />
        ))}
      </div>

      {array.length > initialVisible && (
        <div className="flex items-center justify-center">
          <Button
            variant="secondary"
            title={showAll ? 'View Less' : 'View All'}
            onClick={handleToggle}
            suffixIcon={<ChevronRight />}
          />
        </div>
      )}
    </div>
  );
};

export default ProductBar;
