import React from 'react';

interface ProductDetailsTabProps {
  content: string;
  material: string;
  pattern: string;
  colors: string;
  sizes: string;
  finish: string;
  care: string;
}

const ProductDetailsTab: React.FC<ProductDetailsTabProps> = ({
  content,
  material,
  pattern,
  colors,
  sizes,
  care,
}) => {
  return (
    <div className="m-4">
      <div>
        <p>{content}</p>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h3>Details</h3>
        <ul className="text-text-400 list-disc space-y-1 pl-6">
          <li>
            <strong>Material:</strong> {material}
          </li>
          <li>
            <strong>Pattern:</strong> {pattern}
          </li>
          <li>
            <strong>Colors:</strong> {colors}
          </li>
          <li>
            <strong>Size:</strong> {sizes}
          </li>
          <li>
            <strong>Finish:</strong> Hand-rolled edges
          </li>
          <li>
            <strong>Care:</strong> {care}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsTab;
