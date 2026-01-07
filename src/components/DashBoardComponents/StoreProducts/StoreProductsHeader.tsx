import { ListFilter } from 'lucide-react';
import React from 'react';
import Select from '../../CommonComponents/Select';
import SearchComponent from '../../CommonComponents/Search';
import AddProducts from '../AddProducts';

const data = [
  {
    id: 1,
    label: 'Latest',
    value: 'Latest',
  },
  {
    id: 2,
    label: 'Oldest',
    value: 'Oldest',
  },
];

const StoreProductsHome = () => {
  return (
    <div>
      <div className="flex justify-between p-3">
        <div className="flex items-center gap-3">
          <ListFilter width={32} />
          <Select
            data={data}
            className="border-0 text-[32px] shadow-none outline-none focus:border-0"
            variant="minimal"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[25rem]">
            <SearchComponent />
          </div>
          <AddProducts />
        </div>
      </div>
    </div>
  );
};

export default StoreProductsHome;
