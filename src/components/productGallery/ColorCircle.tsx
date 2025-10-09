import React from 'react';

interface ColorProps {
  color: string;
  size?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ColorCircle: React.FC<ColorProps> = ({ color, size = '2', isActive = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer rounded-full border-2 ${isActive ? 'border-black' : 'border-transparent'}`}
      style={{
        backgroundColor: color,
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    >
      {isActive && (
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
  );
};

export default ColorCircle;
