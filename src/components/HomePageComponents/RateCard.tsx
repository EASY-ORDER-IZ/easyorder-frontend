import { Check } from 'lucide-react';
import { Badge } from '../ui/badge';
import StarsRating from '../ProductComponents/StarsRating';
import { Link } from 'react-router';

interface Props {
  id: number;
  name: string;
  comment: string;
  rate: number;
}
const RateCard = ({ name, comment, rate }: Props) => {
  return (
    <div className="bg-background-card flex w-full flex-col gap-1 rounded-sm p-4">
      <div className="flex w-full items-center gap-1">
        <span className="button-text">{name}</span>
        <div>
          <Badge variant="success">
            <Check className="text-background" size={20} />
          </Badge>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <span className="text-text-secondary text-sm leading-5">{comment} </span>
        <div className="flex w-full gap-4">
          <div className="flex w-full justify-between">
            <StarsRating rating={rate} />
            <Link to={'/'} className="link-text">
              Read full review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
