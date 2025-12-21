import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button/button';
import CategoryCard from './CategoryCard';
import { useNavigate } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  img: string;
}

interface Props {
  title: string;
  array: Product[];
}

const ProductBar = ({ title, array }: Props) => {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          <span className="text-text-400 text-title font-poppins text-center font-bold">
            {title}
          </span>
          <div className="w-full overflow-hidden">
            <div className="no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth lg:grid lg:grid-cols-5 lg:place-items-center lg:gap-4 lg:overflow-visible">
              {array.map((p) => (
                <div key={p.id} className="shrink-0 snap-start">
                  <CategoryCard img={p.img} alt={p.name} />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="secondary"
            title="Explore More"
            suffixIcon={<ChevronRight />}
            onClick={() => navigate(`/${title.toLowerCase()}`)}
            className="w-[15rem] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductBar;
