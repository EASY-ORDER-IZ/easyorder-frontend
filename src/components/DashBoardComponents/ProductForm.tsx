'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '../ui/input';
import { Upload } from 'lucide-react';
import { useState } from 'react';
import InputUpload from './InputUpload';
import { Button } from '../ui/button/button';
import { useProductStore } from '@/store/productStore';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

const productFormSchema = z.object({
  productName: z.string().min(2),
  price: z.coerce.number().min(0),
  services: z.coerce.number().min(0),
  category: z.string().min(1),
  images: z
    .custom<FileList>()
    .refine((files) => files && files.length > 0)
    .refine((files) => Array.from(files).every((f) => f.size <= MAX_FILE_SIZE))
    .refine((files) => Array.from(files).every((f) => ACCEPTED_FILE_TYPES.includes(f.type))),
});

type ProductFormType = z.infer<typeof productFormSchema>;

const ProductForm = () => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string[]>([]);

  const form = useForm<ProductFormType>({
    resolver: zodResolver(productFormSchema),
    mode: 'onChange',
  });

  const toFileList = (files: File[]) => {
    const dt = new DataTransfer();
    files.forEach((f) => dt.items.add(f));
    return dt.files;
  };

  const disable = !form.formState.isValid;

  const addProduct = useProductStore((state) => state.addProduct);

  const onSubmit = (data: ProductFormType) => {
    const payload = {
      id: crypto.randomUUID(),
      name: data.productName,
      img: preview[0],
      price: data.price,
      status: 'active' as const,
      services: data.services,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    addProduct(payload);
  };

  return (
    <>
      <InputUpload
        open={open}
        close={() => setOpen(false)}
        onSelectedFile={(files) => {
          form.setValue('images', toFileList(files), { shouldValidate: true });
          setPreview(files.map((file) => URL.createObjectURL(file)));
        }}
      />

      <div className="mx-auto max-w-2xl p-6">
        <form onSubmit={form.handleSubmit(() => onSubmit)} className="space-y-6">
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
                render={({ field }) => <Input type="number" {...field} />}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-md text-gray-600">Services</label>
              <Controller
                name="services"
                control={form.control}
                render={({ field }) => <Input type="number" {...field} />}
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
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Upload size={18} />
                  <p className="text-sm font-medium">Upload Images</p>
                </div>
                <p className="text-text-500 text-xs">Select and upload image for your product</p>
              </div>
            </button>

            {preview.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3">
                {preview.map((src, i) => (
                  <img key={i} src={src} className="h-20 w-20 rounded-md object-cover" />
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            title="Create Product"
            disabled={disable}
            onClick={() => onSubmit(form.getValues())}
          />
        </form>
      </div>
    </>
  );
};

export default ProductForm;
