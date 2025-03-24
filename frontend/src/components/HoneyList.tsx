import { useCart } from "../context/CartContext";
import { HoneyType } from "../context/CartContext";

const honeyTypes: HoneyType[] = ["akác", "gyógy", "hárs", "virág", "repce"];

export default function HoneyList() {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Választható mézfajták</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {honeyTypes.map((type) => (
          <li key={type} style={{ marginBottom: "1rem" }}>
            <span style={{ marginRight: "1rem" }}>{type}</span>
            <button onClick={() => addToCart(type)}>➕ Kosárba</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
