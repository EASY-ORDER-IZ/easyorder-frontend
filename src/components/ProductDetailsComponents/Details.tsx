import React, { useState } from 'react';
import AvialableColors from './AvialableColors';
import AvailableSizes from './AvailableSizes';
import { Button } from '../ui/button/button';
import { Minus, Plus } from 'lucide-react';

const Details = () => {
  const [btnTitle, setBtnTitle] = useState('Add to cart');
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count > 0) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const handleAddToCart = () => {
    setTimeout(() => {
      setBtnTitle('Added to cart');
    }, 1000);
  };

  return (
    <div className="p-6">
      <div>
        <h1 className="text-[2.3rem] font-bold">Persian Elegance Silk Scarf</h1>

        <p className="text-text-400 w-[31.2rem]">
          A luxurious satin silk scarf featuring intricate Persian paisley patterns in rich navy and
          gold tones.
        </p>

        <span className="text-text-400 text-[2.3rem] font-bold">$24.84</span>
      </div>

      <hr className="my-4" />

      <div>
        <h2 className="text-text-400 text-[1.5rem] font-bold">Available colors</h2>
        <AvialableColors colors={['#353D54', '#D24560', '#006E8D']} />
      </div>
      <br />
      <div>
        <h2 className="text-text-400 text-[1.5rem] font-bold">Available sizes</h2>
        <AvailableSizes sizes={['OneSize', 'Small', 'Medium', 'Large']} defaultValue="Medium" />
      </div>
      <br />
      <hr />
      <br />
      <div className="mt-4 flex gap-2">
        <div className="border-text-400 flex w-[10.3rem] items-center justify-center gap-5 rounded-full border border-2">
          <button onClick={handleDecrement} className="cursor-pointer">
            <Minus size={20} />
          </button>
          <span>{count}</span>
          <button onClick={handleIncrement} className="cursor-pointer">
            <Plus size={20} />
          </button>
        </div>
        <Button title={btnTitle} onClick={handleAddToCart} className="w-[24.5rem] rounded-full" />
      </div>
    </div>
  );
};

export default Details;
