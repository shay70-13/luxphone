import { useEffect, useState } from "react";

// ── Props reçues depuis App.jsx ──
// orderInfo  : infos client soumises dans OrderForm
// cartItems  : articles commandés (pour l'affichage)
// onReset    : vide le panier et retourne à la boutique

function Confirm({ orderInfo, cartItems, onReset }) {
  const LIVRAISON = 15000;

  // ── Numéro de commande généré aléatoirement ──
  const [orderNumber, setOrderNumber] = useState("");

  // ── useEffect : génère le numéro de commande au montage ──
  useEffect(() => {
    const num = "LXP-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setOrderNumber(num);
  }, []); // [] = s'exécute une seule fois au montage du composant

  // ── Calcul du total ──
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );
  const fmt = (amount) => amount.toLocaleString("fr-FR") + " XAF";

  // ── Libellé du mode de paiement ──
  const paymentLabels = {
    mobile:   "📱 Mobile Money",
    cash:     "💵 Cash à la livraison",
    virement: "🏦 Virement bancaire",
  };

  return (
    <div className="confirm-page">
      <div className="confirm-card anim-popin">

        {/* ── Icône succès ── */}
        <span className="confirm-icon">✅</span>

        {/* ── Titre ── */}
        <h1>Commande <em>Confirmée</em> !</h1>
        <p>Merci <strong style={{ color: "var(--text)" }}>
          {orderInfo.prenom} {orderInfo.nom}
        </strong> pour votre confiance.</p>
        <p>Vous recevrez une confirmation sur <strong style={{ color: "var(--text)" }}>
          {orderInfo.email}
        </strong>.</p>

        {/* ── Numéro de commande ── */}
        <div className="confirm-num">{orderNumber}</div>

        {/* ── Détails de livraison ── */}
        <div className="confirm-details">
          <p>
            <strong>📍 Livraison :</strong>{" "}
            {orderInfo.adresse}, {orderInfo.quartier && orderInfo.quartier + ", "}
            {orderInfo.ville}
          </p>
          <p>
            <strong>📞 Téléphone :</strong> {orderInfo.telephone}
          </p>
          <p>
            <strong>💳 Paiement :</strong>{" "}
            {paymentLabels[orderInfo.payment] || orderInfo.payment}
          </p>
          <p>
            <strong>🚚 Délai estimé :</strong> 24h – 48h ouvrées
          </p>

          {/* Séparateur */}
          <div style={{ height: "1px", background: "var(--border)", margin: "0.8rem 0" }} />

          {/* Articles commandés */}
          {cartItems.map((item) => (
            <p key={item.id}>
              <strong>{item.emoji} {item.name}</strong>{" "}
              <span style={{ color: "var(--muted)" }}>
                × {item.quantity} — {fmt(item.price * item.quantity)}
              </span>
            </p>
          ))}

          {/* Séparateur */}
          <div style={{ height: "1px", background: "var(--border)", margin: "0.8rem 0" }} />

          <p>
            <strong>💰 Total payé :</strong>{" "}
            <span style={{ color: "var(--accent2)", fontWeight: 500 }}>
              {fmt(total + LIVRAISON)}
            </span>
          </p>
        </div>

        {/* ── Note de suivi ── */}
        <p style={{ fontSize: "0.8rem", marginBottom: "1.5rem" }}>
          🔔 Notre équipe vous contactera sous peu pour organiser la livraison.
        </p>

        {/* ── Bouton retour boutique ── */}
        <button className="btn btn-solid btn-full" onClick={onReset}>
          🛍️ Retourner à la boutique
        </button>

      </div>
    </div>
  );
}

export default Confirm;