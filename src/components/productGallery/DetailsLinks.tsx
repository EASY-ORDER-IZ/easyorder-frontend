import React, { useState } from 'react';
import { Button } from '../ui/button/button';
import Reviews from './Reviews';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const DetailsLinks = () => {
  const [activeLink, setActiveLink] = useState<string>('rating&reviews');
  const { t } = useTranslation();

  return (
    <div className="p-4 text-base sm:p-8 sm:text-lg lg:p-26 lg:text-xl">
      <div className="flex flex-col gap-2 border-b border-gray-300 sm:flex-row sm:gap-0">
        <Link
          to="#"
          className={`font-satoshi w-full rounded-none py-3 text-base transition-all duration-200 sm:w-[25.875rem] sm:text-lg flex justify-center items-center ${activeLink === 'productDetails'
            ? 'border-b-2 border-black font-semibold text-black'
            : 'text-text-200 border-b-2 border-transparent sm:border-b-2'
            }`}
          onClick={() => setActiveLink('productDetails')}
        >
          {t('productDetails')}
        </Link>
        <Link
          to="#"
          className={`font-satoshi w-full rounded-none py-3 text-base transition-all duration-200 sm:w-[25.875rem] sm:text-lg flex justify-center items-center ${activeLink === 'rating&reviews'
              ? 'border-b-2 border-black font-semibold text-black'
              : 'text-text-200 border-b-2 border-transparent sm:border-b-2'
            }`}
          onClick={() => setActiveLink('rating&reviews')}
        >
          {t('rating&reviews')}
        </Link>
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
