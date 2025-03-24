import "./../styles/HoneyShop.css"; 
import HoneyList from "../components/HoneyList";
import Cart from "../components/Cart";
import { CartProvider } from "../context/CartContext";

export default function HoneyShop() {
  const title = "BumbleBee";
  const colors = ["#000000", "#b8860b"];

  return (
    <CartProvider>
      <div className="honey-shop-container">
        <div className="honey-shop-inner">
          <h1>
            Üdvözöllek a{" "}
            {title.split("").map((char, i) => (
              <span key={i} style={{ color: colors[i % 2] }}>
                {char}
              </span>
            ))}{" "}
            🐝 Mézboltjában!
          </h1>

          <div className="honey-shop-content">
            <div className="honey-section">
              <HoneyList />
            </div>
            <div className="honey-section">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
}
