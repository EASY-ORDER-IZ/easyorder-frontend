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
    <Card className="w-90 lg:w-128 h-96 lg:h-114 rounded-16 border-border-cards p-4 lg:py-5 lg:px-6 flex flex-col gap-4 lg:gap-6">
      <h2 className="font-extrabold text-5 lg:text-6">Order Summary</h2>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between text-sm ">
          <span className="text-brand-text">Subtotal</span>
          <span className="font-extrabold ">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm ">
          <span className="text-brand-text">Discount</span>
          <span className={`${discount ? 'text-[#FF3333] font-extrabold' : 'font-extrabold'}`}>
            -${discount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-brand-text">Delivery</span>
          <span className="font-extrabold ">${delivery.toFixed(2)}</span>
        </div>
        <div className="w-full flex justify-center lg:justify-start ">
          <div className="w-[330px] lg:w-[667px] h-[1px] bg-border-cards "></div>
        </div>
        <div className="flex justify-between font-sm text-base">
          <span>Total</span>
          <span className="font-extrabold ">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex items-center gap-4  lg:hidden">
        <div className=" relative h-12 rounded-[62px] ">
          <Tag size={18} className="text-[#00000066] absolute left-4 top-1/4 -translate-y-1/3.2 " />
          <Input
            placeholder="Enter promo code"
            value={promo}
            onChange={(e) => onPromoChange(e.target.value)}
            className="w-54 h-12 border-0 bg-[#F0F0F0] placeholder:text-[#00000066] focus-visible:ring-0 focus-visible:ring-offset-0 leading-none"
          />
        </div>
        <Button variant="orderbutton" className="w-22 h-12 px-4 py-3">
          Apply
        </Button>
      </div>

      <Button variant={'orderbutton'} className="w-full px-14 py-4 h-14 lg:h-16 ">
        <div className="flex items-center gap-3 justify-center">
          <span>Proceed to Checkout</span>
          <ArrowRight size={16} className="lg:scale-100 scale-[0.8]" />
        </div>
      </Button>
    </Card>
  );
}
