export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { client, articles, totalFinal, livraison, paiement } = req.body;
  const fmt = (n) => Number(n).toLocaleString("fr-FR") + " XAF";

  const articlesHtml = articles.map(a => `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #2a0040;">${a.marque} ${a.nom}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #2a0040;text-align:center;">${a.quantite}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #2a0040;text-align:right;">${fmt(a.prix * a.quantite)}</td>
    </tr>
  `).join("");

  // Email au CLIENT
  const emailClient = {
    from: "LuxPhone <onboarding@resend.dev>",
    to: client.email,
    subject: "✅ Votre commande LuxPhone est confirmée !",
    html: `
      <div style="background:#0a0010;color:#f0e6ff;font-family:sans-serif;max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#3d0070,#6b2fcb);padding:2rem;text-align:center;">
          <h1 style="margin:0;font-size:1.8rem;letter-spacing:0.05em;">LUXPHONE</h1>
          <p style="margin:0.5rem 0 0;opacity:0.8;">Libreville, Gabon 🇬🇦</p>
        </div>
        <div style="padding:2rem;">
          <h2 style="color:#c084fc;">Bonjour ${client.prenom} ${client.nom} 👋</h2>
          <p>Merci pour votre commande ! Nous l'avons bien reçue et elle est en cours de traitement.</p>

          <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;background:#160025;border-radius:8px;overflow:hidden;">
            <thead>
              <tr style="background:#2a0040;">
                <th style="padding:10px 12px;text-align:left;font-size:0.8rem;color:#c084fc;">Article</th>
                <th style="padding:10px 12px;text-align:center;font-size:0.8rem;color:#c084fc;">Qté</th>
                <th style="padding:10px 12px;text-align:right;font-size:0.8rem;color:#c084fc;">Prix</th>
              </tr>
            </thead>
            <tbody>${articlesHtml}</tbody>
          </table>

          <div style="background:#160025;border-radius:8px;padding:1rem 1.2rem;margin-bottom:1.5rem;">
            <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">
              <span style="color:#a78bfa;">Livraison</span>
              <span>${fmt(livraison)}</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:bold;color:#c084fc;border-top:1px solid #2a0040;padding-top:0.5rem;margin-top:0.5rem;">
              <span>Total à payer</span>
              <span>${fmt(totalFinal)}</span>
            </div>
          </div>

          <div style="background:#160025;border-radius:8px;padding:1rem 1.2rem;margin-bottom:1.5rem;">
            <p style="margin:0 0 0.5rem;color:#a78bfa;font-size:0.85rem;">📍 Livraison à</p>
            <p style="margin:0;">${client.adresse}, ${client.quartier ? client.quartier + ", " : ""}${client.ville}</p>
            <p style="margin:0.3rem 0 0;color:#a78bfa;font-size:0.85rem;">💳 Paiement : ${paiement}</p>
          </div>

          <p style="color:#a78bfa;font-size:0.85rem;">Notre équipe vous contactera au <strong style="color:#f0e6ff;">${client.telephone}</strong> pour confirmer la livraison.</p>
          <p style="color:#a78bfa;font-size:0.85rem;">Des questions ? Écrivez-nous à <a href="mailto:contact@luxphone.ga" style="color:#c084fc;">contact@luxphone.ga</a></p>
        </div>
        <div style="padding:1rem 2rem;text-align:center;border-top:1px solid #2a0040;color:#6b7280;font-size:0.75rem;">
          © 2025 LuxPhone · Libreville, Gabon
        </div>
      </div>
    `
  };

  // Email au PATRON (toi)
  const emailAdmin = {
    from: "LuxPhone <onboarding@resend.dev>",
    to: "maghoumbou.sheanhadley@gmail.com",
    subject: `🛒 Nouvelle commande — ${client.prenom} ${client.nom} — ${fmt(totalFinal)}`,
    html: `
      <div style="background:#0a0010;color:#f0e6ff;font-family:sans-serif;max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#3d0070,#6b2fcb);padding:1.5rem;text-align:center;">
          <h1 style="margin:0;font-size:1.4rem;">🛒 Nouvelle Commande</h1>
        </div>
        <div style="padding:2rem;">
          <h3 style="color:#c084fc;margin-top:0;">👤 Client</h3>
          <p style="margin:0.3rem 0;"><strong>${client.prenom} ${client.nom}</strong></p>
          <p style="margin:0.3rem 0;">📧 ${client.email}</p>
          <p style="margin:0.3rem 0;">📞 ${client.telephone}</p>
          <p style="margin:0.3rem 0;">📍 ${client.adresse}, ${client.quartier ? client.quartier + ", " : ""}${client.ville}</p>
          ${client.note ? `<p style="margin:0.3rem 0;color:#a78bfa;">💬 ${client.note}</p>` : ""}

          <h3 style="color:#c084fc;margin-top:1.5rem;">🛍️ Articles commandés</h3>
          <table style="width:100%;border-collapse:collapse;background:#160025;border-radius:8px;overflow:hidden;">
            <thead>
              <tr style="background:#2a0040;">
                <th style="padding:8px 12px;text-align:left;font-size:0.8rem;color:#c084fc;">Article</th>
                <th style="padding:8px 12px;text-align:center;font-size:0.8rem;color:#c084fc;">Qté</th>
                <th style="padding:8px 12px;text-align:right;font-size:0.8rem;color:#c084fc;">Prix</th>
              </tr>
            </thead>
            <tbody>${articlesHtml}</tbody>
          </table>

          <div style="margin-top:1rem;padding:1rem;background:#160025;border-radius:8px;">
            <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:bold;color:#c084fc;">
              <span>Total</span><span>${fmt(totalFinal)}</span>
            </div>
            <p style="margin:0.5rem 0 0;color:#a78bfa;font-size:0.85rem;">💳 Paiement : ${paiement}</p>
          </div>
        </div>
      </div>
    `
  };

  try {
    const RESEND_KEY = process.env.RESEND_API_KEY;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(emailClient),
    });

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(emailAdmin),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur envoi email" });
  }
}
