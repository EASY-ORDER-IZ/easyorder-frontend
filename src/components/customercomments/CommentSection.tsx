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
    <div>
      <div className="flex flex-row items-end justify-between px-6 py-10 lg:px-30">
        <h1 className="font-integral text-h2 leading-h2 lg:text-h1 lg:leading-h1 text-left font-extrabold tracking-[1px] uppercase">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex flex-row items-center gap-4">
          <Button variant="acc" onClick={handlePrev} size="icon" className="h-6 w-6 border-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="acc" onClick={handleNext} size="icon" className="h-6 w-6 border-0">
            <ArrowRight className="*: h-4 w-4" />
          </Button>
        </div>
      </div>

      <CarouselOrientation onReady={(api) => (carouselApi.current = api)} />
    </div>
  );
};

export default CommentSection;
