import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button/button';
import { Link } from 'react-router-dom';
import Counter from '../hooks/counter';

import {
  zara_logo,
  versace_logo,
  calvin_klein_logo,
  prada_logo,
  guccie_logo,
  star,
} from '@/assets/icons';
import LandingBg from './CommonComponents/LandingBg';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="relative flex min-h-screen flex-col md:flex-row">
        <div className="flex-1 p-6 md:p-20">
          <h1 className="font-integral text-4xl font-bold sm:text-6xl">
            {t('heroSection.title.line1')}
            <br />
            {t('heroSection.title.line2')}
            <br />
            {t('heroSection.title.line3')}
          </h1>

          <p className="text-text-200 mb-6 py-3">
            {t('heroSection.description.line1')}
            <br />
            {t('heroSection.description.line2')}
          </p>

          <Button className="bg-component-bg mb-6 w-full rounded-full px-6 py-6 text-white md:w-[210px]">
            <Link to="/shop">{t('heroSection.button')}</Link>
          </Button>

          <div className="font-satoshi mb-6 flex flex-col items-center gap-8 md:flex-row">
            <div className="flex gap-8">
              <div>
                <Counter end={200} /> <br />
                <span className="text-text-400">{t('heroSection.counter')}</span>
              </div>
              <div>
                <Counter end={2000} /> <br />
                <span className="text-text-400">{t('heroSection.counter2')}</span>
              </div>
            </div>

            <div>
              <Counter end={30000} /> <br />
              <span className="text-text-400">{t('heroSection.counter3')}</span>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <img
            src={star}
            alt=""
            className="absolute top-12 right-8 z-10 h-16 w-16 sm:top-12 sm:right-12 sm:h-20 sm:w-20 md:top-5 md:right-16 md:h-24 md:w-24"
          />

          <div className="relative h-full w-full">
            <LandingBg className="h-full w-full object-cover" />
          </div>

          <img
            src={star}
            alt="Star"
            className="absolute bottom-8 left-8 z-10 h-10 w-10 sm:bottom-12 sm:left-12 sm:h-12 sm:w-12 md:bottom-44 md:left-3 md:h-12 md:w-12"
          />
        </div>
      </div>

      <div className="bg-component-bg w-full py-6 md:py-10">
        <div className="flex items-center justify-center gap-4 overflow-x-auto px-4 sm:gap-8 md:gap-12 lg:gap-16">
          <img
            src={versace_logo}
            alt="Versace"
            className="h-6 w-auto flex-shrink-0 sm:h-7 md:h-8"
          />
          <img src={zara_logo} alt="Zara" className="h-6 w-auto flex-shrink-0 sm:h-7 md:h-8" />
          <img src={guccie_logo} alt="Gucci" className="h-6 w-auto flex-shrink-0 sm:h-7 md:h-8" />
          <img src={prada_logo} alt="Prada" className="h-6 w-auto flex-shrink-0 sm:h-7 md:h-8" />
          <img
            src={calvin_klein_logo}
            alt="Calvin Klein"
            className="h-6 w-auto flex-shrink-0 sm:h-7 md:h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
