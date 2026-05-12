// ── Props reçues depuis CartPage.jsx ──
// item       : un article du panier { ...product, quantity }
// onIncrease : augmente la quantité de cet article
// onDecrease : diminue la quantité (supprime si qty = 1)
// onRemove   : supprime l'article du panier

function Cart({ item, onIncrease, onDecrease, onRemove }) {
  const { emoji, brand, name, price, quantity } = item;

  // Formate le prix en XAF
  const formatPrice = (amount) =>
    amount.toLocaleString("fr-FR") + " XAF";

  return (
    <div className="cart-item anim-fadein">

      {/* ── Visuel produit ── */}
      <div className="cart-item-img">
        <span>{emoji}</span>
      </div>

      {/* ── Infos produit ── */}
      <div className="cart-item-info">
        <p className="cart-item-brand">{brand}</p>
        <h3>{name}</h3>
        <p className="cart-item-price">
          {formatPrice(price)} <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>/ unité</span>
        </p>
      </div>

      {/* ── Actions : quantité + suppression ── */}
      <div className="cart-item-actions">

        {/* Contrôle de quantité */}
        <div className="qty-control">
          <button
            className="qty-btn"
            onClick={() => onDecrease(item.id)}
            title="Diminuer"
          >
            −
          </button>
          <span className="qty-value">{quantity}</span>
          <button
            className="qty-btn"
            onClick={() => onIncrease(item.id)}
            title="Augmenter"
          >
            +
          </button>
        </div>

        {/* Sous-total de cet article */}
        <p style={{ fontSize: "0.88rem", color: "var(--accent2)", fontWeight: 500 }}>
          {formatPrice(price * quantity)}
        </p>

        {/* Supprimer */}
        <button
          className="remove-btn"
          onClick={() => onRemove(item.id)}
        >
          🗑 Retirer
        </button>

      </div>

    </div>
  );
}

export default Cart;