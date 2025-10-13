import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

import type { CartItem } from '@/types/Carttypes';

type Props = {
  item: CartItem;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onDelete: (id: number) => void;
};

const CartCard = ({ item, onIncrement, onDecrement, onDelete }: Props) => {
  return (
    <Card key={item.id} className="flex w-[330px] flex-row border-0 shadow-none lg:w-[667px]">
      <div>
        <img
          src={item.image}
          alt={item.title}
          className="w[99px] lg:w[124px] h-[99px] lg:h-[124px]"
        />
      </div>
      <div className="flex w-[231px] flex-col justify-between lg:w-[543px]">
        <div className="flex flex-col gap-[2px]">
          <CardHeader className="flex w-[231px] flex-row items-center justify-between pl-6 lg:w-[527px]">
            <CardTitle className=" ">
              <h2 className="text-[16px] font-bold lg:text-[20px]">{item.title}</h2>
            </CardTitle>
            <Button
              variant="ghost"
              size={'icon'}
              className="h-[24px] w-[24px] border-0"
              onClick={() => onDelete(item.id)}
            >
              <Trash2 className="h-[19px] w-[18px] text-red-500" />
            </Button>
          </CardHeader>
          <CardContent className="flex w-[67px] flex-col gap-1 lg:w-[78px]">
            <p className="text-list flex flex-row gap-1">
              Size: <span className="text-text-200 font-xs text-[14px]">{item.size}</span>
            </p>
            <p className="text-list flex flex-row gap-1">
              Color: <span className="text-text-200">{item.color}</span>
            </p>
          </CardContent>
        </div>
        <CardFooter className="flex w-full justify-between">
          <p className="text[20px] lg:text[24px] font-extrabold">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <div className="bg-background-main flex h-[31px] w-[105px] items-center justify-center gap-[20px] rounded-[62px] px-[20px] py-[14px] lg:h-[44px] lg:w-[128px] lg:py-[12px]">
            <Button
              size={'icon'}
              className="h-[20px] w-[16px] lg:h-[20px] lg:w-[16px]"
              variant="carticon"
              onClick={() => onDecrement(item.id)}
            >
              <Minus size={15} className="scale-[0.8] lg:scale-100" />
            </Button>
            <span className="w-6 text-center font-medium">{item.quantity}</span>
            <Button
              size={'icon'}
              className="h-[20px] w-[20px]"
              variant="carticon"
              onClick={() => onIncrement(item.id)}
            >
              <Plus size={15} className="scale-[0.8] lg:scale-100" />
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CartCard;
