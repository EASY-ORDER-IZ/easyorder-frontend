import { Button } from '@/components/ui/button/button';
import leftarrow from '../../assets/images/arrow-left.png';
import rightarrow from '../../assets/images/arrow-right.png';
import { CarouselOrientation } from './CarouselOrientation';
import { useRef } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

const CommentSection = () => {
  const carouselApi = useRef<CarouselApi | null>(null);

  const handlePrev = () => {
    carouselApi.current?.scrollPrev();
  };

  const handleNext = () => {
    carouselApi.current?.scrollNext();
  };

  return (
    <div>
      <div className="flex flex-row items-end justify-between px-6 lg:px-30 py-10">
        <h1 className="font-integral font-extrabold uppercase tracking-[1px] text-left text-[32px] lg:text-[48px] leading-[36px] lg:leading-[46px] w-[268px] lg:w-[654px] h-[72px] lg:h-[58px]">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex flex-row items-center gap-4">
          <Button onClick={handlePrev} size="icon" className="w-[24px] h-[24px]">
            <img src={leftarrow} alt="" className="w-[15px] h-[18px]" />
          </Button>
          <Button onClick={handleNext} size="icon" className="w-[24px] h-[24px]">
            <img src={rightarrow} alt="" className="w-[15px] h-[18px]" />
          </Button>
        </div>
      </div>

      <CarouselOrientation onReady={(api) => (carouselApi.current = api)} />
    </div>
  );
};

export default CommentSection;
