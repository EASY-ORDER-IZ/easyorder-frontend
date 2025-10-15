import CartCard from '@/components/CartCard';
import CartSummary from '@/components/CartSummary';
import type { CartItem } from '@/types/Carttypes';
import cartSummary from '@/utils/cartsummary';
import { useState, useMemo } from 'react';
import BreadCrumbComponent from '@/components/FilterComponents/BreadCrumb';

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

  // ===========================
  // Quantity Controls
  // ===========================
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

  // ===========================
  // Cart Summary
  // ===========================
  const { subtotal, discount, delivery, total } = useMemo(
    () => cartSummary(cartItems, promo),
    [cartItems, promo],
  );

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex h-full w-full flex-col gap-4 px-25">
        <BreadCrumbComponent cate="cart" />

        <h1 className="font-integral text-h2 leading-h1 text-left font-bold">Your cart</h1>

        <div className="flex flex-col gap-5 lg:flex-row">
          {/* Cart Items */}
          <div className="border-border-cards rounded-1xl left-4 flex w-89.5 flex-col gap-6 border p-4 lg:w-179 lg:px-6 lg:py-5">
            {cartItems.map((item, index) => (
              <div key={item.id} className="flex flex-col gap-4">
                <CartCard
                  item={item}
                  onIncrement={increment}
                  onDecrement={decrement}
                  onDelete={removeItem}
                />
                {index !== cartItems.length - 1 && (
                  <div className="flex w-full justify-center lg:justify-start">
                    <div className="bg-background-main h-[1px] w-[96%]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary */}
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
    </div>
  );
};

export default CartPage;
