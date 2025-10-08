import React from 'react';
import { img_3, img_4, img_1, img_2 } from '@/assets/icons';
import ProductImg from './ProductImg';

console.log(img_2);
const ImageDisplay = () => {
  return (
    <div className="flex ">
      <div className="px-22 py-6">
        <ProductImg src={img_2} className="w-40 h-44 p-2" />
        <ProductImg src={img_1} className="w-40 h-44 p-2  rounded-3xl" />
        <ProductImg src={img_4} className="w-40 h-44 p-2" />
      </div>
      <ProductImg src={img_3} className="w-[444px] h-[530px] object-cover rounded-3xl" />
    </div>
  );
};

export default ImageDisplay;
