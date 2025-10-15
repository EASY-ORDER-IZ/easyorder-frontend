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
    <Card key={item.id} className="flex w-82 flex-row border-0 shadow-none lg:w-167">
      <div>
        <img src={item.image} alt={item.title} className="size-25 lg:size-31" />
      </div>
      <div className="flex w-[70%] flex-col justify-between lg:w-[85%]">
        <div className="flex w-[80%] flex-col gap-0.5 sm:w-[96%]">
          <CardHeader className="flex flex-row items-center justify-between pl-6">
            <CardTitle className="m-0">
              <h2 className="text-h4 font-bold">{item.title}</h2>
            </CardTitle>
            <Button
              variant="ghost"
              size={'icon'}
              className="size-6 border-0"
              onClick={() => onDelete(item.id)}
            >
              <Trash2 size={19} className="scale-[0.8] text-red-500 lg:scale-100" />
            </Button>
          </CardHeader>
          <CardContent className="flex w-[80%] flex-col gap-1 sm:w-[96%]">
            <p className="text-list flex flex-row gap-1">
              Size: <span className="text-text-200 font-xs text-table-sm">{item.size}</span>
            </p>
            <p className="text-list flex flex-row gap-1">
              Color: <span className="text-text-200">{item.color}</span>
            </p>
          </CardContent>
        </div>
        <CardFooter className="flex w-[80%] justify-between sm:w-[100%]">
          <p className="text-h4 font-extrabold">${(item.price * item.quantity).toFixed(2)}</p>
          <div className="bg-background-main rounded-7xl flex h-8 w-26 items-center justify-center gap-5 px-5 py-4 lg:h-11 lg:w-32 lg:py-3">
            <Button
              size={'icon'}
              className="size-5"
              variant="carticon"
              onClick={() => onDecrement(item.id)}
            >
              <Minus size={15} className="scale-[0.8] lg:scale-100" />
            </Button>
            <span className="w-6 text-center font-medium">{item.quantity}</span>
            <Button
              size={'icon'}
              className="size-5"
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
