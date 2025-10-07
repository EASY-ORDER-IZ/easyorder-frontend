import CartCard from '@/components/CartCard';
import CartSummary from '@/components/CartSummary';
import type { CartItem } from '@/types/Carttypes';
import cartSummary from '@/utils/cartsummary';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useState, useMemo } from 'react';
import Footer from '@/components/footer/Footer';

const CartPage = () => {
  const [promo, setPromo] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: 'Classic Oversized Cotton T-Shirt',
      size: 'M',
      color: 'Beige',
      price: 39.99,
      quantity: 1,
      image: 'https://createfashionbrand.com/wp-content/uploads/2024/12/121-2.webp',
    },
    {
      id: 2,
      title: 'Slim Fit Denim Jeans',
      size: '32',
      color: 'Blue',
      price: 59.99,
      quantity: 1,
      image: 'https://createfashionbrand.com/wp-content/uploads/2024/12/121-2.webp',
    },
    {
      id: 3,
      title: 'Slim Fit Denim Jeans',
      size: '32',
      color: 'Blue',
      price: 59.99,
      quantity: 1,
      image: 'https://createfashionbrand.com/wp-content/uploads/2024/12/121-2.webp',
    },
    {
      id: 4,
      title: 'Slim Fit Denim Jeans',
      size: '32',
      color: 'Blue',
      price: 59.99,
      quantity: 1,
      image: 'https://createfashionbrand.com/wp-content/uploads/2024/12/121-2.webp',
    },
    {
      id: 5,
      title: 'Slim Fit Denim Jeans',
      size: '32',
      color: 'Blue',
      price: 59.99,
      quantity: 1,
      image: 'https://createfashionbrand.com/wp-content/uploads/2024/12/121-2.webp',
    },
  ]);

  const increment = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  };

  const decrement = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item,
      ),
    );
  };
  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const { subtotal, discount, delivery, total } = useMemo(
    () => cartSummary(cartItems, promo),
    [cartItems, promo],
  );

  return (
    <div className=" flex flex-col gap-8 w-full">
      <div className="px-4 lg:px-[100px] flex flex-col gap-4 w-full h-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-brand-text">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="font-integral font-bold  text-left text-[32px] lg:text-[40px] leading-[36px] lg:leading-[46px] w-[268px] lg:w-[654px] h-[72px] lg:h-[58px]">
          Your cart
        </h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-[385px] lg:w-[715px] flex flex-col gap-6 border rounded-[20px] p-4 lg:px-[24px] lg:py-[20px] left-[16px] border-border-cards">
            {cartItems.map((item, index) => (
              <div className="flex flex-col gap-4">
                <CartCard
                  key={item.id}
                  item={item}
                  onIncrement={increment}
                  onDecrement={decrement}
                  onDelete={removeItem}
                />
                {index !== cartItems.length - 1 && (
                  <div className="w-full flex justify-center lg:justify-start ">
                    <div className="w-[330px] lg:w-[667px] h-[1px] bg-[#0000001A] "></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <CartSummary
            subtotal={subtotal}
            discount={discount}
            delivery={delivery}
            total={total}
            promo={promo}
            onPromoChange={setPromo}
          />
        </div>
      </div>

      <div className="mt-30">
        <Footer />
      </div>
    </div>
  );
};
export default CartPage;
