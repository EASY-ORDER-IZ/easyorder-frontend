import Details from '@/components/ProductDetailsComponents/Details';
import ImgDisplay from '@/components/ProductDetailsComponents/ImgDisplay';
import Links from '@/components/ProductDetailsComponents/Links';
import React from 'react';

const ProductDetailsPage = () => {
  return (
    <div className="px-22">
      <div>
        <Links />
        <div className="flex gap-6 rounded-2xl p-6 shadow-lg">
          <ImgDisplay />
          <Details />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
