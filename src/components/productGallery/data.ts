// src/data/reviews.ts

export interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
  date: string; 
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    review:
      "Absolutely love this product! The quality is outstanding and it fits perfectly. I’ve already recommended it to all my friends because it’s that good. From the packaging to the material, everything feels premium. This is easily one of the best purchases I've made this year.",
    rating: 5,
    date: '2025-09-14',
  },
  {
    id: 2,
    name: 'Michael Lee',
    review:
      "Very comfortable and stylish. Shipping was fast too! The packaging was neat, and the material feels great on the skin. It feels like it was designed with care. I’ve worn it multiple times now, and it still looks brand new after washing.",
    rating: 4,
    date: '2025-09-12',
  },
  {
    id: 3,
    name: 'Emma Brown',
    review:
      "Exceeded my expectations in both quality and comfort. The color hasn’t faded after several washes, which is impressive. The stitching is strong and the fabric feels breathable. I’m genuinely impressed by the attention to detail in this piece.",
    rating: 5,
    date: '2025-09-10',
  },
  {
    id: 4,
    name: 'David Kim',
    review:
      "Good quality overall, but the sizing runs a bit small for me. Still, it looks really nice and feels decent when worn. If you’re between sizes, I recommend sizing up. Apart from that, the build and design are excellent.",
    rating: 3,
    date: '2025-09-09',
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    review:
      "Perfect for everyday wear and super soft. The design stands out without being too flashy, and it matches with everything. I’ve been wearing it non-stop, and it hasn’t lost its shape or comfort. Definitely worth every penny.",
    rating: 5,
    date: '2025-09-08',
  },
  {
    id: 6,
    name: 'Noah Wilson',
    review:
      "Looks great and feels comfortable. The stitching is neat and strong, and it hasn’t lost shape after multiple uses. The fabric breathes well and works great even in warmer weather. This is now a staple in my wardrobe.",
    rating: 4,
    date: '2025-09-06',
  },
  {
    id: 7,
    name: 'Sophia Anderson',
    review:
      "Love the material and design. It feels light yet durable, and the fit is flattering without being too tight. The color options are also fantastic — I ended up buying two more after my first order. Great quality through and through.",
    rating: 5,
    date: '2025-09-04',
  },
  {
    id: 8,
    name: 'Liam Smith',
    review:
      "Solid purchase overall. The texture is nice and smooth, though I wish it came in more color options for variety. Other than that, the quality is fantastic and it works well in both casual and semi-formal settings.",
    rating: 4,
    date: '2025-09-03',
  },
  {
    id: 9,
    name: 'Isabella White',
    review:
      "Fantastic quality and perfect fit. The print looks even better in person, and it feels really premium when worn. You can tell a lot of thought went into the design, from the cut to the fabric choice.",
    rating: 5,
    date: '2025-09-01',
  },
  {
    id: 10,
    name: 'Ethan Davis',
    review:
      "Feels nice and breathable. It’s great for warm weather, and the stitching shows real attention to detail. I’ve worn it several times and it hasn’t shown any signs of wear. Really happy with this find!",
    rating: 4,
    date: '2025-08-30',
  },
  {
    id: 11,
    name: 'Ava Thompson',
    review:
      "Amazing craftsmanship and exactly as described. I’ve received so many compliments whenever I wear it. The durability and feel are unmatched at this price point. This brand has quickly become a go-to for me.",
    rating: 5,
    date: '2025-08-29',
  },
  {
    id: 12,
    name: 'James Garcia',
    review:
      "Not bad overall, but I expected a thicker material. Still, it’s decent for casual wear and looks clean. The colors stay vibrant and it hasn’t shrunk in the wash. Worth considering if you’re looking for something simple and stylish.",
    rating: 3,
    date: '2025-08-27',
  },
  {
    id: 13,
    name: 'Mia Rodriguez',
    review:
      "Soft, stylish, and fits perfectly. I wore it all day and felt super comfortable — definitely buying more colors. This is the kind of item you end up reaching for again and again. A true staple!",
    rating: 5,
    date: '2025-08-25',
  },
  {
    id: 14,
    name: 'Benjamin Clark',
    review:
      "Very good quality for the price. It looks premium and feels like it will last for a long time with proper care. I’ve already ordered two more as gifts. Can’t go wrong with this one.",
    rating: 4,
    date: '2025-08-24',
  },
  {
    id: 15,
    name: 'Charlotte Nguyen',
    review:
      "My favorite shirt now! It’s soft, durable, and pairs well with jeans or shorts. Can’t recommend it enough. I’m thrilled with how versatile and well-made this is. I’ll be coming back for more.",
    rating: 5,
    date: '2025-08-22',
  },
];
