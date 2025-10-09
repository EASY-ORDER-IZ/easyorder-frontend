import React from 'react';
import ProductCard from '../ProductComponents/ProductCard';
import {newClothes} from "../../store/staticData";
const ProductBar = () => {
    return (
        <>
            <h1 className='text-2xl sm:text-3xl font-bold font-integral text-center mb-9'>
                You might also like
            </h1>


            {/* Container */}
            <div className="w-full">
                {/* Mobile slider */}
                <div className="flex gap-4 overflow-x-auto px-4 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-hide">
                    {newClothes.map((product, index) => (
                        <div key={index} className="flex-shrink-0 w-[295px]">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductBar;
