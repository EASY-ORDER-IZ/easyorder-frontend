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

const ProductBar = ({ title, array, initialVisible = 5 }: Props) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const visibleProducts = showAll ? array : array.slice(0, initialVisible);

  return (
    <div className="flex w-full max-w-310 flex-col items-center justify-center gap-6">
      <div className="flex w-full justify-center">
        <span className="title-text text-title">{title}</span>
      </div>

      <div className="no-scrollbar relative flex w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth p-12 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0">
        {visibleProducts.map((p) => (
          <CategoryCard key={p.id} img={p.img} alt={p.name} />
        ))}
      </div>

      {array.length > initialVisible && (
        <div className="flex items-center justify-center">
          <Button
            variant="secondary"
            title={showAll ? 'View Less' : 'Explore Categories'}
            onClick={handleToggle}
            className="rounded-7xl"
            suffixIcon={<ChevronRight />}
          />
        </div>
      )}
    </div>
  );
};

export default ProductBar;
