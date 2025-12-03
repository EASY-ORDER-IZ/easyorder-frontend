import React from 'react';

const ProductDetailsTab = () => {
  return (
    <div className="m-4">
      <div>
        <p>
          Elevate your look with this exquisite Persian-pattern silk scarf, crafted with timeless
          sophistication. The design features intricate paisley and arabesque motifs in rich tones
          of navy, burgundy, and gold, creating a classic yet luxurious aesthetic.
        </p>
        <br />
        <p>
          Made from high-quality satin silk, the scarf offers a smooth, lightweight feel with a
          subtle sheen that drapes beautifully. Its elegant pattern draws inspiration from
          traditional Persian artistry, making it a statement piece that adds cultural depth and
          refined charm to any outfit.
        </p>
        <br />
        <p>
          Perfect for both formal and casual occasions, this versatile scarf can be styled as a
          headscarf, neck accessory, or tied to a handbag for a touch of elegance.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h3>Details</h3>
        <ul className="text-text-400 list-disc space-y-1 pl-6">
          <li>
            <strong>Material:</strong> 100% Satin Silk
          </li>
          <li>
            <strong>Pattern:</strong> Persian Paisley Print
          </li>
          <li>
            <strong>Colors:</strong> Navy, Burgundy, Gold, and Light Blue accents
          </li>
          <li>
            <strong>Size:</strong> 90 x 90 cm (approx.)
          </li>
          <li>
            <strong>Finish:</strong> Hand-rolled edges
          </li>
          <li>
            <strong>Care:</strong> Dry clean recommended
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsTab;
