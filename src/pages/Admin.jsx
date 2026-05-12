import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc, orderBy, query } from "firebase/firestore";

const MOT_DE_PASSE = "luxphone2025";

const STATUTS = ["En attente", "Confirmée", "En livraison", "Livrée", "Annulée"];
const STATUT_COLORS = {
  "En attente":   "#f59e0b",
  "Confirmée":    "#6366f1",
  "En livraison": "#3b82f6",
  "Livrée":       "#10b981",
  "Annulée":      "#ef4444",
};

const fmt = (n) => Number(n).toLocaleString("fr-FR") + " XAF";

function Admin() {
  const [auth,       setAuth]       = useState(false);
  const [mdp,        setMdp]        = useState("");
  const [mdpError,   setMdpError]   = useState(false);
  const [commandes,  setCommandes]  = useState([]);
  const [messages,   setMessages]   = useState([]);
  const [onglet,     setOnglet]     = useState("commandes");
  const [loading,    setLoading]    = useState(false);
  const [expanded,   setExpanded]   = useState(null);

  const handleLogin = () => {
    if (mdp === MOT_DE_PASSE) { setAuth(true); chargerDonnees(); }
    else setMdpError(true);
  };

  const chargerDonnees = async () => {
    setLoading(true);
    try {
      // Commandes
      const qCmd = query(collection(db, "commandes"), orderBy("createdAt", "desc"));
      const snapCmd = await getDocs(qCmd);
      setCommandes(snapCmd.docs.map(d => ({ id: d.id, ...d.data() })));

      // Messages
      const qMsg = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const snapMsg = await getDocs(qMsg);
      setMessages(snapMsg.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const changerStatut = async (id, statut) => {
    await updateDoc(doc(db, "commandes", id), { statut });
    setCommandes(prev => prev.map(c => c.id === id ? { ...c, statut } : c));
  };

  const marquerLu = async (id) => {
    await updateDoc(doc(db, "messages", id), { lu: true });
    setMessages(prev => prev.map(m => m.id === id ? { ...m, lu: true } : m));
  };

  // ── LOGIN ──
  if (!auth) return (
    <div className="page">
      <div className="admin-login">
        <div className="admin-login-card">
          <div className="admin-login-icon">🔐</div>
          <h2>Espace Admin</h2>
          <p style={{ color: "var(--muted)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
            Accès réservé à l'équipe LuxPhone
          </p>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={mdp}
              onChange={(e) => { setMdp(e.target.value); setMdpError(false); }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="••••••••••"
              className={mdpError ? "error" : ""}
            />
            {mdpError && <span className="error-msg">Mot de passe incorrect.</span>}
          </div>
          <button className="btn btn-solid btn-full" onClick={handleLogin}>
            Se connecter →
          </button>
        </div>
      </div>
    </div>
  );

  // ── DASHBOARD ──
  const nbEnAttente = commandes.filter(c => c.statut === "En attente").length;
  const nbMessages  = messages.filter(m => !m.lu).length;
  const totalCA     = commandes
    .filter(c => c.statut === "Livrée")
    .reduce((acc, c) => acc + (c.totalFinal || 0), 0);

  return (
    <div className="page">
      <div className="admin-wrap">

        {/* Header */}
        <div className="admin-header">
          <div>
            <p className="eyebrow">✦ Espace Admin</p>
            <h1 className="page-title">Dashboard <em>LuxPhone</em></h1>
          </div>
          <button className="btn" onClick={chargerDonnees}>🔄 Actualiser</button>
        </div>

        {/* KPIs */}
        <div className="admin-kpis">
          <div className="kpi-card">
            <div className="kpi-value">{commandes.length}</div>
            <div className="kpi-label">Commandes totales</div>
          </div>
          <div className="kpi-card" style={{ borderColor: "#f59e0b" }}>
            <div className="kpi-value" style={{ color: "#f59e0b" }}>{nbEnAttente}</div>
            <div className="kpi-label">En attente</div>
          </div>
          <div className="kpi-card" style={{ borderColor: "#10b981" }}>
            <div className="kpi-value" style={{ color: "#10b981" }}>{fmt(totalCA)}</div>
            <div className="kpi-label">CA livré</div>
          </div>
          <div className="kpi-card" style={{ borderColor: "#6366f1" }}>
            <div className="kpi-value" style={{ color: "#6366f1" }}>{nbMessages}</div>
            <div className="kpi-label">Messages non lus</div>
          </div>
        </div>

        {/* Onglets */}
        <div className="admin-tabs">
          <button
            className={`admin-tab${onglet === "commandes" ? " active" : ""}`}
            onClick={() => setOnglet("commandes")}>
            📦 Commandes {nbEnAttente > 0 && <span className="tab-badge">{nbEnAttente}</span>}
          </button>
          <button
            className={`admin-tab${onglet === "messages" ? " active" : ""}`}
            onClick={() => setOnglet("messages")}>
            ✉️ Messages {nbMessages > 0 && <span className="tab-badge">{nbMessages}</span>}
          </button>
        </div>

        {loading ? (
          <div className="shop-loading"><div className="loading-spinner" /><p className="loading-text">Chargement…</p></div>
        ) : onglet === "commandes" ? (

          /* ── COMMANDES ── */
          <div className="admin-list">
            {commandes.length === 0 ? (
              <div className="empty-state"><span>📭</span><p>Aucune commande pour l'instant.</p></div>
            ) : commandes.map((cmd) => (
              <div className="admin-card" key={cmd.id}>
                <div className="admin-card-head" onClick={() => setExpanded(expanded === cmd.id ? null : cmd.id)}>
                  <div className="admin-card-left">
                    <span className="admin-card-id">#{cmd.id.slice(-6).toUpperCase()}</span>
                    <span className="admin-card-name">
                      {cmd.client?.prenom} {cmd.client?.nom}
                    </span>
                    <span className="admin-card-ville">{cmd.client?.ville}</span>
                  </div>
                  <div className="admin-card-right">
                    <span className="admin-card-total">{fmt(cmd.totalFinal)}</span>
                    <span className="statut-badge" style={{ background: STATUT_COLORS[cmd.statut] || "var(--accent2)" }}>
                      {cmd.statut}
                    </span>
                    <span style={{ color: "var(--muted)" }}>{expanded === cmd.id ? "▲" : "▼"}</span>
                  </div>
                </div>

                {expanded === cmd.id && (
                  <div className="admin-card-body">
                    <div className="admin-detail-grid">
                      <div>
                        <h4>📞 Contact</h4>
                        <p>{cmd.client?.email}</p>
                        <p>{cmd.client?.telephone}</p>
                      </div>
                      <div>
                        <h4>📍 Livraison</h4>
                        <p>{cmd.client?.adresse}</p>
                        <p>{cmd.client?.quartier} — {cmd.client?.ville}</p>
                        {cmd.client?.note && <p style={{ color: "var(--muted)" }}>💬 {cmd.client.note}</p>}
                      </div>
                      <div>
                        <h4>💳 Paiement</h4>
                        <p style={{ textTransform: "capitalize" }}>{cmd.paiement}</p>
                      </div>
                    </div>

                    <h4 style={{ margin: "1rem 0 0.5rem" }}>🛒 Articles</h4>
                    {cmd.articles?.map((a, i) => (
                      <div className="recap-item" key={i}>
                        <span>{a.marque} {a.nom} × {a.quantite}</span>
                        <span>{fmt(a.prix * a.quantite)}</span>
                      </div>
                    ))}
                    <div className="recap-item" style={{ fontWeight: 600, color: "var(--accent2)", marginTop: "0.5rem" }}>
                      <span>Total</span><span>{fmt(cmd.totalFinal)}</span>
                    </div>

                    <div style={{ marginTop: "1rem" }}>
                      <label style={{ fontSize: "0.8rem", color: "var(--muted)", display: "block", marginBottom: "0.4rem" }}>
                        Changer le statut :
                      </label>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {STATUTS.map((s) => (
                          <button
                            key={s}
                            onClick={() => changerStatut(cmd.id, s)}
                            style={{
                              padding: "0.3rem 0.8rem", fontSize: "0.72rem", borderRadius: "4px",
                              border: `1px solid ${STATUT_COLORS[s]}`,
                              background: cmd.statut === s ? STATUT_COLORS[s] : "transparent",
                              color: cmd.statut === s ? "white" : STATUT_COLORS[s],
                              cursor: "pointer",
                            }}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        ) : (

          /* ── MESSAGES ── */
          <div className="admin-list">
            {messages.length === 0 ? (
              <div className="empty-state"><span>📭</span><p>Aucun message pour l'instant.</p></div>
            ) : messages.map((msg) => (
              <div className={`admin-card${msg.lu ? " admin-card-read" : ""}`} key={msg.id}>
                <div className="admin-card-head" onClick={() => { setExpanded(expanded === msg.id ? null : msg.id); if (!msg.lu) marquerLu(msg.id); }}>
                  <div className="admin-card-left">
                    {!msg.lu && <span className="unread-dot" />}
                    <span className="admin-card-name">{msg.nom}</span>
                    <span className="admin-card-ville">{msg.sujet}</span>
                  </div>
                  <div className="admin-card-right">
                    <span style={{ color: "var(--muted)", fontSize: "0.75rem" }}>{msg.email}</span>
                    <span style={{ color: "var(--muted)" }}>{expanded === msg.id ? "▲" : "▼"}</span>
                  </div>
                </div>
                {expanded === msg.id && (
                  <div className="admin-card-body">
                    <p style={{ lineHeight: 1.7, color: "var(--muted)" }}>{msg.message}</p>
                    <a href={`mailto:${msg.email}`} className="btn btn-solid"
                      style={{ display: "inline-block", marginTop: "1rem", textDecoration: "none" }}>
                      ✉️ Répondre à {msg.nom}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Admin;
