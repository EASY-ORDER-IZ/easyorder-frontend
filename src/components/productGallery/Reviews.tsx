import React, { useState, useMemo } from 'react';
import { reviews } from './data';
import ReviewCard from './ReviewCard';
import { Button } from '../ui/button/button';
import ReviewsFilters from './ReviewsFilters';

const Reviews = () => {
  const [showAll, setShowAll] = useState(false);
  const [sortOption, setSortOption] = useState<'latest' | 'oldest' | 'top'>('latest');

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

  const displayedReviews = showAll ? sortedReviews : sortedReviews.slice(0, 6);

  return (
    <div className="flex flex-col items-center space-y-8">
      <ReviewsFilters
        count={reviews.length}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <div className="mb-6 grid w-6xl w-full grid-cols-1 gap-12 md:grid-cols-2">
        {displayedReviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            review={review.review}
            date={review.date}
          />
        ))}
      </div>

      {reviews.length > 6 && (
        <Button
          onClick={() => setShowAll(!showAll)}
          className="cursor-pointer bg-white py-17 text-xl hover:opacity-70"
        >
          {showAll ? 'Load Less' : 'Load More Reviews'}
        </Button>
      )}
    </div>
  );
};

export default Reviews;
