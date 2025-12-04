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
    <div className="relative h-96 w-[16.5rem] overflow-hidden rounded-[0.3rem] text-white shadow-lg md:h-80 md:w-[14.625rem] lg:h-96 lg:w-[16.5rem]">
      <img src={img} alt="Product" className="absolute top-0 left-0 h-full w-full object-cover" />
      <div className="absolute top-3 right-5 left-2 flex items-center justify-between md:top-2 md:right-3 md:left-1">
        <div
          className={`${
            sale?.toLowerCase() === 'sale'
              ? 'bg-[var(--color-primary-main)]/80'
              : 'bg-[linear-gradient(to_right,oklch(0.35_0.11_200deg/_0.54),oklch(0.43_0.13_195deg/_0.91))]'
          } w-[4.75rem] rounded-[0.4rem] px-3 py-1 text-center text-sm md:w-[3.5rem] md:px-2 md:py-0.5 md:text-xs lg:w-[4.75rem] lg:px-3 lg:py-1 lg:text-sm`}
        >
          <span>{sale}</span>
        </div>

        <Heart
          width={22}
          height={22}
          onClick={() => setFaviorits(!faviorits)}
          className={`cursor-pointer ${faviorits ? 'fill-red-500 stroke-red-500' : 'stroke-white'} md:h-4 md:w-4 lg:h-[22px] lg:w-[22px]`}
        />
      </div>

      <div className="absolute right-2 bottom-2 left-2 flex flex-col gap-2 md:gap-1">
        <span className="text-Poppins font-weight-500 text-[1.25rem] md:text-base lg:text-[1.25rem]">
          {title}
        </span>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 md:gap-1">
            <span className="text-xs md:text-[0.625rem] lg:text-xs">{price}</span>
            {discount && (
              <del className="text-text-200 text-xs md:text-[0.625rem] lg:text-xs">250$</del>
            )}
          </div>
          <div className="relative flex items-center">
            <Star className="h-4 w-4 stroke-yellow-400 md:h-3 md:w-3 lg:h-4 lg:w-4" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${(rating / 5) * 100}%` }}
            >
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400 md:h-3 md:w-3 lg:h-4 lg:w-4" />
            </div>
            <span className="ml-1 text-xs md:text-[0.625rem] lg:text-xs">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImg;
