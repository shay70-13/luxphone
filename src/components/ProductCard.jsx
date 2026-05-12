function ProductCard({ product, onAdd }) {
  const fmt = (n) => n.toLocaleString("fr-FR") + " XAF";

  const badgeColors = {
    "Nouveau":     "var(--accent2)",
    "Best-Seller": "#f59e0b",
    "Promo":       "#ef4444",
    "Populaire":   "#10b981",
    "Bon Plan":    "#6366f1",
  };

  return (
    <div className="product-card">
      {/* Badge */}
      {product.badge && (
        <span
          className="product-badge"
          style={{ background: badgeColors[product.badge] || "var(--accent2)" }}
        >
          {product.badge}
        </span>
      )}

      {/* Image */}
      <div className="product-img-wrap">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-photo"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div className="product-emoji-fallback" style={{ display: "none" }}>
          📱
        </div>
      </div>

      {/* Infos */}
      <div className="product-body">
        <p className="product-brand">{product.brand}</p>
        <h3 className="product-name">{product.name}</h3>

        {/* Specs compactes */}
        <div className="product-specs">
          <span>📦 {product.storage}</span>
          <span>📷 {product.camera}</span>
          <span>🔋 {product.battery}</span>
        </div>

        <div className="product-footer">
          <span className="product-price">{fmt(product.price)}</span>
          <button className="btn btn-solid btn-sm" onClick={() => onAdd(product)}>
            + Panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
