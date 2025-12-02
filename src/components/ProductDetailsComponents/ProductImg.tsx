import React, { type HTMLAttributes } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type ProductImgProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt?: string;
};

const ProductImg: React.FC<ProductImgProps> = ({ src, alt = '', className, ...rest }) => {
  return (
    <div {...rest}>
      <Zoom>
        <img src={src} alt={alt} className={className} style={{ cursor: 'zoom-in' }} />
      </Zoom>
    </div>
  );
};

export default ProductImg;
