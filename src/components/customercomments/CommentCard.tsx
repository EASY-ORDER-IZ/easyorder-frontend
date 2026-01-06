import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

interface CommentCardProps {
  name: string;
  rating: number;
  review: string;
  reviewId?: string;
}

const CommentCard = ({ name, rating, review, reviewId }: CommentCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const maxLength = 100;
  const isLong = review.length > maxLength;
  const preview = isLong ? review.slice(0, maxLength) + '...' : review;

  const handleReadFull = () => {
    if (reviewId) navigate(`/reviews/${reviewId}`);
    else setExpanded(!expanded);
  };

  return (
    <div className="flex justify-center">
      <Card className="bg-background-400 flex h-auto min-h-31 w-74 flex-col gap-2 rounded-sm px-4 py-2 duration-300 sm:w-76 sm:px-6">
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

          <div className="flex items-center gap-2">
            <Rating readOnly value={rating} className="h-4 w-4" />

            {isLong && (
              <button
                onClick={handleReadFull}
                className="text-text-100 cursor-pointer text-xs underline"
              >
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
