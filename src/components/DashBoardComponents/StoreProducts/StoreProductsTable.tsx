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
import EditProductForm from './EditProductForm';
import { useProductStore, type Product } from '@/store/productStore';
import DeleteProductDialog from './DeleteProductDialog';

type TabValue = 'all' | 'active' | 'draft' | 'archived';

const StoreProductTable = () => {
  const [tab, setTab] = useState<TabValue>('all');
  const [searchTerm] = useState('');
  const tabs: TabValue[] = ['all', 'active', 'draft', 'archived'];
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteProduct, setDeleteProduct] = useState<Product | null>(null);
  const products = productt;
  const product2 = useProductStore((state) => state.products);
  const updateProduct = useProductStore((state) => state.updateProduct);

  const finalProducts = useMemo(() => {
    let filtered = product2;

    if (tab !== 'all') {
      filtered = filtered.filter((p) => p.status === tab);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filtered;
  }, [product2, tab, searchTerm]);

  return (
    <div className="mt-6 rounded-2xl bg-white">
      <Tabs value={tab} onValueChange={(v) => setTab(v as TabValue)} className="w-full">
        <div className="px-6 pt-4">
          <div className="mb-4 flex items-center justify-between">
            <TabsList className="bg-transparen flex gap-6 border-b border-gray-200 p-0">
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
        </div>
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
              {finalProducts.map((product) => (
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
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                        <MoreHorizontal className="h-5 w-5 cursor-pointer" />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="end"
                        className="w-32 rounded border border-gray-300 bg-white p-3"
                      >
                        <DropdownMenuItem
                          className="text-text-400 cursor-pointer rounded p-2 outline-none hover:bg-[#D24560] hover:text-white focus:text-white"
                          onClick={() => {
                            setEditingProduct(product);
                          }}
                        >
                          Edit product
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="text-text-400 cursor-pointer rounded p-2 outline-none hover:bg-[#D24560] hover:text-white">
                            Change Status
                          </DropdownMenuSubTrigger>

                          <DropdownMenuSubContent className="min-w-[140px] rounded border border-gray-300 bg-white p-2">
                            <DropdownMenuRadioGroup
                              value={product.status}
                              onValueChange={(newStatus) =>
                                updateProduct(product.id, { status: newStatus })
                              }
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

                        <DropdownMenuItem
                          className="cursor-pointer rounded p-2 text-red-500 outline-none hover:bg-[#D24560] hover:text-white"
                          onClick={() => setDeleteProduct(product.id)}
                        >
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

      {
        <DeleteProductDialog
          open={!!deleteProduct}
          productId={deleteProduct}
          onClose={() => setDeleteProduct(null)}
        />
      }
      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          onClose={() => {
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default StoreProductTable;
