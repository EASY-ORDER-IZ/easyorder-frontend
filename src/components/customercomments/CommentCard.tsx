import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import StarsRating from '../ProductComponents/StarsRating';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CommentCardProps {
  name: string;
  rating: number;
  review: string;
  reviewId?: string; // optional if you have unique review pages
}

const CommentCard = ({ name, rating, review, reviewId }: CommentCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  // Limit review preview length
  const maxLength = 100;
  const isLong = review.length > maxLength;
  const preview = isLong ? review.slice(0, maxLength) + '...' : review;

  const handleReadFull = () => {
    if (reviewId) navigate(`/reviews/${reviewId}`);
    else setExpanded(!expanded);
  };

  return (
    <div className="flex justify-center">
      <Card className="bg-background-400 flex h-auto min-h-31 w-76 flex-col gap-2 rounded-sm px-6 py-2 duration-300">
        <CardHeader className="m-0 p-0">
          <CardTitle className="m-0 p-0">
            <div className="flex items-center gap-1">
              <span className="text-list text-text-600">{name}</span>
              <div className="flex size-5 items-center justify-center rounded-full bg-[#00B140]">
                <Check size={12} className="text-white" strokeWidth={3} />
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <div className="flex w-full flex-col gap-4">
          <CardDescription className="text-text-300 text-xs">
            “{expanded ? review : preview}”
          </CardDescription>

          <div className="flex items-center justify-between">
            <StarsRating rating={rating} className="size-3" />

            {isLong && (
              <button onClick={handleReadFull} className="text-xs text-[#306570] underline">
                Read full review
              </button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CommentCard;
