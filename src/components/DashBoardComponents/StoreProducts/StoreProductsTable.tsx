import React, { useMemo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';
import { productt } from '@/store/productData';

type TabValue = 'all' | 'active' | 'draft' | 'archived';

const StoreProductTable = () => {
  const [tab, setTab] = useState<TabValue>('all');
  const tabs: TabValue[] = ['all', 'active', 'draft', 'archived'];
  const [status, setStatus] = useState('all');

  const products = productt;

  const finalProducts = useMemo(() => {
    if (tab === 'all') return products;
    return products.filter((p) => p.status === tab);
  }, [products, tab]);

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
        <span>{status}</span>
        <div className="m-4 rounded-md border border-gray-300 px-6 pb-4">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="border-b border-gray-300">
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Services</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="border-b border-gray-300">
                  <TableCell className="font-medium">
                    <img src={product.img} alt="" className="h-12 w-12" />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.status}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.services}</TableCell>
                  <TableCell>{product.createdAt}</TableCell>
                  <TableCell>
                    {/* tirgger */}
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                        <MoreHorizontal className="h-5 w-5 cursor-pointer" />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="end"
                        className="w-32 rounded border border-gray-300 bg-white p-3"
                      >
                        <DropdownMenuItem className="text-text-400 cursor-pointer rounded p-2 outline-none hover:bg-[#D24560] hover:text-white focus:text-white">
                          Edit product
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="text-text-400 cursor-pointer rounded p-2 outline-none hover:bg-[#D24560] hover:text-white">
                            Change Status
                          </DropdownMenuSubTrigger>

                          <DropdownMenuSubContent className="min-w-[140px] rounded border border-gray-300 bg-white p-2">
                            <DropdownMenuRadioGroup
                              value={product.status}
                              onValueChange={setStatus}
                            >
                              <DropdownMenuRadioItem
                                value="active"
                                className="text-text-400 rounded text-center hover:bg-[#D24560] hover:text-white"
                              >
                                Active
                              </DropdownMenuRadioItem>

                              <DropdownMenuRadioItem
                                value="draft"
                                className="text-text-400 rounded text-center hover:bg-[#D24560] hover:text-white"
                              >
                                Draft
                              </DropdownMenuRadioItem>

                              <DropdownMenuRadioItem
                                value="archived"
                                className="text-text-400 rounded text-center hover:bg-[#D24560] hover:text-white"
                              >
                                Archived
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>

                        <DropdownMenuItem className="cursor-pointer rounded p-2 text-red-500 outline-none hover:bg-[#D24560] hover:text-white">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-text-400 mt-4 text-xs">
          showing 1–{finalProducts.length} of {products.length} Products
        </p>
      </Tabs>
    </div>
  );
};

export default StoreProductTable;
