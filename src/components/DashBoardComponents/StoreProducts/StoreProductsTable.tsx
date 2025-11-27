import React, { useMemo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProductStore } from '@/store/productStore';
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { img101 } from '@/assets/icons';

type TabValue = 'all' | 'active' | 'draft' | 'archived';

const StoreProductTable = () => {
  const [tab, setTab] = useState<TabValue>('all');
  const tabs = ['all', 'active', 'draft', 'archived'];

  const products = useProductStore((state) => state.products);

  const filteredProducts = useMemo(() => {
    if (tab === 'all') return products;
    return products.filter((p) => p.status === tab);
  }, [products, tab]);

  const demoProduct = {
    id: 'demo',
    name: 'Demo Product',
    img: img101, // FIXED
    price: 30,
    services: 3,
    status: 'active',
    createdAt: 'Nov 21, 2025',
  };

  const finalProducts = [demoProduct, ...filteredProducts];

  const columns: ColumnDef<typeof finalProducts>[] = [
    {
      header: 'Product Name',
      accessorKey: 'name',
      cell: ({ row }) => {
        const p = row.original;
        return (
          <div className="flex items-center justify-center gap-6 p-2">
            <img src={p.img} alt="" className="h-16 w-20 rounded" />
            {p.name}
          </div>
        );
      },
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: ({ getValue }) => <span>{getValue()}</span>,
    },
    {
      header: 'Price',
      accessorKey: 'price',
    },
    {
      header: 'Total Services',
      accessorKey: 'services',
    },
    {
      header: 'Created at',
      accessorKey: 'createdAt',
    },
  ];

  const table = useReactTable({
    data: finalProducts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-6 rounded-2xl bg-white">
      <Tabs value={tab} onValueChange={(v) => setTab(v as TabValue)} className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="bg-transparen flex w-full gap-6 border-b border-gray-200 p-0">
            {tabs.map((t) => (
              <TabsTrigger
                key={t}
                value={t}
                className="rounded-none bg-transparent px-0 pb-2 text-gray-400 data-[state=active]:border-b-2 data-[state=active]:border-[#D24560] data-[state=active]:bg-transparent data-[state=active]:text-[#D24560]"
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="px-6 pb-4">
          <table className="w-full overflow-hidden rounded-xl border border-gray-300 text-sm">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="items-center border-b text-gray-400">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="py-3 font-normal">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="items-center border-b border-gray-200 last:border-0">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-3 text-center">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-text-400 mt-4 text-xs">
          showing 1-{filteredProducts.length} of {filteredProducts.length} Products
        </p>
      </Tabs>
    </div>
  );
};

export default StoreProductTable;
