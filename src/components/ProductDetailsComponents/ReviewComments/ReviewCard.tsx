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
    <Card className="mt-3 rounded-md bg-[#FCFBFA] p-3">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span>{name}</span>
            <CircleCheck color="green" width={15} height={15} />
          </div>
          <CustomRating value={rating} readOnly />
        </div>
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          <span className="text-text-400 text-sm">{date}</span>
        </div>
      </CardHeader>
      <CardDescription className="mt-4">{description}</CardDescription>
    </Card>
  );
};

export default ReviewCard;
