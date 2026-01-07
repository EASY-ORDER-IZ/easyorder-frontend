'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button/button';
import { useProductStore } from '@/store/productStore';

interface DeleteProductDialogProps {
  productId: string | null;
  open: boolean;
  onClose: () => void;
}

const DeleteProductDialog = ({ productId, open, onClose }: DeleteProductDialogProps) => {
  const deleteProduct = useProductStore((state) => state.deleteProduct);

  const handleDelete = () => {
    if (productId) {
      deleteProduct(productId);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="p-6 sm:max-w-[400px]">
        <DialogHeader className="flex flex-col items-center gap-2 text-center sm:text-center">
          <DialogTitle className="text-xl">Delete Product</DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Are you sure you want to delete this product? <br />
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-4 flex gap-2 sm:justify-center">
          <Button title="cancle" onClick={onClose} variant="secondary" />
          <Button title="Delete" onClick={handleDelete} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProductDialog;
