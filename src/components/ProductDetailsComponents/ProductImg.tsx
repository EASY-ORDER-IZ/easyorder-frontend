import React, { type HTMLAttributes } from 'react';

type ProductImgProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt?: string;
};

const ProductImg: React.FC<ProductImgProps> = ({ src, alt = '', className, ...rest }) => {
  return (
    <div {...rest}>
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default ProductImg;
