import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const isEmpty = cart.length === 0;

  const handleOrder = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      if (response.ok) {
        alert("Megrendelés sikeres! 🐝");
        clearCart();
      } else {
        const error = await response.json();
        alert("Hiba történt: " + error.message);
      }
    } catch (err) {
      alert("Hiba történt a megrendelés során.");
    }
  };

  return (
    <div>
      <h2>Kosár</h2>
      {isEmpty ? (
        <p>A kosár üres.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item) => (
            <li key={item.type} style={{ marginBottom: "1rem" }}>
              {item.type} – {item.quantity} db
              <button style={{ marginLeft: "1rem" }} onClick={() => removeFromCart(item.type)}>
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          onClick={handleOrder}
          disabled={isEmpty}
          style={{ border: "2px solid black", padding: "0.5rem 1rem", borderRadius: "12px" }}
        >
          ✅ Megrendelés
        </button>
        <button
          onClick={clearCart}
          disabled={isEmpty}
          style={{ border: "2px solid black", padding: "0.5rem 1rem", borderRadius: "12px" }}
        >
          🧹 Kosár ürítése
        </button>
      </div>
    </div>
  );
}
