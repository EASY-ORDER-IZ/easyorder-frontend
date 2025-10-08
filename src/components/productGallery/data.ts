import type { ImgHTMLAttributes } from 'react';

interface card {
  star: ImgHTMLAttributes<HTMLImageElement>;
  customerName: string;
  reviewDesc: string;
  date: string;
}

export const cards: card[] = [
  {
    star: { src: '/icons/star.svg', alt: '5 stars' },
    customerName: 'Sarah Johnson',
    reviewDesc:
      'Absolutely love this product! The quality is outstanding and it fits perfectly. I’ve already recommended it to all my friends because it’s that good.',
    date: '2025-09-14',
  },
  {
    star: { src: '/icons/star.svg', alt: '4 stars' },
    customerName: 'Michael Lee',
    reviewDesc:
      'Very comfortable and stylish. Shipping was fast too! The packaging was neat, and the material feels great on the skin.',
    date: '2025-09-12',
  },
  {
    star: { src: '/icons/star.svg', alt: '5 stars' },
    customerName: 'Emma Brown',
    reviewDesc:
      'Exceeded my expectations in both quality and comfort. The color hasn’t faded after several washes, which is impressive.',
    date: '2025-09-10',
  },
  {
    star: { src: '/icons/star.svg', alt: '3 stars' },
    customerName: 'David Kim',
    reviewDesc:
      'Good quality overall, but the sizing runs a bit small for me. Still, it looks really nice and feels decent when worn.',
    date: '2025-09-09',
  },
  {
    star: { src: '/icons/star.svg', alt: '5 stars' },
    customerName: 'Olivia Martinez',
    reviewDesc:
      'Perfect for everyday wear and super soft. The design stands out without being too flashy, and it matches with everything.',
    date: '2025-09-08',
  },
  {
    star: { src: '/icons/star.svg', alt: '4 stars' },
    customerName: 'Noah Wilson',
    reviewDesc:
      'Looks great and feels comfortable. The stitching is neat and strong, and it hasn’t lost shape after multiple uses.',
    date: '2025-09-06',
  },
  {
    star: { src: '/icons/star.svg', alt: '5 stars' },
    customerName: 'Sophia Anderson',
    reviewDesc:
      'Love the material and design. It feels light yet durable, and the fit is flattering without being too tight.',
    date: '2025-09-04',
  },
  {
    star: { src: '/icons/star.svg', alt: '4 stars' },
    customerName: 'Liam Smith',
    reviewDesc:
      'Solid purchase overall. The texture is nice and smooth, though I wish it came in more color options for variety.',
    date: '2025-09-03',
  },
  {
    star: { src: '/icons/star.svg', alt: '5 stars' },
    customerName: 'Isabella White',
    reviewDesc:
      'Fantastic quality and perfect fit. The print looks even better in person, and it feels really premium when worn.',
    date: '2025-09-01',
  },
  {
    star: { src: '/icons/star.svg', alt: '4 stars' },
    customerName: 'Ethan Davis',
    reviewDesc:
      'Feels nice and breathable. It’s great for warm weather, and the stitching shows real attention to detail.',
    date: '2025-08-30',
  },
  {
    star: { src: '/icons/star.svg', alt: '5 stars' },
    customerName: 'Ava Thompson',
    reviewDesc:
      'Amazing craftsmanship and exactly as described. I’ve received so many compliments whenever I wear it.',
    date: '2025-08-29',
  },
  {
    star: { src: '/icons/star.svg', alt: '3 stars' },
    customerName: 'James Garcia',
    reviewDesc:
      'Not bad overall, but I expected a thicker material. Still, it’s decent for casual wear and looks clean.',
    date: '2025-08-27',
  },
  {
    star: { src: '/icons/star.svg', alt: '5 stars' },
    customerName: 'Mia Rodriguez',
    reviewDesc:
      'Soft, stylish, and fits perfectly. I wore it all day and felt super comfortable — definitely buying more colors.',
    date: '2025-08-25',
  },
  {
    star: { src: '/icons/star.svg', alt: '4 stars' },
    customerName: 'Benjamin Clark',
    reviewDesc:
      'Very good quality for the price. It looks premium and feels like it will last for a long time with proper care.',
    date: '2025-08-24',
  },
  {
    star: { src: '/icons/star.svg', alt: '5 stars' },
    customerName: 'Charlotte Nguyen',
    reviewDesc:
      'My favorite shirt now! It’s soft, durable, and pairs well with jeans or shorts. Can’t recommend it enough.',
    date: '2025-08-22',
  },
];
