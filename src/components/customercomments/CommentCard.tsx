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
      <Card className="rounded-1xl border-text-400 bg-background-100 flex h-44 w-133 flex-col gap-4 border px-8 py-7 duration-300">
        <CardHeader className="m-0 p-0">
          <div className="flex items-center gap-1.5">
            <StarsRating rating={rating} className="size-4.5" />
          </div>
        </CardHeader>
        <div className="flex w-full flex-col gap-2">
          <CardTitle className="font-satoshi text-h4 leading-text-p m-0 p-0">
            <div className="flex items-center gap-1">
              <span className="text-list"> {name} </span>
              <div className="flex size-5 items-center justify-center rounded-full bg-[#00B140]">
                <Check size={12} className="text-white" strokeWidth={3} />
              </div>
            </div>
          </CardTitle>
          <CardDescription className="text-table-sm leading-text-h4 text-text-300">
            “{review}”
          </CardDescription>
        </div>
      </Card>
    </div>
  );
};

export default CommentCard;
