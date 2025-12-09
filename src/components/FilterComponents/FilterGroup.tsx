import { products } from '@/store/dummmyData';
import React from 'react';
import ProductCard from '../ProductComponents/ProductCard';

interface Props {
  appliedFilters?: string[];
}

const FilterGroup = ({ appliedFilters = [] }: Props) => {
  const filteredProducts =
    appliedFilters.length > 0
      ? products.filter((p) =>
          appliedFilters.some(
            (filter) =>
              p.category?.includes(filter) ||
              p.subcategory?.includes(filter) ||
              p.title?.toLowerCase().includes(filter.toLowerCase()),
          ),
        )
      : products;

  const womenProducts = filteredProducts.filter((p) => p.gender === 'Women');
  const menProducts = filteredProducts.filter((p) => p.gender === 'Men');
  const kidsProducts = filteredProducts.filter((p) => p.gender === 'Kids');

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
        <div className="flex flex-wrap gap-4">
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
        <div className="flex flex-wrap gap-4">
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
