import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import CardItem from './CardItem';
import { cardData } from '../../../store/CardData';

const randomArray = <T,>(array: T[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const CardSlider: React.FC = () => {
  const random = useMemo(() => {
    return randomArray(cardData).slice(0, 4);
  });

  return (
    <div className="relative h-96 w-[15.5rem]">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="custom-pagination h-full w-full overflow-hidden rounded-[0.6rem]"
      >
        {random.map((card, index) => (
          <SwiperSlide key={index}>
            <CardItem
              title={card.title}
              img={card.img}
              price={card.price}
              rating={card.rating}
              discount={card.priceBeforeDiscount}
              sale={card.type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
