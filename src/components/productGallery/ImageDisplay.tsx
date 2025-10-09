import React from 'react';
import { img_3, img_4, img_1, img_2 } from '@/assets/icons';
import ProductImg from './ProductImg';

console.log(img_2);
const ImageDisplay = () => {
  return (
    <div className="flex">
      <div className="px-22 py-6">
        <ProductImg src={img_2} className="h-44 w-40 p-2" />
        <ProductImg src={img_1} className="h-44 w-40 rounded-3xl p-2" />
        <ProductImg src={img_4} className="h-44 w-40 p-2" />
      </div>
      <ProductImg
        src={img_3}
        className="h-[33.125rem] w-full rounded-3xl object-cover md:w-[27.75rem]"
      />
    </div>
  );
};

export default ImageDisplay;
