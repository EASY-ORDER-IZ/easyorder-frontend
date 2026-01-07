import { img101, img102, img103, img104 } from '../assets/icons';
interface card {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  priceBeforeDiscount?: number;
  rating: number;
  img: string;
  type: 'sale' | 'new';
  favourite?: boolean;
}

export const cardData: card[] = [
  {
    id: 1,
    title: 'T-shirt',
    subtitle: 'subtitle',
    price: 100,
    priceBeforeDiscount: 150,
    rating: 4,
    img: img101,
    type: 'sale',
    favourite: false,
  },

  {
    id: 2,
    title: 'T-shirt',
    subtitle: 'subtitle',
    price: 100,
    priceBeforeDiscount: 150,
    rating: 4,
    img: img102,
    type: 'new',
    favourite: false,
  },

  {
    id: 3,
    title: 'T-shirt',
    subtitle: 'subtitle',
    price: 100,
    priceBeforeDiscount: 150,
    rating: 4,
    img: img103,
    type: 'sale',
    favourite: false,
  },

  {
    id: 4,
    title: 'T-shirt',
    subtitle: 'subtitle',
    price: 100,
    priceBeforeDiscount: 150,
    rating: 4,
    img: img104,
    type: 'new',
    favourite: false,
  },

  {
    id: 5,
    title: 'T-shirt',
    subtitle: 'subtitle',
    price: 100,
    priceBeforeDiscount: 150,
    rating: 4,
    img: img103,
    type: 'sale',
    favourite: false,
  },

  {
    id: 6,
    title: 'T-shirt',
    subtitle: 'subtitle',
    price: 100,
    priceBeforeDiscount: 150,
    rating: 4,
    img: img102,
    type: 'new',
    favourite: false,
  },

  {
    id: 7,
    title: 'T-shirt',
    subtitle: 'subtitle',
    price: 100,
    priceBeforeDiscount: 150,
    rating: 4,
    img: img104,
    type: 'sale',
    favourite: false,
  },

  {
    id: 8,
    title: 'T-shirt',
    subtitle: 'subtitle',
    price: 100,
    priceBeforeDiscount: 150,
    rating: 4,
    img: img101,
    type: 'new',
    favourite: false,
  },
];
