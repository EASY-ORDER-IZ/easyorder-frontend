import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button/button';
import ProductCard from './ProductCard';
interface Product {
  id: number;
  name: string;
  img: string;
  stars?: number;
  price?: number;
  discount?: number;
}
interface Props {
  title: string;
  buttonTitle: string;
  array: Product[];
}
const ProductBar = ({ title, buttonTitle, array }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full justify-center">
        <span className="title-text text-title">{title}</span>
      </div>
      <div className="flex w-full justify-evenly">
        {array.map((p) => (
          <ProductCard key={p.id} img={p.img} alt={p.name} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button variant="secondary" title={buttonTitle} suffixIcon={<ChevronRight />} />
      </div>
    </div>
  );
};

export default ProductBar;
