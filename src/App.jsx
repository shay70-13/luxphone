import { useState } from "react";
import "./App.css";

import Navbar      from "./components/Navbar";
import Shop        from "./pages/Shop";
import CartPage    from "./pages/CartPage";
import OrderForm   from "./pages/OrderForm";
import Confirm     from "./pages/Confirm";
import About       from "./pages/About";
import Blog        from "./pages/Blog";
import Contact     from "./pages/Contact";
import Admin       from "./pages/Admin";

function App() {
  const [page, setPage]           = useState("shop");
  const [cartItems, setCartItems] = useState([]);
  const [orderInfo, setOrderInfo] = useState(null);

  const handleAdd = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) return prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleIncrease = (id) =>
    setCartItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));

  const handleDecrease = (id) =>
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item.quantity === 1) return prev.filter((i) => i.id !== id);
      return prev.map((i) => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
    });

  const handleRemove  = (id) => setCartItems((prev) => prev.filter((i) => i.id !== id));
  const cartCount     = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const handleOrder   = () => setPage("order");
  const handleConfirm = (info) => { setOrderInfo(info); setPage("confirm"); };
  const handleReset   = () => { setCartItems([]); setOrderInfo(null); setPage("shop"); };

  const renderPage = () => {
    switch (page) {
      case "shop":    return <Shop onAdd={handleAdd} />;
      case "cart":    return <CartPage cartItems={cartItems} onIncrease={handleIncrease} onDecrease={handleDecrease} onRemove={handleRemove} onOrder={handleOrder} setPage={setPage} />;
      case "order":   return <OrderForm cartItems={cartItems} onConfirm={handleConfirm} setPage={setPage} />;
      case "confirm": return <Confirm orderInfo={orderInfo} cartItems={cartItems} onReset={handleReset} />;
      case "about":   return <About />;
      case "blog":    return <Blog />;
      case "contact": return <Contact />;
      case "admin":   return <Admin />;
      default:        return <Shop onAdd={handleAdd} />;
    }
  };

  return (
    <>
      {page !== "confirm" && <Navbar page={page} setPage={setPage} cartCount={cartCount} />}
      {renderPage()}
      {page !== "confirm" && (
        <footer className="footer">
          © 2025 <span>LuxPhone</span> · Libreville, Gabon 🇬🇦 ·
          Tous droits réservés ·{" "}
          <span
            style={{ cursor: "pointer", opacity: 0.3, fontSize: "0.7rem" }}
            onClick={() => setPage("admin")}>
            admin
          </span>
        </footer>
      )}
    </>
  );
}

export default App;
