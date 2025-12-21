import CommentCard from './CommentCard';
import { reviews } from './CardData';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CommentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const arrowClass = 'flex h-6 w-6 items-center justify-center cursor-pointer';

  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  const goToPage = (index: number) => {
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-359 flex-col items-center gap-6">
        <h1 className="text-h1 text-text-400 font-poppins text-center font-extrabold tracking-[1px] capitalize">
          What Our Happy Users Say!
        </h1>

        <p className="text-text-400 font-poppins text-center">
          Smarter shopping, faster deals, and endless style — here's why FirstChance is your
          ultimate shopping destination.
        </p>

        <div className="w-full">
          <div className="no-scrollbar relative flex w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth p-4">
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className="flex min-w-[80%] flex-shrink-0 cursor-pointer snap-center flex-col gap-3 sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%]"
              >
                <CommentCard name={review.name} rating={review.rating} review={review.review} />
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button onClick={goPrev} className={arrowClass}>
              <ChevronLeft
                className="h-3 w-3 hover:text-[var(--color-primary-main)]"
                color="gray"
              />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[var(--color-primary-main)]' : 'bg-gray-300'
                }`}
              />
            ))}
            <button onClick={goNext} className={arrowClass}>
              <ChevronRight
                className="h-3 w-3 hover:text-[var(--color-primary-main)]"
                color="gray"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
