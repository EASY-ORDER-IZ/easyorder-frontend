import React, { type FC } from 'react';

interface Props {
  colors: string[];
}

const AvialableColors: FC<Props> = ({ colors }) => {
  return (
    <div className="mt-2 flex gap-3">
      {colors.map((color, index) => (
        <div
          key={index}
          className="h-8 w-8 rounded-full"
          style={{ backgroundColor: color }}
          title={color}
        />
      ))}
    </div>
  );
};

export default AvialableColors;
