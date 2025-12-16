import React from 'react';

const menItems = () => {
  const menProducts = filteredProducts.filter((p) => p.gender === 'Men');

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  );
};

export default menItems;
