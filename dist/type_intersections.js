"use strict";
// // with type intersections
// type Product = {
//   name: string;
//   price: number;
// };
// type Shipping = {
//   weight: number;
//   shippingCost: number;
// };
// // type ShippableProduct = Product & Shipping;
// // const item: ShippableProduct = {
// //   name: "Table",
// //   price: 100,
// //   weight: 20,
// //   shippingCost: 30,
// // };
// // now with extending interfaces
// // types can be extended by interfaces
// interface ShippableProduct extends Product, Shipping {};
// const item: ShippableProduct = {
//   name: "Table",
//   price: 100,
//   weight: 20,
//   shippingCost: 30,
// };
