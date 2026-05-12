import { useState } from "react";

const DETAILS = [
  { icon: "📍", label: "Adresse",   value: "Petit Paris, Libreville, Gabon"  },
  { icon: "📞", label: "Téléphone", value: "+241 066 030 115"                 },
  { icon: "✉️", label: "Email",     value: "contact@luxphone.ga"              },
  { icon: "⏰", label: "Horaires",  value: "Lun – Sam : 8h00 – 19h00"        },
];

function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!form.nom.trim())     err.nom     = "Le nom est obligatoire.";
    if (!form.message.trim()) err.message = "Le message est obligatoire.";
    if (!form.email.trim()) {
      err.email = "L'email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      err.email = "Format d'email invalide.";
    }
    return err;
  };

  const handleSubmit = () => {
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="page">
      <div className="contact-wrap">

        {/* Infos de contact */}
        <div className="contact-info">
          <p className="eyebrow">✦ Contact</p>
          <h1 className="page-title">
            Parlons <em>Ensemble</em>
          </h1>
          <p style={{ color: "var(--muted)", margin: "1rem 0 2rem", fontSize: "0.95rem" }}>
            Une question sur un modèle ? Un devis personnalisé ?
            Notre équipe répond sous 2h ouvrées.
          </p>

          <div className="contact-details">
            {DETAILS.map((d) => (
              <div className="contact-detail" key={d.label}>
                <div className="contact-detail-icon">{d.icon}</div>
                <div className="contact-detail-text">
                  <h4>{d.label}</h4>
                  <p>{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <div className="contact-form">

          {sent ? (
            <div className="form-success anim-popin">
              <div className="form-success-icon">✦</div>
              <h3>Message envoyé !</h3>
              <p>
                Merci <strong style={{ color: "var(--text)" }}>{form.nom}</strong>,
                nous vous répondrons très prochainement.
              </p>
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label>Nom complet *</label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Léa Obiang"
                    className={errors.nom ? "error" : ""}
                  />
                  {errors.nom && <span className="error-msg">{errors.nom}</span>}
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="lea@email.ga"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Sujet</label>
                <select name="sujet" value={form.sujet} onChange={handleChange}>
                  <option value="">Choisir un sujet…</option>
                  <option>Demande de devis</option>
                  <option>Commande en cours</option>
                  <option>Service après-vente</option>
                  <option>Livraison</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande…"
                  className={errors.message ? "error" : ""}
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button
                className="btn btn-solid btn-full"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                    <span className="btn-spinner" /> Envoi en cours…
                  </span>
                ) : "Envoyer le message →"}
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Contact;
