import React from 'react';
import SignupBar from '../components/SignupBar';
import Navbar from '../components/Navbar';
import PagePath from '../components/PagePath';
import MainPage from '../components/productGallery/MainPage';
import Footer from '../components/footer/Footer';

const ProductPage = () => {
  return (
    <div>
      <SignupBar />
      <Navbar />
      <hr className="mx-22 border-t border-gray-300" />
      <PagePath />
      <MainPage />
      <Footer />
    </div>
  );
};

export default ProductPage;
