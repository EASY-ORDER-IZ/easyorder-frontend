import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';
import star from '../../assets/images/Starrev.png';
import Verified from '../../assets/images/verificationimg.png';

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  date: string;
}

const ReviewCard = ({ name, rating, review, date }: ReviewCardProps) => {
  return (
    <div className="m-2 rounded-md">
      <Card className="h-[15.1rem] w-[38rem] rounded-3xl border border-gray-200 p-6">
        <CardHeader>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src={star}
                alt="star"
                className={`h-[1.125rem] w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem] ${
                  i < rating ? 'opacity-100' : 'opacity-30'
                }`}
              />
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">{name}</span>
            <div className="flex items-center gap-1">
              <img src={Verified} alt="Verified" />
            </div>
          </div>

          <div className="text-text-300 leading-relaxed">{review}</div>
        </CardContent>

        <CardFooter>
          <span className="text-text-300 text-sm">{date}</span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ReviewCard;
