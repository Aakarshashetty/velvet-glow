import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Women",
    img: "images/categoryWomen.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Men",
    img: "images/categoryMen.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Mom & Baby",
    img: "images/categoryMomAndBaby.jpg",
  },
];
