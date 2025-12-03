import React, { useState } from 'react';
import ReviewCard from '../ReviewComments/ReviewCard';
import { reviews } from '@/store/ReviewCardsData';
import { Button } from '@/components/ui/button/button';
import { Filter } from 'lucide-react';
import Select from '@/components/CommonComponents/Select';

const selectOptions = [
  {
    label: 'Latest',
    value: 'latest',
  },
  {
    label: 'Oldest',
    value: 'oldest',
  },
  {
    label: 'Highest Rated',
    value: 'highest-rated',
  },
];

const ReviewsTab = () => {
  const [showAll, setShowAll] = useState(reviews.length > 5 ? false : true);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 5);

  return (
    <div className="m-3 flex flex-col space-y-3 px-2 sm:space-y-4 sm:px-0">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-[30px]">All Reviews</h3>
          <span className="text-text-300 text-[24px]">({reviews.length})</span>
        </div>
        <div className="flex items-center gap-3">
          <Filter size={24} />
          <Select placeholder="Latest" data={selectOptions} className="border-0 text-[18px]" />
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default ReviewsTab;
