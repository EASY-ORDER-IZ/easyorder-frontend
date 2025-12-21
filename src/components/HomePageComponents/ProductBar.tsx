import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button/button';
import CardSlider from '../CommonComponents/CardItem/CardSlider';
import { useNavigate } from 'react-router-dom';

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
  const [showAll] = useState(false);
  const navigate = useNavigate();

  const visibleProducts = showAll ? array : array.slice(0, initialVisible);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-text-400 text-title font-poppins text-center font-bold">{title}</h2>

          <div className="w-full overflow-hidden">
            <div
              className={`$ no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth`}
            >
              {visibleProducts.map((product) => (
                <div key={product.id} className="snap-start">
                  <CardSlider />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="secondary"
            title={showAll ? 'View Less' : 'View All'}
            onClick={() => navigate(`/${title?.toLowerCase()}`)}
            className="rounded-7xl w-[15rem]"
            suffixIcon={<ChevronRight />}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductBar;
