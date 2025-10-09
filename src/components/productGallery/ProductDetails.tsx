import React, { useState } from 'react';
import ColorCircle from './ColorCircle';
import { Button } from '../ui/button/button';

const ProductDetails = () => {
  const [activeButton, setActiveButton] = useState<string>('');
  const [activeColor, setActiveColor] = useState<string>('');
  const [counter, setCounter] = useState<number>(1);

  const sizes = ['small', 'medium', 'large', 'x-large'];
  const colors = ['#000000', '#39040aff', '#020a1aff'];

  return (
    <div>
      <h1 className="font-integral text-xl font-bold sm:text-3xl">One Life Graphic T-shirt</h1>

      <div>
        <span>star</span>
        <div className="p-3">
          <div className="flex gap-4">
            <div className="font-integral flex gap-3 text-2xl font-bold">
              <span>$260</span> <del className="text-text-200">$300</del>
            </div>
            <span className="rounded-full bg-red-100 px-2 py-1 text-red-500">-40%</span>
          </div>
          <p className="text-text-300 py-3">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and <br />{' '}
            breathable fabric, it offers superior comfort and style.
          </p>
        </div>
      </div>

      <hr className="border-t border-gray-300 p-2" />

      <div>
        <span className="text-text-200 font-satoshi p-3">Select Colors</span>
        <div className="flex gap-3 p-2 py-3">
          {colors.map((color) => (
            <ColorCircle
              key={color}
              color={color}
              size="2"
              isActive={activeColor === color}
              onClick={() => setActiveColor(color)}
            />
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-300 p-2" />

      <div>
        <span className="text-text-200 font-satoshi p-3">Choose Size</span>
        <div className="flex gap-3 p-2">
          {sizes.map((size) => (
            <Button
              key={size}
              onClick={() => setActiveButton(size)}
              className={`min-w-[5.375rem] cursor-pointer rounded-full px-4 py-2 ${
                activeButton === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
      <hr className="mt-2 border-t border-gray-300 p-2" />

      <div className="flex items-center gap-3">
        <div className="m:w-[10.625rem] my-4 flex w-full items-center justify-center gap-3 rounded-full bg-gray-100 p-2">
          <Button
            className="cursor-pointer text-5xl"
            onClick={() => {
              if (counter > 1) setCounter(counter - 1);
            }}
          >
            -
          </Button>
          <span>{counter}</span>
          <Button className="cursor-pointer text-4xl" onClick={() => setCounter(counter + 1)}>
            +
          </Button>
        </div>

        <Button
          className="bg-button-bg text-button-text w-full cursor-pointer rounded-full px-6 py-6 sm:w-[25rem]"
          onClick={() => console.log('Add to Cart')}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
