// src/Components/ProductList.jsx

import Product from "./Product";

const products = [
  { id: 1, name: "Sony A80L 55 4K OLED", price: 1200.0 },
  { id: 2, name: "Apple iPhone 15 128 Gt -phone, Black", price: 699.0 },
  { id: 3, name: "Apple MacBook Pro 14", price: 1999.0 },
];

function ProductList({ onAddToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
