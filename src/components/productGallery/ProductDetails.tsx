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
      <h1 className="font-integral text-xl sm:text-3xl font-bold">One Life Graphic T-shirt</h1>

      <div>
        <span>star</span>
        <div className="p-3">
          <div className="flex gap-4">
            <div className="flex gap-3 font-integral text-2xl font-bold">
              <span>$260</span> <del className="text-text-200">$300</del>
            </div>
            <span className="bg-red-100 rounded-full py-1 px-2 text-red-500">-40%</span>
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
        <span className="text-text-200 font-satoshi p-3 ">Choose Size</span>
        <div className="flex gap-3 p-2">
          {sizes.map((size) => (
            <Button
              key={size}
              onClick={() => setActiveButton(size)}
              className={`py-2 px-4 rounded-full w-[86px] cursor-pointer ${
                activeButton === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
      <hr className="border-t border-gray-300 p-2 mt-2" />

      <div className="flex gap-3 items-center">
        <div className="flex items-center justify-center gap-3 my-4 bg-gray-100 w-[170px] p-2 rounded-full">
          <Button
            className="text-5xl cursor-pointer"
            onClick={() => {
              if (counter > 1) setCounter(counter - 1);
            }}
          >
            -
          </Button>
          <span>{counter}</span>
          <Button className="text-4xl cursor-pointer" onClick={() => setCounter(counter + 1)}>
            +
          </Button>
        </div>

        <Button
          className="w-full md:w-[400px] py-6 px-6 rounded-full bg-button-bg text-button-text cursor-pointer"
          onClick={() => console.log('Add to Cart')}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
