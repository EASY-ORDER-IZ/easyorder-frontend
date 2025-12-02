import React, { useState } from 'react';
import { img101 } from '../../assets/icons';
import ProductImg from './ProductImg';

const ImgDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const images = [img101, img101, img101, img101];

  return (
    <div className="mt-7 flex flex-col gap-3 lg:flex-row">
      <ProductImg
        src={images[0]}
        alt="img101"
        className={`h-auto w-full cursor-pointer rounded object-cover lg:h-[29.4rem] lg:w-[26.7rem] ${
          activeIndex === 0 ? 'border-1 border-[var(--color-primary-main)]' : ''
        }`}
        onClick={() => setActiveIndex(0)}
      />

      <div className="flex w-full flex-row gap-3 lg:w-auto lg:flex-col">
        {images.slice(1).map((img, i) => (
          <ProductImg
            key={i + 1}
            src={img}
            alt="img-small"
            className={`h-[5.8rem] w-[5rem] flex-1 cursor-pointer rounded object-cover sm:h-[7.4375rem] sm:w-[6.375rem] lg:h-[9.3rem] lg:w-[6.375rem] lg:flex-none ${activeIndex === i + 1 ? 'border-1 border-[var(--color-primary-main)]' : ''}`}
            onClick={() => setActiveIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgDisplay;
