import React from 'react'
import ImageDisplay from './ImageDisplay'
import ProductDetails from './ProductDetails'
import DetailsLinks from './DetailsLinks'
import Footer from '../footer/Footer'
import ProductBar from './ProductBar'

const MainPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-8 items-start justify-center px-4 md:px-12 mt-6">
        <ImageDisplay />
        <ProductDetails />
      </div>

      <DetailsLinks />
      <ProductBar />

      <div className="mt-20 md:mt-32" />

      <Footer />
    </>
  )
}

export default MainPage
