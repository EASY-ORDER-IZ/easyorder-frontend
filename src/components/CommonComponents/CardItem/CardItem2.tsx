import React from 'react';

interface cardProps {
  title: string;
  img: string;
  subtitle?: string;
}

const CardItem2: React.FC<cardProps> = ({
  title,
  img,
  subtitle = 'Subtitle here Subtitle here Subtitle here Subtitle here Subtitle here Subtitle here Subtitle here Subtitle here.',
}) => {
  return (
    <div className="relative h-96 w-[16.5rem] overflow-hidden rounded-[0.6rem] text-white shadow-lg md:h-80 md:w-[14.625rem] lg:h-96 lg:w-[16.5rem]">
      <img src={img} alt={title} className="absolute top-0 left-0 h-full w-full object-cover" />
      <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      <div className="absolute right-3 bottom-4 left-3 flex flex-col gap-1 md:right-2 md:bottom-2 md:left-2 md:gap-0.5">
        <h3 className="text-lg leading-snug font-semibold md:text-base lg:text-lg">{title}</h3>
        <p className="text-text-400 line-clamp-3 text-sm leading-snug md:text-xs lg:text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CardItem2;
