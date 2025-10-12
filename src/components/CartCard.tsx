import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button/button';
import { Minus, Plus } from 'lucide-react';
import trash from '../assets/images/trash.png';

import type { CartItem } from '@/types/Carttypes';

type Props = {
  item: CartItem;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onDelete: (id: number) => void;
};

const CartCard = ({ item, onIncrement, onDecrement, onDelete }: Props) => {
  return (
    <Card key={item.id} className="w-[330px] lg:w-[667px] flex flex-row border-0 shadow-none ">
      <div>
        <img
          src={item.image}
          alt={item.title}
          className="w[99px] h-[99px] lg:w[124px] lg:h-[124px]"
        />
      </div>
      <div className="flex flex-col w-[231px] lg:w-[543px] justify-between">
        <div className="flex flex-col gap-[2px]">
          <CardHeader className="flex flex-row justify-between w-[231px] lg:w-[543px]">
            <CardTitle className=" ">
              <h2 className="font-bold text[16px] lg:text-[20px]">{item.title}</h2>
            </CardTitle>
            <Button
              variant="ghost"
              size={'icon'}
              className="w-[24px] h-[24px]"
              onClick={() => onDelete(item.id)}
            >
              <img src={trash} alt="Delete" className="w-[18px] h-[19px]" />
            </Button>
          </CardHeader>
          <CardContent className="w-[67px] lg:w-[78px] flex flex-col gap-1">
            <p className="text-[14px] flex flex-row gap-1">
              Size: <span className="text-text-200 font-xs text-[14px]">{item.size}</span>
            </p>
            <p className="text-[14px] flex flex-row gap-1">
              Color: <span className="text-text-200">{item.color}</span>
            </p>
          </CardContent>
        </div>
        <CardFooter className="flex justify-between">
          <p className="font-extrabold text[20px] lg:text[24px]">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <div className="w-[105px] lg:w-[128px] bg-text-50 rounded-[62px] flex gap-[20px] px-[20px] py-[14px] lg:py-[12px] h-[31px] lg:h-[44px] items-center justify-center">
            <Button
              size={'icon'}
              className="w-[16px] h-[20px] lg:w-[16px] lg:h-[20px]"
              onClick={() => onDecrement(item.id)}
            >
              <Minus size={15} className="lg:scale-100 scale-[0.8]" />
            </Button>
            <span className="w-6 text-center font-medium">{item.quantity}</span>
            <Button
              size={'icon'}
              className="w-[20px] h-[20px]"
              onClick={() => onIncrement(item.id)}
            >
              <Plus size={15} className="lg:scale-100 scale-[0.8]" />
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CartCard;
