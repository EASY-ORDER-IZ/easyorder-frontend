import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button/button';
import { useState } from 'react';
import CategoryCard from './CategoryCard';

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
  initialVisible?: number;
}

const ProductBar = ({ title, array, initialVisible = 4 }: Props) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const visibleProducts = showAll ? array : array.slice(0, initialVisible);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-1">
      <div className="flex w-full justify-center">
        <span className="title-text text-title">{title}</span>
      </div>

      <div className="grid grid-cols-4 gap-2 p-4">
        {visibleProducts.map((p) => (
          <CategoryCard key={p.id} img={p.img} alt={p.name} title={p.name} />
        ))}
      </div>

      {array.length > initialVisible && (
        <div className="flex items-center justify-center">
          <Button
            variant="secondary"
            title={showAll ? 'View Less' : 'Explore All Categories'}
            onClick={handleToggle}
            suffixIcon={<ChevronRight />}
          />
        </div>
      )}
    </div>
  );
};

export default ProductBar;
