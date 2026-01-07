import React, { useState, useRef } from 'react';
import { storeImg } from '@/assets/icons';
import { Pen } from 'lucide-react';

const StoreImg = () => {
  const [img, setImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('File size must be less than 2MB');
      return;
    }

    const url = URL.createObjectURL(file);
    setImg(url);
  };

  return (
    <div className="relative">
      <img
        src={img || storeImg}
        alt="store cover"
        className="h-[35.625rem] w-full object-cover p-4 opacity-70"
      />

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChangeImg}
        accept="image/*"
        className="hidden"
      />

      <div
        onClick={handleClick}
        className="text-text-700 shadow-black-300/50 absolute top-7 right-4 flex w-[12.5rem] cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[#FEFEFD96] text-sm shadow-2xl"
      >
        <Pen width={13} />
        <span>Change Store Cover</span>
      </div>
    </div>
  );
};

export default StoreImg;
