'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { reviews } from './CardData';
import CommentCard from './CommentCard';

interface CarouselOrientationProps {
  onReady?: (api: CarouselApi) => void;
}

export function CarouselOrientation({ onReady }: CarouselOrientationProps) {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);

  React.useEffect(() => {
    if (api && onReady) onReady(api);
  }, [api, onReady]);

  const handleSetApi = React.useCallback(
    (emblaApi: CarouselApi) => {
      setApi(emblaApi);
      onReady?.(emblaApi);
    },
    [onReady],
  );

  return (
    <div className="relative flex w-full items-center justify-center">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        setApi={handleSetApi}
        className="relative w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="basis-[90%] pl-2 sm:basis-[45%] md:basis-[28%] md:pl-4"
            >
              <div className="w-full">
                <CommentCard name={review.name} rating={review.rating} review={review.review} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[70px] bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[1.5px] sm:block"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[70px] bg-gradient-to-l from-white/30 to-transparent backdrop-blur-[1.5px] sm:block"></div>
    </div>
  );
}
