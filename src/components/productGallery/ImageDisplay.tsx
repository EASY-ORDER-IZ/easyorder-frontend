import React from 'react';
import { img_3, img_4, img_1, img_2 } from '@/assets/icons';
import ProductImg from './ProductImg';

const ImageDisplay = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="order-1 sm:order-2 flex justify-center sm:block">
        <ProductImg
          src={img_3}
          className="h-64 w-48 sm:h-102 sm:w-70 rounded-2xl object-cover"
        />
      </div>

      <div className="order-2 sm:order-1 flex flex-row sm:flex-col gap-2 sm:gap-4 justify-center sm:justify-start">
        <ProductImg
          src={img_2}
          className="h-24 w-18 sm:h-32 sm:w-24 rounded-lg"
        />
        <ProductImg
          src={img_1}
          className="h-24 w-18 sm:h-32 sm:w-24 rounded-lg"
        />
        <ProductImg
          src={img_4}
          className="h-24 w-18 sm:h-32 sm:w-24 rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageDisplay;