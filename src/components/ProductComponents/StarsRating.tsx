import { Star, StarHalf } from 'lucide-react';

interface Rating {
  rating: number;
}

const StarsRating = ({ rating }: Rating) => {
  rating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 === 0.5;
  // const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}

      {hasHalfStar && <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
    </div>
  );
};

export default StarsRating;
