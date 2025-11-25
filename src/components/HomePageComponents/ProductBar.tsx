import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button/button';
import { useState } from 'react';
import CardSlider from '../CommonComponents/CardItem/CardSlider';

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
    <div className="flex w-full max-w-310 flex-col items-center justify-center gap-1">
      <div className="flex w-full justify-center">
        <span className="title-text text-title">{title}</span>
      </div>

      <div className="no-scrollbar relative flex w-full max-w-310 snap-x snap-mandatory gap-20 overflow-x-scroll scroll-smooth p-4 lg:grid-cols-5 lg:gap-4 lg:overflow-visible">
        {visibleProducts.map(() => (
          <CardSlider />
        ))}
      </div>

      {array.length > initialVisible && (
        <div className="flex items-center justify-center">
          <Button
            variant="secondary"
            title={showAll ? 'View Less' : 'View All'}
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
