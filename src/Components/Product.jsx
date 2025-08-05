// src/Components/Product.jsx

function Product({ product, onAddToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Hinta: {product.price} €</p>
      <button onClick={() => onAddToCart(product)}>Lisää ostoskoriin</button>
    </div>
  );
}

export default Product;
