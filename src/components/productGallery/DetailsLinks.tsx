import React, { useState } from 'react';
import { Button } from '../ui/button/button';
import Reviews from './Reviews';

const DetailsLinks = () => {
  const [activeLink, setActiveLink] = useState<string>('rating&reviews');

  return (
    <div className="p-4 sm:p-8 lg:p-26 text-base sm:text-lg lg:text-xl">
      {/* Mobile: Stack vertically, Desktop: Horizontal tabs */}
      <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row border-b border-gray-300">
        <Button
          variant="ghost"
          className={`font-satoshi w-full sm:w-[414px] rounded-none py-3 text-base sm:text-lg transition-all duration-200 ${
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
          className={`font-satoshi w-full sm:w-[414px] rounded-none py-3 text-base sm:text-lg transition-all duration-200 ${
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
          <div className="text-gray-500 text-sm sm:text-base">
            Page still under development
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsLinks;