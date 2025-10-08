import React from 'react';
import ImageDisplay from './ImageDisplay';
import ProductDetails from './ProductDetails';
import DetailsLinks from './DetailsLinks';
import { BreadcrumbPage } from '../ui/breadcrumb';

const MainPage = () => {
  return (
    <>
      <div className="flex flex-1 gap-5">
        <BreadcrumbPage />

        <ImageDisplay />
        <ProductDetails />
      </div>
      <DetailsLinks />
    </>
  );
};

export default MainPage;
