import { Input } from '@/components/ui/input';
import { useProductStore, type Product } from '@/store/productStore';
import { Camera, Search } from 'lucide-react';
import { useState, useMemo } from 'react';

interface Props {
  onProductSelect?: (product: Product) => void;
  placeholder?: string;
}

const SearchComponent = ({ placeholder = 'Search for products...' }: Props) => {
  const [input, setInput] = useState('');
  const [showBox, setShowBox] = useState(false);
  const products = useProductStore((state) => state.products);

  const filteredProducts = useMemo(() => {
    if (!input.trim()) return [];
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(input.toLowerCase()) ||
        product.category?.toLowerCase().includes(input.toLowerCase()),
    );
  }, [products, input]);

  const handleChange = (value: string) => {
    setInput(value);
    setShowBox(value.trim() !== '');
  };

  // const handleProductClick = (product: Product) => {
  //   onProductSelect?.(product);
  //   setShowBox(false);
  //   setInput('');
  // };

  // const handleChange = (value: string) => {
  //   setInput(value);
  //   if (value.trim() === '') {
  //     setShowBox(false);
  //     setResults([]);
  //   } else {
  //     fetchData(value);
  //   }
  // };

  return (
    <div className="relative flex w-[27rem] flex-col items-center gap-1">
      <Input
        prefixIcon={<Search size={16} className="text-text-secondary" />}
        suffixIcon={<Camera size={16} className="text-text-secondary" />}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        type="search"
        placeholder={placeholder}
        className="no-cancel"
      />

      {showBox && (
        <div className="custom-shadow bg-background absolute top-full right-0 left-0 z-10 mt-2 flex max-h-60 flex-col gap-2 overflow-y-scroll rounded-sm p-2">
          <span className="suggestion-text text-text-secondary">Suggestions</span>
          <div className="flex w-full flex-col gap-1.5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((products, index) => (
                <div
                  key={index}
                  className="bg-background hover:text-background hover:bg-accent-primary cursor-pointer rounded-sm p-1"
                >
                  <span className="button-text"> {products.name}</span>
                </div>
              ))
            ) : (
              <div className="bg-background text-text-secondary rounded-sm p-1">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
