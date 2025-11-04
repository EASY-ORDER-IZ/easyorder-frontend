import { Star, StarHalf } from 'lucide-react';

interface Rating {
  rating: number;
  className?: string;
}

const StarsRating = ({ rating, className }: Rating) => {
  rating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 === 0.5;
  // const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex gap-1.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          size={12}
          key={`full-${i}`}
          className={`${className} fill-status-warning text-status-warning`}
        />
      ))}

      {hasHalfStar && <StarHalf size={12} className="fill-status-warning text-status-warning" />}
    </div>
  );
};

export default StarsRating;
