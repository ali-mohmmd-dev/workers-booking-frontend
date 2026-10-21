import { popular } from "./services";

// Seeded ratings for the demo catalog; replace with aggregated reviews from the API.
const reviews = [
  { index: 0, rating: 4.9, reviews: 128 },
  { index: 3, rating: 4.9, reviews: 96 },
  { index: 1, rating: 4.8, reviews: 84 },
  { index: 5, rating: 4.8, reviews: 76 },
  { index: 2, rating: 4.7, reviews: 72 },
  { index: 4, rating: 4.7, reviews: 54 },
];

export const mostRatedServices = reviews.map(({ index, rating, reviews }) => ({ service: popular[index], rating, reviews }));
