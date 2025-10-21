import { Input } from '@/components/ui/input';
import { Camera, Search } from 'lucide-react';

const SearchComponent = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex w-full items-center">
        <div className="absolute inset-y-0 left-2 flex items-center">
          <Search className="text-text-secondary h-4.5 w-4.5" />
        </div>
        <Input
          onChange={() => {
            console.log('setValue');
          }}
          type="search"
          placeholder="Search for products..."
          className="no-cancel px-8"
        />
        <div className="absolute inset-y-0 right-2 flex cursor-pointer items-center">
          <Camera className="text-text-secondary h-4.5 w-4.5" />{' '}
        </div>
      </div>
      <div className="flex items-center justify-end"></div>
    </div>
  );
};

export default SearchComponent;
