import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import StarsRating from '../ProductComponents/StarsRating';

interface CommentCardProps {
  name: string;
  rating: number;
  review: string;
}

const CommentCard = ({ name, rating, review }: CommentCardProps) => {
  return (
    <div className="flex justify-center">
      <Card className="border-border-cards rounded-1xl h-60 w-100 border px-8 py-7 duration-300">
        <CardHeader className="mb-3 p-0">
          <div className="flex items-center gap-1.5">
            <StarsRating rating={rating} className="size-5" />
          </div>
        </CardHeader>
        <div className="flex flex-col gap-3">
          <CardTitle className="font-satoshi text-h4 leading-text-p">
            <div className="flex items-center gap-1">
              {name}
              <div className="flex size-5 items-center justify-center rounded-full bg-[#00B140]">
                <Check size={12} className="text-white" strokeWidth={3} />
              </div>
            </div>
          </CardTitle>
          <CardDescription className="text-block-quote leading-text-h4 text-text-300">
            “{review}”
          </CardDescription>
        </div>
      </Card>
    </div>
  );
};

export default CommentCard;
