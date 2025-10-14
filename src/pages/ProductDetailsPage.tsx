import React from 'react';
import SignupBar from '../components/SignupBar';
import Navbar from '../components/Navbar';
import PagePath from '../components/PagePath';
import Footer from '../components/footer/Footer';
import ImageDisplay from '@/components/productGallery/ImageDisplay';
import ProductDetails from '@/components/productGallery/ProductDetails';
import DetailsLinks from '@/components/productGallery/DetailsLinks';
import ProductBar from '@/components/productGallery/ProductBar';
const ProductPage = () => {
  return (
    <div>
      <SignupBar />
      <Navbar />
      <hr className="mx-22 border-t border-gray-300" />
      <PagePath />
      <div className="mt-6 flex flex-col items-start justify-center px-4 md:flex-row md:gap-8 md:px-12">
        <ImageDisplay />
        <ProductDetails />
      </div>

      <DetailsLinks />
      <ProductBar />

      <div className="mt-20 md:mt-32" />
      <Footer />
    </div>
  );
};

export default ProductPage;
