import StarsRating from './StarsRating';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
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
    <Card className="flex max-w-[250px] flex-col sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
      <CardHeader className="flex flex-col">
        <img
          src={product.img}
          alt={product.name}
          className="h-55 w-full rounded-[1.25rem] object-cover md:h-60 lg:h-75"
        />

        <CardTitle>
          <span className="text-text text-[15px] font-bold tracking-normal lg:text-[20px]">
            {product.name}
          </span>
        </CardTitle>

        <CardDescription className="mt-2 flex w-full items-center gap-2">
          <StarsRating rating={product.stars || 0} />
          <span className="text-[14px] leading-[100%]">{`${roundedRating}/5`}</span>
        </CardDescription>

        <div className="mt-2 flex w-full items-center gap-3">
          {hasDiscount ? (
            <>
              <span className="text-[15px] font-bold lg:text-[22px]">${finalPrice.toFixed(2)}</span>
              <span className="text-text-300 text-[15px] line-through lg:text-[22px]">
                ${product.price}
              </span>
              <Badge variant="discount">{`-${product.discount}%`}</Badge>
            </>
          ) : (
            <span className="text-[22px] font-bold">${product.price}</span>
          )}
        </div>
      </CardHeader>

      <CardContent></CardContent>
    </Card>
  );
};

export default ProductCard;
