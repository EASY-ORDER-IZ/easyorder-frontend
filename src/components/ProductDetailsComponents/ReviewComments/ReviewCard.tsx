import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheck } from 'lucide-react';
import CustomRating from '@/components/ui/CustomRating';

interface ReviewCardProps {
  name: string;
  date: string;
  title: string;
  description: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, date, title, description, rating }) => {
  return (
    <Card className="mt-3 rounded-md bg-[#FCFBFA] p-3 sm:p-4">
      <CardHeader className="p-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base">{name}</span>
            <CircleCheck color="green" width={15} height={15} />
          </div>
          <CustomRating value={rating} readOnly />
        </div>
        <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-sm sm:text-base">{title}</CardTitle>
          <span className="text-text-400 text-xs sm:text-sm">{date}</span>
        </div>
      </CardHeader>
      <CardDescription className="mt-4 text-sm sm:text-base">{description}</CardDescription>
    </Card>
  );
};

export default ReviewCard;
