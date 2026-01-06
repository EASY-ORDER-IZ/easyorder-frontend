import { productFooter } from '@/assets/icons';
import { Footer } from '@/components/HomePageComponents/footer';
import ProductBar from '@/components/HomePageComponents/ProductBar';
import Details from '@/components/ProductDetailsComponents/Details';
import ImgDisplay from '@/components/ProductDetailsComponents/ImgDisplay';
import Links from '@/components/ProductDetailsComponents/Links';
import ProductTabs from '@/components/ProductDetailsComponents/Tabs/ProductTabs';
import { products, topSelling } from '@/store/dummmyData';
import React from 'react';
import { useParams } from 'react-router';

const ProductDetailsPage = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  return (
    <div>
      <div className="px-22">
        <div>
          <Links />
          <div className="flex gap-6 rounded-2xl p-6 shadow-lg">
            <ImgDisplay images={product?.images || []} />
            <Details
              title={product?.title || ''}
              description={product?.description || ''}
              price={product?.price || 0}
              rating={product?.rating || 0}
              colors={product?.colors || []}
              sizes={product?.sizes || []}
            />
          </div>
        </div>
        <ProductTabs id={product?.id || 0} />
      </div>
      <div className="mt-6">
        <ProductBar array={topSelling} title="Best Seller" />
      </div>
      <br />
      <br />
      <br />
      <Footer src={productFooter} alt="Footer Background" className="h-[321px]" />
    </div>
  );
};

export default ProductDetailsPage;
