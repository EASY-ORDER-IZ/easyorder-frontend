import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import z from 'zod';
import { useProductStore } from '@/store/productStore';
import type { Product } from '@/store/productStore';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button/button';

const productFormSchema = z.object({
  productName: z.string().min(2),
  price: z.coerce.number().min(0),
  services: z.coerce.number().min(0),
  category: z.string().optional(),
  images: z.any().optional(),
});

type productFormType = z.infer<typeof productFormSchema>;

const toFileList = (files: File[]) => {
  const dt = new DataTransfer();
  files.forEach((f) => dt.items.add(f));
  return dt.files;
};

const EditProductForm = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const updateProduct = useProductStore((state) => state.updateProduct);
  const [, setOpen] = useState(false);
  const [preview, setPreview] = useState<string[]>([]);

  const form = useForm<productFormType>({
    resolver: zodResolver(productFormSchema),
    mode: 'onChange',
    defaultValues: {
      productName: '',
      price: 0,
      services: 0,
      category: '',
    },
  });

  useEffect(() => {
    if (!product) return;

    form.reset({
      productName: product.name ?? '',
      price: product.price ?? 0,
      services: product.services ?? 0,
      category: product.category ?? '',
    });

    if (typeof product.img === 'string') {
      setPreview([product.img]);
    }
  }, [product, form]);

  const onSubmit = (data: productFormType) => {
    const updatedData = {
      name: data.productName,
      price: data.price,
      services: data.services,
      category: data.category,
      img: data.images ? toFileList(Array.from(data.images as FileList)) : product.img,
    };

    updateProduct(product.id, updatedData);
    onClose();
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) onClose();
  };

  return (
    <div className="p-3">
      <Dialog open={true} onOpenChange={handleOpenChange}>
        <DialogContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
            <DialogHeader>
              <div className="flex w-full items-center justify-between">
                <DialogTitle className="text-[var(--color-primary-main)]">Edit Product</DialogTitle>
              </div>
              <DialogDescription>Update any of the product details below.</DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-1">
              <label className="text-md text-gray-600">Product Name</label>
              <Controller
                name="productName"
                control={form.control}
                render={({ field }) => <Input {...field} />}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-md text-gray-600">Price</label>
                <Controller
                  name="price"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      type="number"
                      value={field.value ?? ''}
                      onChange={(e) =>
                        field.onChange(e.target.value === '' ? 0 : Number(e.target.value))
                      }
                    />
                  )}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-md text-gray-600">Services</label>
                <Controller
                  name="services"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      type="type"
                      value={field.value ?? ''}
                      onChange={(e) =>
                        field.onChange(e.target.value === '' ? 0 : Number(e.target.value))
                      }
                    />
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-md text-gray-600">Category</label>
              <Controller
                name="category"
                control={form.control}
                render={({ field }) => <Input {...field} />}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-md text-gray-600">Product Images</label>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 rounded-md border border-[#D1D5DB] bg-gray-100 px-4 py-3 hover:bg-gray-200"
              >
                <div className="flex flex-col gap-2 text-left">
                  <div className="flex items-center gap-2">
                    <Upload size={18} />
                    <p className="text-sm font-medium">Upload Images</p>
                  </div>
                  <p className="text-text-500 text-xs">Select and upload image for your product</p>
                </div>
              </button>

              <Controller
                name="images"
                control={form.control}
                render={({ field }) => (
                  <input
                    hidden
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => {
                      field.onChange(e.target.files);
                      const files = e.target.files ? Array.from(e.target.files) : [];
                      setPreview(files.map((f) => URL.createObjectURL(f)));
                    }}
                  />
                )}
              />

              {preview.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {preview.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="h-20 w-20 rounded-md object-cover"
                      alt="preview"
                    />
                  ))}
                </div>
              )}
            </div>

            <DialogFooter>
              <Button type="submit" title="Save Changes" onClick={form.handleSubmit(onSubmit)} />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProductForm;
