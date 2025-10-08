import React from 'react'
import ImageDisplay from './ImageDisplay'
import ProductDetails from './ProductDetails'
import DetailsLinks from './DetailsLinks'
import {  BreadcrumbPage } from '../ui/breadcrumb'
import Footer from '../footer/Footer'

const MainPage = () => {
    return (
        <>
        <div className='flex flex-1 gap-5'>
        
        <ImageDisplay/>
        <ProductDetails/>
        </div>
        <DetailsLinks/>
        <Footer/>
        </>
    )
}

export default MainPage