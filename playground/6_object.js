// object property shorthand
const name = "Vanshika";
const userAge = 21;
const user = {
  name, //shorthand property
  age: userAge,
  location: "Bhopal",
};
console.log(user);

//object destructuring
//access property from an object
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 3,
};

//destructuring
//traditional way -miltiple line , if many items
//  const label =product.label

// const {
//   label,
//   price,
//   stock,
//   salePrice,
//   costPrice: cost = [],
//   rating,
// } = product;
// console.log(label);
// console.log(stock);
// console.log(cost);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};
transaction("order");
