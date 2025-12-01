import React, { useState } from 'react';
import { img101 } from '../../assets/icons';
import ProductImg from './ProductImg';

const ImgDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [img101, img101, img101, img101];

  return (
    <div className="mt-7 flex gap-3">
      <ProductImg
        src={images[0]}
        alt="img101"
        className={`h-[29.4rem] w-[26.7rem] cursor-pointer rounded ${
          activeIndex === 0 ? 'border-1 border-[var(--color-primary-main)]' : ''
        }`}
        onClick={() => setActiveIndex(0)}
      />

      <div className="flex flex-col gap-3">
        {images.slice(1).map((img, i) => (
          <ProductImg
            key={i + 1}
            src={img}
            alt="img-small"
            className={`h-[9.3rem] w-[9.5rem] cursor-pointer rounded ${
              activeIndex === i + 1 ? 'border-1 border-[var(--color-primary-main)]' : ''
            }`}
            onClick={() => setActiveIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgDisplay;
