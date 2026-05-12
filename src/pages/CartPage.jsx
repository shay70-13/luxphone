import { useEffect, useState } from "react";
import Cart from "../components/Cart";

// ── Props reçues depuis App.jsx ──
// cartItems  : tableau des articles dans le panier
// onIncrease : augmente la quantité d'un article
// onDecrease : diminue la quantité d'un article
// onRemove   : supprime un article du panier
// onOrder    : navigue vers la page de commande
// setPage    : pour naviguer vers la boutique si panier vide

function CartPage({ cartItems, onIncrease, onDecrease, onRemove, onOrder, setPage }) {
  const [total, setTotal]       = useState(0);
  const [itemCount, setCount]   = useState(0);
  const LIVRAISON               = 15000;

  // ── useEffect : recalcule le total à chaque changement du panier ──
  useEffect(() => {
    const sum   = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotal(sum);
    setCount(count);
  }, [cartItems]);

  // Formate un montant en XAF
  const fmt = (amount) => amount.toLocaleString("fr-FR") + " XAF";

  // ── Panier vide ──
  if (cartItems.length === 0) {
    return (
      <div className="page">
        <div className="cart-page">
          <div className="cart-empty anim-popin">
            <div className="cart-empty-icon">🛒</div>
            <h2>Votre panier est vide</h2>
            <p style={{ marginBottom: "2rem" }}>
              Découvrez notre sélection de smartphones premium.
            </p>
            <button
              className="btn btn-solid"
              onClick={() => setPage("shop")}
            >
              Voir la boutique
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="cart-page">

        {/* ── Titre ── */}
        <div style={{ marginBottom: "2rem" }}>
          <p className="eyebrow">✦ Mon Panier</p>
          <h1 className="page-title">
            {itemCount} article{itemCount > 1 ? "s" : ""} sélectionné{itemCount > 1 ? "s" : ""}
          </h1>
        </div>

        <div className="cart-layout">

          {/* ── Liste des articles ── */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <Cart
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}

            {/* Bouton continuer les achats */}
            <button
              className="btn"
              style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
              onClick={() => setPage("shop")}
            >
              ← Continuer les achats
            </button>
          </div>

          {/* ── Récapitulatif de commande ── */}
          <div className="cart-summary anim-fadein">
            <h3>Récapitulatif</h3>

            <div className="summary-row">
              <span>Sous-total ({itemCount} article{itemCount > 1 ? "s" : ""})</span>
              <span>{fmt(total)}</span>
            </div>

            <div className="summary-row">
              <span>Livraison</span>
              <span>{fmt(LIVRAISON)}</span>
            </div>

            <div className="summary-row">
              <span>Taxes incluses</span>
              <span>✓</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>{fmt(total + LIVRAISON)}</span>
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <button
                className="btn btn-solid btn-full"
                onClick={onOrder}
              >
                Commander →
              </button>
              <p style={{ fontSize: "0.75rem", color: "var(--muted)", textAlign: "center" }}>
                🔒 Paiement 100% sécurisé · Livraison sous 48h
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CartPage;