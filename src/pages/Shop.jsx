import { useState, useEffect } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const BRANDS = ["Tous", ...new Set(products.map((p) => p.brand))];

function Shop({ onAdd }) {
  const [search,      setSearch]      = useState("");
  const [activeBrand, setActiveBrand] = useState("Tous");
  const [loading,     setLoading]     = useState(true);

  // Simulation d'un chargement initial des produits
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filtered = products.filter((p) => {
    const matchBrand  = activeBrand === "Tous" || p.brand === activeBrand;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.brand.toLowerCase().includes(search.toLowerCase());
    return matchBrand && matchSearch;
  });

  return (
    <div className="page">

      {/* Hero */}
      <div className="shop-hero">
        <p className="eyebrow">✦ Collection 2025</p>
        <h1 className="page-title">
          Smartphones <em>Premium</em><br />Livrés au Gabon
        </h1>
        <p style={{ color: "var(--muted)", marginTop: "0.5rem" }}>
          {products.length} modèles disponibles · Livraison 24h à Libreville
        </p>
      </div>

      {/* Barre de recherche */}
      <div className="search-bar-wrap">
        <input
          className="search-bar"
          type="text"
          placeholder="Rechercher un modèle ou une marque…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filtres marques */}
      <div className="brand-filters">
        {BRANDS.map((brand) => (
          <button
            key={brand}
            className={`filter-btn${activeBrand === brand ? " active" : ""}`}
            onClick={() => setActiveBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Grille produits OU Loading */}
      {loading ? (
        <div className="shop-loading">
          <div className="loading-spinner" />
          <p className="loading-text">Chargement des produits…</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <span style={{ fontSize: "3rem" }}>🔍</span>
          <p>Aucun produit trouvé pour « {search} »</p>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      )}

    </div>
  );
}

export default Shop;
