// src/Components/ShoppingCart.jsx

function Cart({ items, onRemove }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Ostoskori</h2>
      {items.length === 0 ? (
        <p>Ostoskori on tyhjä.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} ({item.price} €/kpl)
              <button onClick={() => onRemove(item.id)}>Remove one</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Yhteensä: {total.toFixed(2)} €</h3>
    </div>
  );
}

export default Cart;
