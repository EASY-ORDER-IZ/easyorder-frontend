import ProductBar from '@/components/ProductComponents/ProductBar';

const HomePage = () => {
  return (
    <div className="flex flex-col sm:px-10 sm:py-10">
      <ProductBar title="Top Selling" />
    </div>
  );
};

export default HomePage;
