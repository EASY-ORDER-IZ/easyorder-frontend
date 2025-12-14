import React from 'react';
import ProductCard from '../ProductComponents/ProductCard';
import { products } from '@/store/dummmyData';

interface Props {
  appliedFilters?: string[];
  priceRange?: [number, number];
  currentPage?: number;
  itemsPerPage?: number;
  onHasProducts?: (hasProducts: boolean) => void;
  activeTabb?: 'all' | 'men' | 'women' | 'kids';
}

const FilterGroup = ({
  appliedFilters = [],
  priceRange = [0, 250],
  currentPage = 1,
  itemsPerPage = 6,
  onHasProducts,
  activeTabb,
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

  let displayedProducts = filteredProducts;
  if (activeTabb === 'women')
    displayedProducts = filteredProducts.filter((p) => p.gender === 'Women');
  else if (activeTabb === 'men')
    displayedProducts = filteredProducts.filter((p) => p.gender === 'Men');
  else if (activeTabb === 'kids') displayedProducts.filter((p) => p.gender === 'Kids');

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = displayedProducts.slice(startIndex, endIndex);

  // const paginatedWomenProducts = womenProducts.slice(startIndex, endIndex);
  // const paginatedMenProducts = menProducts.slice(startIndex, endIndex);
  // const paginatedKidsProducts = kidsProducts.slice(startIndex, endIndex);

  const hasFilteredProducts = displayedProducts.length > 0;

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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedProducts.map((p) => (
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
  );
};

export default FilterGroup;
