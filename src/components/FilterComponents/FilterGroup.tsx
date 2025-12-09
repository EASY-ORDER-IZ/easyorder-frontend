import { products } from '@/store/dummmyData';
import React from 'react';
import ProductCard from '../ProductComponents/ProductCard';
import { Separator } from '@/components/ui/separator';

interface Props {
  appliedFilters?: string[];
  priceRange?: [number, number];
  currentPage?: number;
  itemsPerPage?: number;
  onHasProducts?: (hasProducts: boolean) => void;
}

const FilterGroup = ({
  appliedFilters = [],
  priceRange = [0, 250],
  currentPage = 1,
  itemsPerPage = 6,
  onHasProducts,
}: Props) => {
  const filteredProducts = products.filter((p) => {
    const matchesFilters =
      appliedFilters.length === 0 ||
      appliedFilters.some(
        (filter) =>
          p.category?.includes(filter) ||
          p.subcategory?.includes(filter) ||
          p.title?.toLowerCase().includes(filter.toLowerCase()) ||
          (p.sizes && p.sizes.includes(filter)),
      );

    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];

    return matchesFilters && matchesPrice;
  });

  const womenProducts = filteredProducts.filter((p) => p.gender === 'Women');
  const menProducts = filteredProducts.filter((p) => p.gender === 'Men');
  const kidsProducts = filteredProducts.filter((p) => p.gender === 'Kids');

  // Apply pagination to each category separately
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedWomenProducts = womenProducts.slice(startIndex, endIndex);
  const paginatedMenProducts = menProducts.slice(startIndex, endIndex);
  const paginatedKidsProducts = kidsProducts.slice(startIndex, endIndex);

  // Check if there are any filtered products
  const hasFilteredProducts = filteredProducts.length > 0;

  // Notify parent component about product availability
  if (onHasProducts) {
    onHasProducts(hasFilteredProducts);
  }

  if (!hasFilteredProducts) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-lg text-gray-500">No items selected</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {paginatedWomenProducts.length > 0 && (
        <div>
          <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary-main)]">Women</h2>
          <Separator />
          <br />
          <br />
          <div className="flex flex-wrap gap-4">
            {paginatedWomenProducts.map((p) => (
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
      )}

      {paginatedMenProducts.length > 0 && (
        <>
          <br />
          <br />
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary-main)]">Men</h2>
            <Separator />
            <br />
            <br />
            <div className="flex flex-wrap gap-4">
              {paginatedMenProducts.map((p) => (
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
        </>
      )}

      {paginatedKidsProducts.length > 0 && (
        <>
          <br />
          <br />
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary-main)]">Kids</h2>
            <Separator />
            <br />
            <br />
            <div className="flex flex-wrap gap-4">
              {paginatedKidsProducts.map((p) => (
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
        </>
      )}
    </div>
  );
};

export default FilterGroup;
