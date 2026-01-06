import React, { useMemo, useState } from 'react';
import ReviewCard from '../ReviewComments/ReviewCard';
import { Button } from '@/components/ui/button/button';
import { ListFilter } from 'lucide-react';
import Select from '@/components/CommonComponents/Select';

const selectOptions = [
  { label: 'Latest', value: 'latest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Highest Rated', value: 'highest-rated' },
];

interface Review {
  id: number;
  name: string;
  comment: string;
  rate: number;
  date?: string;
}

interface ReviewsTabProps {
  reviews: Review[];
}

const ReviewsTab: React.FC<ReviewsTabProps> = ({ reviews }) => {
  const [showAll, setShowAll] = useState(reviews.length <= 5);
  const [filter, setFilter] = useState<string>('latest');

  const filteredReviews = useMemo(() => {
    let sorted = [...reviews];

    if (filter === 'oldest') sorted = [...reviews].reverse();
    if (filter === 'highest-rated') sorted = [...reviews].sort((a, b) => b.rate - a.rate);

    return sorted;
  }, [filter, reviews]);

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 5);

  return (
    <div className="m-3 flex flex-col space-y-3 px-2 sm:space-y-4 sm:px-0">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-[30px]">All Reviews</h3>
          <span className="text-text-300 text-[24px]">({filteredReviews.length})</span>
        </div>

        <div className="flex items-center gap-3">
          <ListFilter size={24} />
          <Select
            placeholder="Latest"
            data={selectOptions}
            value={filter}
            onValueChange={setFilter}
            className="w-[100px] border-0 bg-white text-[18px]"
          />
        </div>
      </div>

      <div>
        {displayedReviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            description={review.comment}
            rating={review.rate}
          />
        ))}

        {!showAll && (
          <div className="self-center">
            <Button
              title="Show all reviews"
              variant="secondary"
              className="m-3 w-[13.5rem] rounded-full p-3"
              onClick={() => setShowAll(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsTab;
