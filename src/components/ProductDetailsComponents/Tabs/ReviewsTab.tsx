import React, { useState } from 'react';
import ReviewCard from '../ReviewComments/ReviewCard';
import { reviews } from '@/store/ReviewCardsData';
import { Button } from '@/components/ui/button/button';

const ReviewsTab = () => {
  const [showAll, setShowAll] = useState(reviews.length > 5 ? false : true);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 5);

  return (
    <div className="m-3 flex flex-col space-y-3 px-2 sm:space-y-4 sm:px-0">
      {displayedReviews.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.username}
          date={review.date}
          title={review.title}
          description={review.text}
          rating={review.rating}
        />
      ))}
      {!showAll && (
        <div className="self-center">
          <Button
            title="Show all reviews"
            variant="secondary"
            className="m-3 w-[13.5rem] rounded-full p-3"
            onClick={() => setShowAll(!showAll)}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewsTab;
