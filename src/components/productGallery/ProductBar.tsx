import React from 'react';
import ProductCard from '../ProductComponents/ProductCard';
import { newClothes } from '../../store/staticData';
import { useTranslation } from 'react-i18next';
const ProductBar = () => {

  const { t } = useTranslation();

  return (
    <>
      <h1 className="font-integral mb-9 text-center text-2xl font-bold sm:text-3xl">
        {t('youMayLike')}
      </h1>
      <div className="w-full">
        <div className="scrollbar-hide flex gap-6 overflow-x-auto sm:flex-wrap sm:justify-center sm:overflow-visible">
          {newClothes.slice(0, 3).map((product, index) => (
            <div key={index} className="w-[18.4375rem] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductBar;
