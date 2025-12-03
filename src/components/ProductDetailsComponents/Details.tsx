import React, { useState } from 'react';
import AvialableColors from './AvialableColors';
import AvailableSizes from './AvailableSizes';
import { Button } from '../ui/button/button';
import { Minus, Plus } from 'lucide-react';
import CustomRating from '../ui/CustomRating';

const Details = () => {
  const [btnTitle, setBtnTitle] = useState('Add to cart');
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);

  const handleAddToCart = () => {
    setTimeout(() => {
      setBtnTitle('Added to cart');
    }, 1000);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center gap-2">
        <CustomRating value={4.5} readOnly />
        <span className="text-sm md:text-base">({4.5})</span>
      </div>

      <div className="mt-2">
        <h1 className="text-2xl font-bold md:text-[2.3rem]">Persian Elegance Silk Scarf</h1>
        <p className="text-text-400 max-w-full text-sm md:max-w-[31.2rem] md:text-base">
          A luxurious satin silk scarf featuring intricate Persian paisley patterns in rich navy and
          gold tones.
        </p>
        <span className="text-text-400 text-xl font-bold md:text-[2.3rem]">$24.84</span>
      </div>

      <hr className="my-4" />

      <div>
        <h2 className="text-text-400 text-base font-bold md:text-[1.5rem]">Available colors</h2>
        <AvialableColors colors={['#353D54', '#D24560', '#006E8D']} />
      </div>
      <br />

      <div>
        <h2 className="text-text-400 text-base font-bold md:text-[1.5rem]">Available sizes</h2>
        <AvailableSizes sizes={['OneSize', 'Small', 'Medium', 'Large']} defaultValue="Medium" />
      </div>
      <br />
      <hr />
      <br />

      <div className="mt-4 flex flex-col gap-2 md:flex-row md:gap-4">
        <div className="border-text-400 flex w-full items-center justify-center gap-4 rounded-full border border-2 md:w-[10.3rem] md:gap-5">
          <button onClick={handleDecrement} className="cursor-pointer">
            <Minus size={20} />
          </button>
          <span>{count}</span>
          <button onClick={handleIncrement} className="cursor-pointer">
            <Plus size={20} />
          </button>
        </div>
        <Button
          title={btnTitle}
          onClick={handleAddToCart}
          className="w-full rounded-full md:w-[24.5rem]"
        />
      </div>
    </div>
  );
};

export default Details;
