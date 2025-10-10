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
      <div className="bg-component-bg relative flex min-h-screen flex-col md:flex-row">
        <div className="flex-1 p-6 md:p-20">
          <h1 className="font-integral mb-6 text-4xl font-bold sm:text-6xl">
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

          <Button className="bg-button-bg text-button-text mb-6 w-full rounded-full px-6 py-6 md:w-[210px]">
            <Link to="shop">{t('heroSection.button')}</Link>
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

        <div className="relative">
          <img
            src={star}
            alt=""
            className="absolute top-4 right-12 h-[76px] w-[76px] sm:top-20 sm:right-20 sm:h-[104px] sm:w-[104px]"
          />
          <LandingBg className="object-cover" />
          <img
            src={star}
            alt="Star"
            className="absolute top-26 left-12 h-[44px] w-[44px] sm:top-67 sm:left-7 sm:h-[56px] sm:w-[56px]"
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
                  className="mb-2 h-[23.2px] w-[116.7px] sm:h-8 sm:w-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={zara_logo}
                  alt="Zara"
                  className="mb-2 h-[23.2px] w-[63.8px] sm:h-8 sm:w-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={guccie_logo}
                  alt="Gucci"
                  className="mb-2 h-[23.2px] w-[109.3px] sm:h-8 sm:w-auto"
                />
              </div>
            </div>

            <div className="flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <img
                  src={prada_logo}
                  alt="Prada"
                  className="mb-2 h-[23.2px] w-[127px] sm:h-8 sm:w-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={calvin_klein_logo}
                  alt="Calvin Klein"
                  className="mb-2 h-[23.2px] w-[134.8px] sm:h-8 sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-around overflow-x-auto md:flex">
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
