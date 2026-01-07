import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductDetailsTab from './ProductDetailsTab';
import ReviewsTab from './ReviewsTab';
import { products } from '@/store/dummmyData';

interface ProductTabsProps {
  id: number;
}
const ProductTabs: React.FC<ProductTabsProps> = ({ id }) => {
  const product = products.find((item) => item.id === Number(id));
  return (
    <Tabs defaultValue="Reviews" className="mt-3 w-full">
      <TabsList>
        <TabsTrigger value="ProductDetails">Product Details</TabsTrigger>
        <TabsTrigger value="Reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="ProductDetails">
        <ProductDetailsTab
          content={product?.wholeDescr || ''}
          material={product?.details.material || ''}
          pattern={product?.details.pattern || ''}
          colors={product?.details.colors || ''}
          sizes={product?.details.size || ''}
          finish={product?.details.finish || ''}
          care={product?.details.care || ''}
        />
      </TabsContent>
      <TabsContent value="Reviews">
        <ReviewsTab reviews={product?.reviews || []} />
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
