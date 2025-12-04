import React from 'react';

import LogoSVG from '@/assets/svg/logo';

type FooterBackgroundProps = React.HTMLAttributes<HTMLElement> & {
  src: string;
  alt?: string;
  className?: string;
};

const Footer: React.FC<FooterBackgroundProps> = ({ src, alt = '', className = '' }) => {
  return (
    <footer className={`relative w-full overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />

      <div className="relative flex h-full w-full items-end justify-center px-4">
        <div className="flex w-full max-w-[1229px] flex-col items-center gap-1 pb-2 sm:gap-2 sm:pb-4 md:gap-3 md:pb-6">
          <LogoSVG
            className="h-[0.78125rem] w-[5.4125rem] sm:h-[1.6625rem] sm:w-[11.444rem] md:h-[24rem] md:w-[20rem]"
            color="white"
          />

          <span className="text-[10px] text-white sm:text-xs md:text-sm">
            FirstChance © 2025, All Rights Reserved to IztechValley
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
