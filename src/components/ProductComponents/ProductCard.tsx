import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button/button';

interface Props {
  title: string;
  price: number;
  description: string;
  img: string;
}

const ProductCard: React.FC<Props> = ({ title, price, description, img }) => {
  return (
    <div>
      <Card className="flex w-[300px] flex-col rounded-md border border-white p-3 shadow-lg">
        <CardContent className="flex h-full flex-col p-0">
          <div className="mb-3 flex items-center justify-center">
            <img src={img} alt="" className="h-[380px] w-full rounded-md object-cover" />
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-h4 line-clamp-1 font-bold">{title}</h3>
            <span className="text-lg font-semibold text-[var(--color-primary-main)]">{price}$</span>

            <p className="line-clamp-2 flex-1 text-sm text-gray-600">{description}</p>

            <div className="mt-3 flex gap-2">
              <Button title="Add to cart" className="flex-1 rounded-full px-3 py-2 text-sm" />

              <Button
                title="View product"
                variant="secondary"
                className="flex-1 rounded-full px-3 py-2 text-sm"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
