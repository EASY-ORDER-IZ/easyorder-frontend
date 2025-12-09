import { products } from '@/store/dummmyData';
import React from 'react';
import ProductCard from '../ProductComponents/ProductCard';

const FilterGroup = () => {
  const womenProducts = products.filter((p) => p.gender === 'Women');
  const menProducts = products.filter((p) => p.gender === 'Men');
  const kidsProducts = products.filter((p) => p.gender === 'Kids');

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary-main)]">Women</h2>
        <hr />
        <br />
        <br />
        <div className="flex flex-wrap gap-4">
          {womenProducts.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              description={p.discription}
              img={p.image}
            />
          ))}
        </div>
      </div>

      <br />
      <br />
      <div>
        <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary-main)]">Men</h2>
        <hr />
        <br />
        <br />
        <div className="flex justify-start gap-4">
          {menProducts.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              description={p.discription}
              img={p.image}
            />
          ))}
        </div>
      </div>

      <br />
      <br />
      <div>
        <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary-main)]">Kids</h2>
        <hr />
        <br />
        <br />
        <div className="flex justify-start gap-4">
          {kidsProducts.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              description={p.discription}
              img={p.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterGroup;
