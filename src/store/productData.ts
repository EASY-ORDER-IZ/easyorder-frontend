type ProductStatus = 'active' | 'draft' | 'archived';
import { img101, img102, img103, img104 } from '@/assets/icons';
type Product = {
  id: number;
  name: string;
  status: ProductStatus;
  price: string;
  services: number;
  createdAt: string;
  img: string;
};

export const products: Product[] = [
  {
    id: 1,
    img: img101,
    name: 'Laser Lemonade Machine',
    status: 'active',
    price: '$8,467.44',
    services: 29,
    createdAt: 'Aug 13, 2024 1:39 pm',
  },
  {
    id: 2,
    img: img102,
    name: 'Hypernova Headphones',
    status: 'active',
    price: '$1,987.48',
    services: 30,
    createdAt: 'Aug 11, 2024 7:47 am',
  },
  {
    id: 3,
    img: img103,
    name: 'AeroGlow Desk Lamp',
    status: 'archived',
    price: '$9,008.26',
    services: 34,
    createdAt: 'Jul 29, 2024 8:57 am',
  },
  {
    id: 4,
    img: img104,
    name: 'TechTonic Energy Drink',
    status: 'draft',
    price: '$1,865.75',
    services: 32,
    createdAt: 'Aug 9, 2024 1:43 pm',
  },
];
