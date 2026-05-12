import { useState } from "react";

// ── Props reçues depuis App.jsx ──
// page      : page active (string)
// setPage   : fonction pour changer de page
// cartCount : nombre total d'articles dans le panier

function Navbar({ page, setPage, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Ferme le menu et navigue vers la page choisie
  const navigate = (target) => {
    setPage(target);
    setMenuOpen(false);
  };

  const links = [
    { label: "Boutique",  key: "shop"  },
    { label: "À Propos",  key: "about" },
    { label: "Blog",      key: "blog"  },
    { label: "Contact",   key: "contact" },
  ];

  return (
    <nav className="navbar">

      {/* ── Logo ── */}
      <div className="navbar-logo" onClick={() => navigate("shop")}>
        LUX<span>PHONE</span>
      </div>

      {/* ── Liens de navigation ── */}
      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        {links.map((link) => (
          <li
            key={link.key}
            className={page === link.key ? "active" : ""}
            onClick={() => navigate(link.key)}
          >
            {link.label}
          </li>
        ))}
      </ul>

      {/* ── Icône panier avec badge ── */}
      <button className="nav-cart" onClick={() => navigate("cart")}>
        🛒 Panier
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount}</span>
        )}
      </button>

      {/* ── Burger (mobile) ── */}
      <button className="burger" onClick={() => setMenuOpen((o) => !o)}>
        <span />
        <span />
        <span />
      </button>

    </nav>
  );
}

export default Navbar;