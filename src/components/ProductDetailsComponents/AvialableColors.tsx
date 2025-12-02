import React, { useState, type FC } from 'react';

interface Props {
  colors: string[];
}

const AvialableColors: FC<Props> = ({ colors }) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mt-2 flex gap-3">
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => setActive(index)}
          className="relative h-8 w-8 cursor-pointer rounded-full"
          style={{ backgroundColor: color }}
          title={color}
        >
          {active === index && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default AvialableColors;
