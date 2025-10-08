import StarsRating from './StarsRating';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

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
    <Card className="flex w-full max-w-[full] flex-col md:max-w-[360px] lg:max-w-[400px]">
      <CardHeader className="flex flex-col">
        <img
          src={product.img}
          alt={product.name}
          className="w-full rounded-2xl object-cover sm:h-44 md:h-50 lg:h-57"
        />

        <CardTitle>
          <span className="text-text text-[18px] font-bold tracking-normal md:text-[17px]">
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
              <span className="text-[22px] font-bold">${finalPrice.toFixed(2)}</span>
              <span className="text-text-300 text-[22px] line-through">${product.price}</span>
              <div className="rounded-2xl bg-red-100">
                <span className="px-3 py-1 text-xs text-red-500">-{product.discount}%</span>
              </div>
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
