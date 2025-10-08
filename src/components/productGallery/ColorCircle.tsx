import React from 'react';

interface ColorProps {
  color: string;
  size?: string; // in rem
  isActive?: boolean;
  onClick?: () => void;
}

const ColorCircle: React.FC<ColorProps> = ({ color, size = '2', isActive = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-full cursor-pointer border-2 
        ${isActive ? 'border-black' : 'border-transparent'}`}
      style={{
        backgroundColor: color,
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    />
  );
};

export default ColorCircle;
