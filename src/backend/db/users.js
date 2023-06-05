import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Aakarsha",
    lastName: "Shetty",
    email: "aakarshashetty@gmail.com",
    password: "aakarshashetty",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        id:uuid(),
        name: "Aakarsha shetty",
        street: "2-1-44/2, VS Nagar",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        zipCode: "550103",
        mobile: "123097997",
      }
    ]
  },
  {
    _id: uuid(),
    firstName: "Shashank",
    lastName: "Shetty",
    email: "shashankshetty@gmail.com",
    password: "shashank",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address:[
      {
        id:uuid(),
        name: "Shashank shetty",
        street: "2-1-44/2, VS Nagar",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        zipCode: "550103",
        mobile: "123097997",
      }
    ]
  },
];
