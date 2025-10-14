import React, { useState, useMemo } from 'react';
import { reviews } from './data';
import ReviewCard from './ReviewCard';
import { Button } from '../ui/button/button';
import ReviewsFilters from './ReviewsFilters';
import useMobile from '@/hooks/useMobile';
const Reviews = () => {
  const [showAll, setShowAll] = useState(false);
  const [sortOption, setSortOption] = useState<'latest' | 'oldest' | 'top'>('latest');
  const isMobile = useMobile(768);

  const sortedReviews = useMemo(() => {
    const sorted = [...reviews];
    switch (sortOption) {
      case 'latest':
        return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'oldest':
        return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'top':
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }, [sortOption]);

  const initialMobileCount = 3;
  const initialDesktopCount = 6;

  const displayedReviews = showAll
    ? sortedReviews
    : sortedReviews.slice(0, isMobile ? initialMobileCount : initialDesktopCount);

  const canShowButton =
    reviews.length >
    (isMobile ? initialMobileCount : initialDesktopCount);

  return (
    <div className="flex flex-col items-center space-y-8">
      <ReviewsFilters
        count={reviews.length}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {displayedReviews.map((review) => (
            <div key={review.id} className="flex">
              <ReviewCard
                name={review.name}
                rating={review.rating}
                review={review.review}
                date={review.date}
              />
            </div>
          ))}
        </div>
      </div>

      {canShowButton && (
        <Button
          onClick={() => setShowAll(!showAll)}
          className="cursor-pointer px-8 py-4 font-semibold text-text-300 hover:bg-gray-50 hover:opacity-80 md:px-12 md:py-6 md:text-xl"
        >
          {showAll ? 'Load Less' : 'Load More Reviews'}
        </Button>
      )

      }
    </div>
  );
};

export default Reviews;