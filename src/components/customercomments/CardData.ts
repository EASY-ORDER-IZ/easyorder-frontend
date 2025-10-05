// src/data/reviews.ts

export interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah M.',
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Alex K.',
    review:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
    rating: 5,
  },
  {
    id: 3,
    name: 'James L.',
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Monica R.',
    review:
      'The delivery was quick and the clothes look even better in person! I’ll definitely be shopping here again.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ryan S.',
    review:
      'Customer service was fantastic — they helped me pick the right size and it fits perfectly!',
    rating: 4,
  },
];
