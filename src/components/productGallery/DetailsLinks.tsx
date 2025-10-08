import React, { useState } from 'react';
import { Button } from '../ui/button/button';
import Reviews from './Reviews';

const DetailsLinks = () => {
  const [activeLink, setActiveLink] = useState<string>('rating&reviews');

  return (
    <div className="p-20">
      <div className="flex gap-0 border-b border-gray-300">
        <Button
          variant="ghost"
          className={`w-[414px] py-3 font-satoshi text-lg transition-all duration-200 rounded-none
            ${
              activeLink === 'productDetails'
                ? 'text-black font-semibold border-b-2 border-black'
                : 'text-text-200 border-b-2 border-transparent'
            }`}
          onClick={() => setActiveLink('productDetails')}
        >
          Product Details
        </Button>

        <Button
          variant="ghost"
          className={`w-[414px] py-3 font-satoshi text-lg transition-all duration-200 rounded-none
            ${
              activeLink === 'rating&reviews'
                ? 'text-black font-semibold border-b-2 border-black'
                : 'text-text-200 border-b-2 border-transparent'
            }`}
          onClick={() => setActiveLink('rating&reviews')}
        >
          Rating & Reviews
        </Button>
      </div>

      <div className="mt-6">
        {activeLink === 'rating&reviews' ? (
          <Reviews />
        ) : (
          <div className="text-gray-500">Page still under development</div>
        )}
      </div>
    </div>
  );
};

export default DetailsLinks;
