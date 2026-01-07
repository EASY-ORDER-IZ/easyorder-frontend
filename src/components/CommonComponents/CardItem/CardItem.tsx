import React, { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';
import { addToFav, getFavItem } from '@/hooks/useFav';
import { removeFromLocalStorageById } from '@/utils/localStorage';
import { SuccessSonner } from '../sonners/SuccessSonner';
import { DeleteSonner } from '../sonners/DeleteSonner';

interface cardProps {
  id: number;
  title: string;
  img: string;
  price: number;
  discount?: number;
  rating: number;
  sale?: string;
  fav?: boolean;
  heart?: boolean;
}

const CardImg: React.FC<cardProps> = ({
  id,
  title,
  img,
  price,
  discount,
  rating,
  sale,
  fav = false,
  heart = false,
}) => {
  const [favorite, setFavorite] = useState(fav);

  useEffect(() => {
    const favItem = getFavItem('favorites', id);
    if (favItem) {
      setFavorite(true);
    }
  }, [id]);

  const handleToggle = () => {
    const updated = !favorite;
    setFavorite(updated);

    const payload = {
      id,
      title,
      img,
      price,
      discount,
      rating,
      sale,
      fav: updated,
    };

    if (updated) {
      addToFav('favorites', payload);
      setFavorite(true);
    } else {
      removeFromLocalStorageById('favorites', id);
      setFavorite(false);
    }
  };

  const handleSuccess = () => {
    SuccessSonner({
      title: 'Added to favorites!',
      placeholder: 'Your changes were saved.',
    });
  };

  const handleDelete = () => {
    DeleteSonner({
      title: 'Removed from favorites!',
      placeholder: 'Your selected item was removed.',
    });
  };

  return (
    <div className="relative h-96 w-[14.5rem] overflow-hidden rounded-[0.3rem] text-white shadow-lg">
      {/* Image */}
      <img src={img} alt="Product" className="absolute inset-0 h-full w-full object-cover" />

      {/* 🔥 Bottom gray gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Top badges */}
      <div className="absolute top-3 right-5 left-2 z-10 flex items-center justify-between">
        <div
          className={`${
            sale?.toLowerCase() === 'sale'
              ? 'bg-[var(--color-primary-main)]/80'
              : 'bg-[linear-gradient(to_right,oklch(0.35_0.11_200deg/_0.54),oklch(0.43_0.13_195deg/_0.91))]'
          } w-[4.75rem] rounded-[0.4rem] px-3 py-1 text-center text-sm`}
        >
          {sale}
        </div>

        <Heart
          width={22}
          height={22}
          onClick={() => {
            handleToggle();
            if (!favorite) handleSuccess();
            else handleDelete();
          }}
          className={`cursor-pointer ${favorite || heart ? 'fill-red-500 stroke-red-500' : 'stroke-white'}`}
        />
      </div>

      <div className="absolute right-2 bottom-2 left-2 z-10 flex flex-col gap-3">
        <span className="font-poppins text-[1.25rem] font-medium">{title}</span>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="text-xs">${price}</span>
            {discount && <del className="text-text-200 text-xs">${discount}</del>}
          </div>

          <div className="relative flex flex-row-reverse items-center gap-1">
            <span className="text-xs">{rating.toFixed(1)}</span>

            <div className="relative h-4 w-4">
              <Star className="absolute inset-0 h-4 w-4 stroke-yellow-400" />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${(rating / 5) * 100}%` }}
              >
                <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImg;
