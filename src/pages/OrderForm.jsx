import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs, { TEMPLATE_ADMIN, TEMPLATE_CLIENT } from "../emailjs";

const SERVICE_ID = "service_p2qgcvg";

function OrderForm({ cartItems, onConfirm, setPage }) {
  const LIVRAISON = 15000;

  const [form, setForm] = useState({
    prenom: "", nom: "", email: "", telephone: "",
    adresse: "", ville: "", quartier: "", note: "",
  });
  const [errors,  setErrors]  = useState({});
  const [payment, setPayment] = useState("mobile");
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const fmt   = (n) => n.toLocaleString("fr-FR") + " XAF";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!form.prenom.trim())    err.prenom    = "Le prénom est obligatoire.";
    if (!form.nom.trim())       err.nom       = "Le nom est obligatoire.";
    if (!form.telephone.trim()) err.telephone = "Le téléphone est obligatoire.";
    if (!form.adresse.trim())   err.adresse   = "L'adresse est obligatoire.";
    if (!form.ville.trim())     err.ville     = "La ville est obligatoire.";
    if (!form.email.trim()) {
      err.email = "L'email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      err.email = "Format d'email invalide.";
    }
    return err;
  };

  const handleSubmit = async () => {
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setLoading(true);
    try {
      // Préparer le résumé des articles
      const articlesTexte = cartItems
        .map((i) => `${i.brand} ${i.name} × ${i.quantity} = ${fmt(i.price * i.quantity)}`)
        .join("\n");

      const templateParams = {
        client_prenom:    form.prenom,
        client_nom:       `${form.prenom} ${form.nom}`,
        client_email:     form.email,
        client_telephone: form.telephone,
        client_adresse:   form.adresse,
        client_ville:     form.ville,
        articles:         articlesTexte,
        total:            fmt(total + LIVRAISON),
        paiement:         payment,
      };

      // 1. Sauvegarder dans Firestore
      await addDoc(collection(db, "commandes"), {
        client:     { ...form },
        articles:   cartItems.map((i) => ({
          id: i.id, nom: i.name, marque: i.brand,
          quantite: i.quantity, prix: i.price,
        })),
        sousTotal:  total,
        livraison:  LIVRAISON,
        totalFinal: total + LIVRAISON,
        paiement:   payment,
        statut:     "En attente",
        createdAt:  serverTimestamp(),
      });

      // 2. Email à l'admin (toi)
      await emailjs.send(SERVICE_ID, TEMPLATE_ADMIN, templateParams);

      // 3. Email de confirmation au client
      await emailjs.send(SERVICE_ID, TEMPLATE_CLIENT, templateParams);

      setLoading(false);
      onConfirm({ ...form, payment });

    } catch (error) {
      console.error("Erreur:", error);
      setLoading(false);
      // On confirme quand même même si l'email échoue
      onConfirm({ ...form, payment });
    }
  };

  const paymentMethods = [
    { key: "mobile",   emoji: "📱", label: "Mobile Money (Airtel / Moov)" },
    { key: "cash",     emoji: "💵", label: "Cash à la livraison"           },
    { key: "virement", emoji: "🏦", label: "Virement bancaire"             },
  ];

  return (
    <div className="page">
      <div className="order-page">

        {loading && (
          <div className="loading-overlay">
            <div className="loading-spinner" />
            <p className="loading-text">Enregistrement et envoi de la confirmation…</p>
          </div>
        )}

        <div style={{ marginBottom: "2rem" }}>
          <p className="eyebrow">✦ Finaliser la commande</p>
          <h1 className="page-title">Vos <em>Informations</em></h1>
        </div>

        <div className="form-card anim-fadeup">
          <h2>👤 Informations personnelles</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Prénom *</label>
              <input name="prenom" value={form.prenom} onChange={handleChange}
                placeholder="Hervé" className={errors.prenom ? "error" : ""} />
              {errors.prenom && <span className="error-msg">{errors.prenom}</span>}
            </div>
            <div className="form-group">
              <label>Nom *</label>
              <input name="nom" value={form.nom} onChange={handleChange}
                placeholder="Nzamba" className={errors.nom ? "error" : ""} />
              {errors.nom && <span className="error-msg">{errors.nom}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="herve@email.ga" className={errors.email ? "error" : ""} />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Téléphone *</label>
              <input name="telephone" value={form.telephone} onChange={handleChange}
                placeholder="+241 077 000 000" className={errors.telephone ? "error" : ""} />
              {errors.telephone && <span className="error-msg">{errors.telephone}</span>}
            </div>
          </div>
        </div>

        <div className="form-card anim-fadeup">
          <h2>📍 Adresse de livraison</h2>
          <div className="form-group">
            <label>Adresse complète *</label>
            <input name="adresse" value={form.adresse} onChange={handleChange}
              placeholder="Boulevard Triomphal, Immeuble XYZ"
              className={errors.adresse ? "error" : ""} />
            {errors.adresse && <span className="error-msg">{errors.adresse}</span>}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Ville *</label>
              <select name="ville" value={form.ville} onChange={handleChange}
                className={errors.ville ? "error" : ""}>
                <option value="">Choisir une ville…</option>
                {["Libreville","Port-Gentil","Franceville","Oyem","Moanda",
                  "Lambaréné","Tchibanga","Mouila","Makokou"].map(v => (
                  <option key={v}>{v}</option>
                ))}
              </select>
              {errors.ville && <span className="error-msg">{errors.ville}</span>}
            </div>
            <div className="form-group">
              <label>Quartier</label>
              <input name="quartier" value={form.quartier} onChange={handleChange}
                placeholder="Akanda, Nzeng-Ayong, PK8…" />
            </div>
          </div>
          <div className="form-group">
            <label>Note pour le livreur</label>
            <textarea name="note" value={form.note} onChange={handleChange}
              placeholder="Bâtiment, étage, point de repère…" />
          </div>
        </div>

        <div className="form-card anim-fadeup">
          <h2>💳 Mode de paiement</h2>
          <div className="payment-options">
            {paymentMethods.map((m) => (
              <div key={m.key}
                className={`payment-option${payment === m.key ? " selected" : ""}`}
                onClick={() => setPayment(m.key)}>
                <span>{m.emoji}</span><span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>

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
              <span>Livraison</span><span>{fmt(LIVRAISON)}</span>
            </div>
            <div className="recap-item" style={{ fontWeight: 500, color: "var(--accent2)" }}>
              <span>Total à payer</span><span>{fmt(total + LIVRAISON)}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn" onClick={() => setPage("cart")}>← Retour</button>
            <button className="btn btn-solid" style={{ flex: 1 }}
              onClick={handleSubmit} disabled={loading}>
              {loading ? "⏳ Traitement…" : "✅ Confirmer la commande"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderForm;
