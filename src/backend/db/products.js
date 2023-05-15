import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Lipstick",
    brand: "Maybelline",
    category: "Lips",
    description: "A long-lasting, creamy lipstick in a variety of shades.",
    price: 10.99,
    image: "https://example.com/lipstick.jpg",
    reviews: [
      {
        username: "User1",
        rating: 4,
        comment: "I love this lipstick! The color is perfect for me.",
      },
      {
        username: "User2",
        rating: 5,
        comment: "This is the best lipstick I have ever used.",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Mascara",
    brand: "L'Oreal",
    category: "Eyes",
    description: "A volumizing mascara that adds length and definition.",
    price: 12.99,
    image: "https://example.com/mascara.jpg",
    reviews: [
      {
        username: "User3",
        rating: 3,
        comment: "This mascara is good, but it smudges easily.",
      },
      {
        username: "User4",
        rating: 4,
        comment: "I like the way this mascara makes my lashes look.",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Foundation",
    brand: "MAC",
    category: "Face",
    description: "A full-coverage foundation that lasts all day.",
    price: 25.99,
    image: "https://example.com/lipstick.jpg",
    reviews: [
      {
        username: "User5",
        rating: 5,
        comment: "This foundation is amazing! It covers all my blemishes.",
      },
      {
        username: "User6",
        rating: 2,
        comment: "I didn't like this foundation. It made my skin look oily.",
      },
    ],
  },
];
