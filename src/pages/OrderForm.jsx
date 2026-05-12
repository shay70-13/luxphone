import { useState } from "react";

function OrderForm({ cartItems, onConfirm, setPage }) {
  const LIVRAISON = 15000;

  const [form, setForm] = useState({
    prenom:    "",
    nom:       "",
    email:     "",
    telephone: "",
    adresse:   "",
    ville:     "",
    quartier:  "",
    note:      "",
  });

  const [errors, setErrors]   = useState({});
  const [payment, setPayment] = useState("mobile");
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );
  const fmt = (amount) => amount.toLocaleString("fr-FR") + " XAF";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.prenom.trim())    newErrors.prenom    = "Le prénom est obligatoire.";
    if (!form.nom.trim())       newErrors.nom       = "Le nom est obligatoire.";
    if (!form.telephone.trim()) newErrors.telephone = "Le téléphone est obligatoire.";
    if (!form.adresse.trim())   newErrors.adresse   = "L'adresse est obligatoire.";
    if (!form.ville.trim())     newErrors.ville     = "La ville est obligatoire.";
    if (!form.email.trim()) {
      newErrors.email = "L'email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Format d'email invalide.";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Simulation d'un chargement (traitement commande)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onConfirm({ ...form, payment });
    }, 1800);
  };

  const paymentMethods = [
    { key: "mobile",   emoji: "📱", label: "Mobile Money (Airtel / Moov)" },
    { key: "cash",     emoji: "💵", label: "Cash à la livraison"           },
    { key: "virement", emoji: "🏦", label: "Virement bancaire"             },
  ];

  return (
    <div className="page">
      <div className="order-page">

        {/* Loading overlay */}
        {loading && (
          <div className="loading-overlay">
            <div className="loading-spinner" />
            <p className="loading-text">Traitement de votre commande…</p>
          </div>
        )}

        <div style={{ marginBottom: "2rem" }}>
          <p className="eyebrow">✦ Finaliser la commande</p>
          <h1 className="page-title">
            Vos <em>Informations</em>
          </h1>
        </div>

        {/* BLOC 1 : Informations personnelles */}
        <div className="form-card anim-fadeup">
          <h2>👤 Informations personnelles</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Prénom *</label>
              <input
                name="prenom"
                value={form.prenom}
                onChange={handleChange}
                placeholder="Hervé"
                className={errors.prenom ? "error" : ""}
              />
              {errors.prenom && <span className="error-msg">{errors.prenom}</span>}
            </div>

            <div className="form-group">
              <label>Nom *</label>
              <input
                name="nom"
                value={form.nom}
                onChange={handleChange}
                placeholder="Nzamba"
                className={errors.nom ? "error" : ""}
              />
              {errors.nom && <span className="error-msg">{errors.nom}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="herve@email.ga"
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Téléphone *</label>
              <input
                name="telephone"
                value={form.telephone}
                onChange={handleChange}
                placeholder="+241 077 000 000"
                className={errors.telephone ? "error" : ""}
              />
              {errors.telephone && <span className="error-msg">{errors.telephone}</span>}
            </div>
          </div>
        </div>

        {/* BLOC 2 : Adresse de livraison */}
        <div className="form-card anim-fadeup">
          <h2>📍 Adresse de livraison</h2>

          <div className="form-group">
            <label>Adresse complète *</label>
            <input
              name="adresse"
              value={form.adresse}
              onChange={handleChange}
              placeholder="Boulevard Triomphal, Immeuble XYZ"
              className={errors.adresse ? "error" : ""}
            />
            {errors.adresse && <span className="error-msg">{errors.adresse}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Ville *</label>
              <select
                name="ville"
                value={form.ville}
                onChange={handleChange}
                className={errors.ville ? "error" : ""}
              >
                <option value="">Choisir une ville…</option>
                <option>Libreville</option>
                <option>Port-Gentil</option>
                <option>Franceville</option>
                <option>Oyem</option>
                <option>Moanda</option>
                <option>Lambaréné</option>
                <option>Tchibanga</option>
                <option>Mouila</option>
                <option>Makokou</option>
              </select>
              {errors.ville && <span className="error-msg">{errors.ville}</span>}
            </div>

            <div className="form-group">
              <label>Quartier</label>
              <input
                name="quartier"
                value={form.quartier}
                onChange={handleChange}
                placeholder="Akanda, Nzeng-Ayong, PK8…"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Note pour le livreur</label>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Bâtiment, étage, point de repère (ex: derrière la station Total)…"
            />
          </div>
        </div>

        {/* BLOC 3 : Mode de paiement */}
        <div className="form-card anim-fadeup">
          <h2>💳 Mode de paiement</h2>

          <div className="payment-options">
            {paymentMethods.map((method) => (
              <div
                key={method.key}
                className={`payment-option${payment === method.key ? " selected" : ""}`}
                onClick={() => setPayment(method.key)}
              >
                <span>{method.emoji}</span>
                <span>{method.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BLOC 4 : Récapitulatif */}
        <div className="form-card anim-fadeup">
          <h2>🧾 Récapitulatif</h2>

          <div className="order-recap">
            {cartItems.map((item) => (
              <div className="recap-item" key={item.id}>
                <span>{item.name} × {item.quantity}</span>
                <span>{fmt(item.price * item.quantity)}</span>
              </div>
            ))}

            <div className="recap-item">
              <span>Livraison</span>
              <span>{fmt(LIVRAISON)}</span>
            </div>

            <div className="recap-item" style={{ fontWeight: 500, color: "var(--accent2)" }}>
              <span>Total à payer</span>
              <span>{fmt(total + LIVRAISON)}</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn" onClick={() => setPage("cart")}>
              ← Retour au panier
            </button>
            <button
              className="btn btn-solid"
              style={{ flex: 1 }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "⏳ Traitement…" : "✅ Confirmer la commande"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderForm;
