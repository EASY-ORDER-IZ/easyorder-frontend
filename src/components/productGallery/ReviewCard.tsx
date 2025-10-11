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
    <Card className="h-full rounded-3xl border border-gray-200 p-6 transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={star}
              alt="star"
              className={`h-4 w-4 md:h-5 md:w-5 ${
                i < rating ? 'opacity-100' : 'opacity-30'
              }`}
            />
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-grow space-y-4 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold md:text-lg">{name}</span>
          <img src={Verified} alt="Verified" className="h-4 w-4" />
        </div>

        <div className="text-text-300 line-clamp-4 leading-relaxed">
          {review}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <span className="text-text-300 text-sm">{date}</span>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;