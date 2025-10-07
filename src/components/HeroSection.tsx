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
import LandingBg from './LandingBg';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row bg-component-bg relative min-h-screen">
        <div className="flex-1 p-6 md:p-20">
          <h1 className="font-integral text-4xl sm:text-6xl font-bold mb-6">
            {t('heroSection.title.line1')}
            <br />
            {t('heroSection.title.line2')}
            <br />
            {t('heroSection.title.line3')}
          </h1>

          <p className="text-text-200 py-3 mb-6">
            {t('heroSection.description.line1')}
            <br />
            {t('heroSection.description.line2')}
          </p>

          <Button className="w-full md:w-[210px] py-6 px-6 rounded-full bg-button-bg text-button-text mb-6">
            <Link to="shop">{t('heroSection.button')}</Link>
          </Button>

          <div className="flex flex-col  items-center md:flex-row gap-8 mb-6 font-satoshi">
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

        <div className="relative">
          <img
            src={star}
            alt=""
            className="absolute w-[76px] h-[76px] top-4 right-12 sm:top-20 sm:right-20 sm:w-[104px] sm:h-[104px]"
          />
          <LandingBg className="object-cover" />
          <img
            src={star}
            alt="Star"
            className="absolute w-[44px] h-[44px] top-26 left-12 sm:top-67 sm:left-7 sm:w-[56px] sm:h-[56px]"
          />
        </div>
      </div>

      <div className="bg-button-bg w-full py-6 md:py-10">
        <div className="block md:hidden">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <img
                  src={versace_logo}
                  alt="Versace"
                  className="w-[116.7px] h-[23.2px] sm:h-8 sm:w-auto mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={zara_logo}
                  alt="Zara"
                  className="w-[63.8px] h-[23.2px] sm:h-8 sm:w-auto mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={guccie_logo}
                  alt="Gucci"
                  className="w-[109.3px] h-[23.2px] sm:h-8 sm:w-auto mb-2"
                />
              </div>
            </div>

            <div className="flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <img
                  src={prada_logo}
                  alt="Prada"
                  className="w-[127px] h-[23.2px] sm:h-8 sm:w-auto mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={calvin_klein_logo}
                  alt="Calvin Klein"
                  className="w-[134.8px] h-[23.2px] sm:h-8 sm:w-auto mb-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-around overflow-x-auto">
          <img src={versace_logo} alt="Versace" className="h-8 w-auto flex-shrink-0" />
          <img src={zara_logo} alt="Zara" className="h-8 w-auto flex-shrink-0" />
          <img src={guccie_logo} alt="Gucci" className="h-8 w-auto flex-shrink-0" />
          <img src={prada_logo} alt="Prada" className="h-8 w-auto flex-shrink-0" />
          <img src={calvin_klein_logo} alt="Calvin Klein" className="h-8 w-auto flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
