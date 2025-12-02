import React from 'react';
import ReviewCard from '../ReviewComments/ReviewCard';
import { reviews } from '@/store/ReviewCardsData';

const ReviewsTab = () => {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.username}
          date={review.date}
          title={review.title}
          description={review.text}
          rating={review.rating}
        />
      ))}
    </div>
  );
};

export default ReviewsTab;
