import React from 'react';
import StoreProductsHome from './StoreProductsHeader';
import StoreProductsTable from './StoreProductsTable';
import { useProductStore } from '@/store/productStore';
import PageSection from '@/layout/PageSection';
import { useState } from 'react';
import ProductForm from '../ProductForm';
const StoreProducts = () => {
  const products = useProductStore((state) => state.products);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {products.length > 0 ? (
        <>
          <StoreProductsHome />
          <StoreProductsTable />
        </>
      ) : (
        <PageSection>
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-10 text-center text-2xl font-semibold text-gray-600">
              No products found
            </h1>
            <p
              className="mt-2 cursor-pointer text-center text-gray-400 underline hover:text-[var(--color-primary-main)]"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Create a product to get started
            </p>
            {open && <ProductForm />}
            <br />
            <br />
          </div>
        </PageSection>
      )}
    </div>
  );
};

export default StoreProducts;
