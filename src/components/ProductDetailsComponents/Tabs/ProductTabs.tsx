import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductDetailsTab from './ProductDetailsTab';
import ReviewsTab from './ReviewsTab';

const ProductTabs = () => {
  return (
    <Tabs defaultValue="Reviews" className="mt-3 w-full">
      <TabsList>
        <TabsTrigger value="ProductDetails">Product Details</TabsTrigger>
        <TabsTrigger value="Reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="ProductDetails">
        <ProductDetailsTab />
      </TabsContent>
      <TabsContent value="Reviews">
        <ReviewsTab />
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
