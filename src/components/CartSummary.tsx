import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button/button';
import { Input } from '@/components/ui/input';
import { Tag, ArrowRight } from 'lucide-react';

type Props = {
  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
  promo: string;
  onPromoChange: (code: string) => void;
};

export default function CartSummary({
  subtotal,
  discount,
  delivery,
  total,
  promo,
  onPromoChange,
}: Props) {
  return (
    <Card className="border-border-cards flex h-96 w-90 flex-col gap-5 rounded-[1.25rem] border-1 p-4 shadow-none lg:h-114 lg:w-128 lg:gap-6 lg:px-6 lg:py-5">
      <h2 className="text-5 lg:text-6 font-extrabold">Order Summary</h2>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between text-sm">
          <span className="text-brand-text">Subtotal</span>
          <span className="font-extrabold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-brand-text">Discount</span>
          <span className={`${discount ? 'font-extrabold text-[#FF3333]' : 'font-extrabold'}`}>
            -${discount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-brand-text">Delivery</span>
          <span className="font-extrabold">${delivery.toFixed(2)}</span>
        </div>
        <div className="flex w-full justify-center lg:justify-start">
          <div className="bg-border-cards h-[1px] w-[330px] lg:w-[667px]"></div>
        </div>
        <div className="font-sm flex justify-between text-base">
          <span>Total</span>
          <span className="font-extrabold">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:hidden">
        <div className="relative h-12 rounded-[62px]">
          <Tag size={18} className="text-text-200 -translate-y-1/3.2 absolute top-1/4 left-4" />
          <Input
            placeholder="Enter promo code"
            value={promo}
            variant="footer"
            onChange={(e) => onPromoChange(e.target.value)}
            className="bg-background-main placeholder:text-text-200 h-12 w-54 border-0 leading-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <Button variant="orderbutton" className="h-12 w-22 px-4 py-3">
          Apply
        </Button>
      </div>

      <Button variant={'orderbutton'} className="h-14 w-full px-14 py-4 lg:h-16">
        <div className="flex items-center justify-center gap-3">
          <span>Go to Checkout</span>
          <ArrowRight size={16} className="scale-[0.8] lg:scale-100" />
        </div>
      </Button>
    </Card>
  );
}
