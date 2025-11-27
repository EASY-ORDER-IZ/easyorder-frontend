import type { HTMLAttributes } from 'react';

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt?: string;
};

const Logo = ({ src, alt = 'Logo', className, ...rest }: LogoProps) => {
  return (
    <div {...rest}>
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default Logo;
