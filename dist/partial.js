"use strict";
const products = [
    {
        // Let's just simply assume product id is same as the index of the product in the products array
        id: 0,
        name: "Sample Product",
        price: 49.99,
        description: "A sample product for demonstration",
    },
];
function updateProduct(productId, updatedValues) {
    // Your implementation here:
    // Find product to update by productId
    // If found, apply partial update with using object spreading
    // Else log out "Product not found"
    const product = products.find((product) => product.id === productId);
    if (product) {
        products[product.id] = Object.assign(Object.assign({}, product), updatedValues);
    }
    else {
        console.log("Product not found");
    }
}
console.log(products);
updateProduct(0, {
    name: "Updated Product Name",
    price: 99.99,
});
console.log(products);
