import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Verified from '../../assets/images/verificationimg.png';
import StarsRating from '../ProductComponents/StarsRating';

interface CommentCardProps {
  name: string;
  rating: number;
  review: string;
}

const CommentCard = ({ name, rating, review }: CommentCardProps) => {
  return (
    <div className="flex justify-center">
      <Card className="rounded-6 h-[240px] w-[358px] border border-[#0000001A] px-8 py-7 duration-300 sm:w-[400px]">
        <CardHeader className="mb-3 p-0">
          <div className="flex items-center gap-1.5">
            <StarsRating
              rating={rating}
              className="h-[19px] w-[19px] lg:h-[22.5px] lg:w-[22.5px]"
            />
          </div>
        </CardHeader>
        <div>
          <CardTitle className="font-satoshi text-[18px] leading-[22px] font-bold lg:text-[20px]">
            <div className="flex items-center gap-1">
              {name}
              <img src={Verified} alt="" />
            </div>
          </CardTitle>
          <CardDescription className="text-[16px] leading-[22px] text-[#00000099]">
            “{review}”
          </CardDescription>
        </div>
      </Card>
    </div>
  );
};

export default CommentCard;
