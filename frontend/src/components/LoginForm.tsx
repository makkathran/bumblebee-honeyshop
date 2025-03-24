import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });

      if (response.status === 200 && response.data.authenticated) {
        navigate("/shop"); // átirányítás a shop oldalra
      }
    } catch (err) {
      setError("Hibás felhasználónév vagy jelszó");
    }
  };

return (
    <form
        onSubmit={handleLogin}
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "300px",
            border: "2px solid black",
            padding: "0.5rem 1rem",
            borderRadius: "12px",
            backgroundColor: "white",
        }}
    >
        <input
            type="text"
            placeholder="Felhasználónév"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
                height: "2.5rem",
                fontSize: "1rem",
                padding: "0.5rem",
                borderRadius: "6px",
            }}
        />
        <input
            type="password"
            placeholder="Jelszó"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
                height: "2.5rem",
                fontSize: "1rem",
                padding: "0.5rem",
                borderRadius: "6px",
            }}
        />
        <button
            type="submit"
            style={{
                width: "50%",
                height: "2.5rem",
                fontSize: "1rem",
                alignSelf: "center",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "gray")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "black")}
        >
            Belépés
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
);
}
