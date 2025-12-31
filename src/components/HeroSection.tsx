import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button/button';
import { NavLink } from 'react-router-dom';
import Counter from '../hooks/counter';
import { star } from '@/assets/icons';
import LandingBg from './CommonComponents/LandingBg';
import Watan from '@/assets/svg/Watan';
import Pailroots from '@/assets/svg/Pailroots';
import Rula from '@/assets/svg/Rula';
import Collecttive from '@/assets/svg/Collecttive';
import Full from '@/layout/Full';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="bg-background-50 relative flex flex-col md:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center md:items-start md:p-20 md:text-left">
          <h1 className="font-integral text-text-600 mb-6 text-4xl font-bold sm:text-6xl">
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
          <NavLink to="/products">
            <Button className="mb-6 w-full rounded-full md:w-[210px]" title="Shop Now !" />
          </NavLink>

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

        <div className="relative hidden md:block">
          <img
            src={star}
            alt=""
            className="absolute top-4 right-12 hidden h-[76px] w-[76px] sm:top-2 sm:right-4 sm:h-[104px] sm:w-[104px] md:block"
          />
          <img
            src={star}
            alt="Star"
            className="absolute hidden sm:w-[56px] md:top-22 md:right-28 md:block md:h-[56px]"
          />
          <LandingBg className="hidden object-cover md:block" />
        </div>
      </div>

      <Full>
        <div className="bg-background-900 w-full py-6 md:py-10">
          <div className="flex items-center justify-around overflow-x-auto">
            <Pailroots />
            <Collecttive />
            <Watan />
            <Rula />
          </div>
        </div>
      </Full>
    </div>
  );
};

export default HeroSection;
