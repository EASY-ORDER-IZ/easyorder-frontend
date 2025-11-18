import React from 'react';
import { logo } from '../../assets/icons';
import Logo from '../../components/CommonComponents/Logo';

type FooterBackgroundProps = React.HTMLAttributes<HTMLElement> & {
  src: string;
  alt?: string;
  className?: string;
};

const Footer: React.FC<FooterBackgroundProps> = ({ src, alt = '', className = '' }) => {
  return (
    <footer className={`relative w-full overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />

      <div className="relative flex h-full w-full items-end justify-center">
        <div className="flex w-full max-w-[1229px] flex-col items-center gap-4 px-4 py-10 lg:flex-row lg:gap-[246px]">
          <Logo src={logo} className="h-7 w-46" />

          <span className="text-sm text-white">
            FirstChance © 2025, All Rights Reserved to IztechValley
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
