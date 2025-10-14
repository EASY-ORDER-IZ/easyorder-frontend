import StarsRating from './StarsRating';
import { Card, CardTitle, CardContent } from '../ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  name?: string;
  description?: string;
  price?: number;
  img?: string;
  stars?: number;
  discount?: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const hasDiscount = !!product.discount;
  const roundedRating = Math.round((product.stars || 0) * 2) / 2;

  const dis = ((product.discount || 0) * (product.price || 0)) / 100;
  const finalPrice = (product.price || 0) - dis;

  return (
    <Card>
      <CardContent className="flex w-full flex-col justify-center">
        <img src={product.img} alt={product.name} className="rounded-1xl size-60" />
        <CardTitle className="font-card-title">{product.name}</CardTitle>
        <CardTitle className="flex gap-3">
          <StarsRating rating={product.stars || 0} />
          <span className="text-table-sm leading-[100%] font-light">{`${roundedRating}/5`}</span>
        </CardTitle>
        <CardTitle className="flex items-center gap-3">
          {hasDiscount ? (
            <>
              <span className="text-p font-bold">${finalPrice.toFixed(2)}</span>
              <span className="text-text-300 text-p line-through">${product.price}</span>
              <Badge className="flex" variant="discount">{`-${product.discount}%`}</Badge>
            </>
          ) : (
            <span className="text-p font-bold">${product.price}</span>
          )}
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
