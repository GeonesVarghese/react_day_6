import React from "react";

const withProducts = (Component) => {
  const products = [
    { name: "Product 1", price: 10, image: "product1.jpg" },
    { name: "Product 2", price: 20, image: "product2.jpg" },
    { name: "Product 3", price: 30, image: "product3.jpg" },
  ];
  
  return function WithProducts(props) {
    return <Component products={products} {...props} />;
  };
};

export default withProducts;