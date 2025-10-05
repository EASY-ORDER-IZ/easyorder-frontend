import star from '../../assets/images/Starrev.png';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface CommentCardProps {
  name: string;
  rating: number;
  review: string;
}

const CommentCard = ({ name, rating, review }: CommentCardProps) => {
  return (
    <div className="flex justify-center">
      <Card className="w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px] border border-[#0000001A] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: rating }).map((_, i) => (
              <img
                key={i}
                src={star}
                alt="star"
                className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardTitle className="font-satoshi font-bold text-[18px] lg:text-[20px] leading-[22px] mb-2">
            {name}
          </CardTitle>
          <CardDescription className="text-[#00000099] text-[15px] lg:text-[16px] leading-[22px] italic">
            “{review}”
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentCard;
