import React, { useState } from 'react';
import { Button } from '../ui/button/button';
import Reviews from './Reviews';

const DetailsLinks = () => {
  const [activeLink, setActiveLink] = useState<string>('rating&reviews');

  return (
    <div className="p-26 text-xl">
      <div className="flex gap-0 border-b border-gray-300">
        <Button
          variant="ghost"
          className={`font-satoshi w-[414px] rounded-none py-3 text-lg transition-all duration-200 ${
            activeLink === 'productDetails'
              ? 'border-b-2 border-black font-semibold text-black'
              : 'text-text-200 border-b-2 border-transparent'
          }`}
          onClick={() => setActiveLink('productDetails')}
        >
          Product Details
        </Button>

        <Button
          variant="ghost"
          className={`font-satoshi w-[414px] rounded-none py-3 text-lg transition-all duration-200 ${
            activeLink === 'rating&reviews'
              ? 'border-b-2 border-black font-semibold text-black'
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
