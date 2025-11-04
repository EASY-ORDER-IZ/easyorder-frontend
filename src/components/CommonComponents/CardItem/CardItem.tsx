import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';

interface cardProps {
  title: string;
  img: string;
  price: number;
  discount?: number;
  rating: number;
  sale?: string;
}

const CardImg: React.FC<cardProps> = ({ title, img, price, discount, rating, sale }) => {
  const [faviorits, setFaviorits] = useState(false);

  return (
    <div className="relative h-96 w-[16.5rem] overflow-hidden rounded-[0.3rem] text-white shadow-lg">
      <img src={img} alt="Product" className="absolute top-0 left-0 h-full w-full object-cover" />

      <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      <div className="absolute top-3 right-5 left-2 flex items-center justify-between">
        <div
          className={`${sale == 'sale' ? 'bg-[var(--color-primary-main)]/80' : 'new_bg'} w-[4.75rem] rounded-[0.4rem] px-3 py-1 text-center text-sm`}
        >
          <span>{sale}</span>
        </div>

        <Heart
          width={22}
          height={22}
          onClick={() => setFaviorits(!faviorits)}
          className={`cursor-pointer ${faviorits ? 'fill-red-500 stroke-red-500' : 'stroke-white'}`}
        />
      </div>

      <div className="absolute right-2 bottom-2 left-2 flex flex-col gap-3">
        <span className="text-Poppins font-weight-500 text-[1.25rem]">{title}</span>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-3">
            <span className="text-xs">{price}</span>
            {discount && <del className="text-text-200 text-xs">250$</del>}
          </div>
          <div className="relative flex items-center">
            <Star className="h-4 w-4 stroke-yellow-400" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${(rating / 5) * 100}%` }}
            >
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
            </div>
            <span className="ml-1 text-xs">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImg;
