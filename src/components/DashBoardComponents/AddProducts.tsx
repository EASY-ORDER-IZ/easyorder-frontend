import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import ProductForm from './ProductForm';
const AddProducts = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="rounded-7xl flex w-[11rem] cursor-pointer items-center gap-3 bg-[var(--color-primary-main)] p-3 p-4 text-white">
            <Plus size={24} color="white" />
            <span>Add Products</span>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="p-6 text-[var(--color-primary-main)]">
              Add Your new Product
            </DialogTitle>
            <DialogDescription>
              <ProductForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProducts;
