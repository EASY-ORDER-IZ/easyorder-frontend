import React, { useState } from 'react';
import { Button } from '../ui/button/button';
import Reviews from './Reviews';

const DetailsLinks = () => {
  const [activeLink, setActiveLink] = useState<string>('rating&reviews');

  return (
    <div className="p-4 text-base sm:p-8 sm:text-lg lg:p-26 lg:text-xl">
      <div className="flex flex-col gap-2 border-b border-gray-300 sm:flex-row sm:gap-0">
        <Button
          variant="ghost"
          className={`font-satoshi w-full rounded-none py-3 text-base transition-all duration-200 sm:w-[414px] sm:text-lg ${
            activeLink === 'productDetails'
              ? 'border-b-2 border-black font-semibold text-black'
              : 'text-text-200 border-b-2 border-transparent sm:border-b-2'
          }`}
          onClick={() => setActiveLink('productDetails')}
        >
          Product Details
        </Button>

        <Button
          variant="ghost"
          className={`font-satoshi w-full rounded-none py-3 text-base transition-all duration-200 sm:w-[414px] sm:text-lg ${
            activeLink === 'rating&reviews'
              ? 'border-b-2 border-black font-semibold text-black'
              : 'text-text-200 border-b-2 border-transparent sm:border-b-2'
          }`}
          onClick={() => setActiveLink('rating&reviews')}
        >
          Rating & Reviews
        </Button>
      </div>

      <div className="mt-4 sm:mt-6">
        {activeLink === 'rating&reviews' ? (
          <Reviews />
        ) : (
          <div className="text-sm text-gray-500 sm:text-base">Page still under development</div>
        )}
      </div>
    </div>
  );
};

export default DetailsLinks;
