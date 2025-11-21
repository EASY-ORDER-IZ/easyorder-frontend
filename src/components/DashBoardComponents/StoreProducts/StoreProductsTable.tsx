import React, { useMemo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/store/productData';

type TabValue = 'all' | 'active' | 'draft' | 'archived';

const StoreProductTable = () => {
  const [tab, setTab] = useState<TabValue>('all');

  const filteredProducts = useMemo(() => {
    if (tab === 'all') return products;
    return products.filter((p) => p.status === tab);
  }, [tab]);

  return (
    <div className="mt-6 rounded-2xl bg-white">
      <Tabs value={tab} onValueChange={(v) => setTab(v as TabValue)} className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="bg-transparen flex w-full gap-6 border-b border-gray-200 p-0">
            {['all', 'active', 'draft', 'archived'].map((value) => (
              <TabsTrigger
                key={value}
                value={value}
                className="rounded-none bg-transparent px-0 pb-2 text-gray-400 data-[state=active]:border-b-2 data-[state=active]:border-[#D24560] data-[state=active]:bg-transparent data-[state=active]:text-[#D24560]"
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="px-6 pb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="items-center border-b text-gray-400">
                <th className="py-3 text-left font-normal">product Name</th>
                <th className="py-3 text-left font-normal">Status</th>
                <th className="py-3 text-left font-normal">Price</th>
                <th className="py-3 text-left font-normal">Total Services</th>
                <th className="py-3 text-left font-normal">Created at</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr key={p.id} className="items-center border-b border-gray-300 last:border-0">
                  <td className="flex items-center gap-6 py-3">
                    <img src={p.img} alt="" className="h-18 w-16 rounded" />
                    {p.name}
                  </td>
                  <td className="py-3 capitalize">{p.status}</td>
                  <td className="py-3">{p.price}</td>
                  <td className="py-3">{p.services}</td>
                  <td className="py-3">{p.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-text-400 mt-4 text-xs">
            Showing 1–{filteredProducts.length} of {products.length} products
          </p>
        </div>
      </Tabs>
    </div>
  );
};

export default StoreProductTable;
