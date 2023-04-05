import React from "react";
import withProducts from "./WithProductList";

function ProductList({ products }) {
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{`$${product.price}`}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  const ProductListWithProducts = withProducts(ProductList);
  export default ProductListWithProducts;