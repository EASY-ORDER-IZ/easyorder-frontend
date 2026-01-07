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
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-[80px] w-[400px] sm:h-full sm:w-full sm:object-cover md:h-full"
      />

      <div className="relative flex h-full w-full items-end justify-center px-4">
        <div className="flex w-full max-w-[1129px] flex-col items-center gap-3 pb-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <LogoSVG color="white" className="" />

          <span className="text-[10px] text-white sm:text-xs md:text-sm lg:text-sm">
            FirstChance © 2025, All Rights Reserved to IztechValley
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
