import { Button } from '@/components/ui/button/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselOrientation } from './CarouselOrientation';
import { useState, useEffect } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';
import { reviews } from './CardData';

const CommentSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / cardsPerPage);

  const handlePrev = () => {
    carouselApi?.scrollPrev();
  };

  const handleNext = () => {
    carouselApi?.scrollNext();
  };

  useEffect(() => {
    if (!carouselApi) return;

    const updatePage = () => {
      const index = carouselApi.selectedScrollSnap();
      const newPage = Math.floor(index / cardsPerPage);
      setCurrentPage(newPage);
    };

    carouselApi.on('select', updatePage);
    updatePage();

    return () => {
      carouselApi.off('select', updatePage);
    };
  }, [carouselApi]);

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-359 flex-col items-center gap-6">
        <h1 className="text-h1 text-text-400 text-center font-extrabold tracking-[1px] capitalize">
          What Our Happy Users Say!
        </h1>

        <p className="text-h4 text-text-400 text-center">
          Smarter shopping, faster deals, and endless style — here’s why FirstChance is your
          ultimate shopping destination.
        </p>

        <CarouselOrientation onReady={setCarouselApi} />

        <div className="flex flex-row items-center justify-center gap-4">
          <Button
            onClick={handlePrev}
            variant={'acc'}
            suffixIcon={<ChevronLeft className="text-text-300" size={16} />}
          />
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  const targetIndex = i * cardsPerPage;
                  carouselApi?.scrollTo(targetIndex);
                }}
                className={`size-3 rounded-full transition-all duration-300 ${
                  currentPage === i ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            variant={'acc'}
            suffixIcon={<ChevronRight className="text-text-300" size={16} />}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
