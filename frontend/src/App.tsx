import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HoneyShop from "./pages/HoneyShop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shop" element={<HoneyShop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
