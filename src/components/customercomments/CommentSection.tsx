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
      <div className="flex flex-row items-end justify-between px-6 py-10 lg:px-30">
        <h1 className="font-integral h-[72px] w-[268px] text-left text-[32px] leading-[36px] font-extrabold tracking-[1px] uppercase lg:h-[58px] lg:w-[654px] lg:text-[48px] lg:leading-[46px]">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex flex-row items-center gap-4">
          <Button
            variant="acc"
            onClick={handlePrev}
            size="icon"
            className="h-[24px] w-[24px] border-0"
          >
            <img src={leftarrow} alt="" className="h-[18px] w-[15px]" />
          </Button>
          <Button
            variant="acc"
            onClick={handleNext}
            size="icon"
            className="h-[24px] w-[24px] border-0"
          >
            <img src={rightarrow} alt="" className="h-[18px] w-[15px]" />
          </Button>
        </div>
      </div>

      <CarouselOrientation onReady={(api) => (carouselApi.current = api)} />
    </div>
  );
};

export default CommentSection;
