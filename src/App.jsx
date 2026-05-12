import { useState } from "react";
import "./App.css";

// ── Composants ──
import Navbar from "./components/Navbar";

// ── Pages ──
import Shop      from "./pages/Shop";
import CartPage  from "./pages/CartPage";
import OrderForm from "./pages/OrderForm";
import Confirm   from "./pages/Confirm";
import About     from "./pages/About";
import Blog      from "./pages/Blog";
import Contact   from "./pages/Contact";

function App() {
  // ══════════════════════════════════════
  // ÉTAT GLOBAL DE L'APPLICATION
  // ══════════════════════════════════════

  const [page, setPage]         = useState("shop");
  const [cartItems, setCartItems] = useState([]);
  const [orderInfo, setOrderInfo] = useState(null);

  // ══════════════════════════════════════
  // LOGIQUE DU PANIER
  // ══════════════════════════════════════

  const handleAdd = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item.quantity === 1) return prev.filter((i) => i.id !== id);
      return prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // ══════════════════════════════════════
  // LOGIQUE DE COMMANDE
  // ══════════════════════════════════════

  const handleOrder   = () => setPage("order");

  const handleConfirm = (info) => {
    setOrderInfo(info);
    setPage("confirm");
  };

  const handleReset = () => {
    setCartItems([]);
    setOrderInfo(null);
    setPage("shop");
  };

  // ══════════════════════════════════════
  // RENDU DES PAGES
  // ══════════════════════════════════════

  const renderPage = () => {
    switch (page) {
      case "shop":
        return <Shop onAdd={handleAdd} />;

      case "cart":
        return (
          <CartPage
            cartItems={cartItems}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
            onOrder={handleOrder}
            setPage={setPage}
          />
        );

      case "order":
        return (
          <OrderForm
            cartItems={cartItems}
            onConfirm={handleConfirm}
            setPage={setPage}
          />
        );

      case "confirm":
        return (
          <Confirm
            orderInfo={orderInfo}
            cartItems={cartItems}
            onReset={handleReset}
          />
        );

      case "about":
        return <About />;

      case "blog":
        return <Blog />;

      case "contact":
        return <Contact />;

      default:
        return <Shop onAdd={handleAdd} />;
    }
  };

  // ══════════════════════════════════════
  // JSX PRINCIPAL
  // ══════════════════════════════════════

  return (
    <>
      {page !== "confirm" && (
        <Navbar
          page={page}
          setPage={setPage}
          cartCount={cartCount}
        />
      )}

      {renderPage()}

      {page !== "confirm" && (
        <footer className="footer">
          © 2025 <span>LuxPhone</span> · Libreville, Gabon 🇬🇦 ·
          Tous droits réservés
        </footer>
      )}
    </>
  );
}

export default App;
