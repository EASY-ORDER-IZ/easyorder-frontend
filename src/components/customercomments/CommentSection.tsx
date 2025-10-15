import { Button } from '@/components/ui/button/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[1240px]">
        <div className="flex flex-row items-end justify-between px-6 py-10 lg:px-0">
          <h1 className="font-integral text-h1 leading-h1 text-left font-extrabold tracking-[1px] uppercase">
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="flex flex-row items-center gap-4">
            <Button variant="acc" onClick={handlePrev} size="icon">
              <ArrowLeft size={16} />
            </Button>
            <Button variant="acc" onClick={handleNext} size="icon">
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        <CarouselOrientation onReady={(api) => (carouselApi.current = api)} />
      </div>
    </div>
  );
};
export default CommentSection;
