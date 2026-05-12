export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { nom, email, sujet, message } = req.body;

  // Email au PATRON
  const emailAdmin = {
    from: "LuxPhone Contact <onboarding@resend.dev>",
    to: "maghoumbou.sheanhadley@gmail.com",
    subject: `✉️ Message de ${nom} — ${sujet || "Contact"}`,
    html: `
      <div style="background:#0a0010;color:#f0e6ff;font-family:sans-serif;max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#3d0070,#6b2fcb);padding:1.5rem;text-align:center;">
          <h1 style="margin:0;font-size:1.4rem;">✉️ Nouveau Message Contact</h1>
        </div>
        <div style="padding:2rem;">
          <p style="margin:0.3rem 0;"><strong>Nom :</strong> ${nom}</p>
          <p style="margin:0.3rem 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color:#c084fc;">${email}</a></p>
          <p style="margin:0.3rem 0;"><strong>Sujet :</strong> ${sujet || "Non précisé"}</p>
          <div style="margin-top:1.5rem;padding:1.2rem;background:#160025;border-radius:8px;border-left:3px solid #6b2fcb;">
            <p style="margin:0;line-height:1.7;white-space:pre-wrap;">${message}</p>
          </div>
          <a href="mailto:${email}" style="display:inline-block;margin-top:1.5rem;padding:0.7rem 1.5rem;background:linear-gradient(135deg,#3d0070,#6b2fcb);color:white;text-decoration:none;border-radius:6px;font-size:0.9rem;">
            Répondre à ${nom} →
          </a>
        </div>
        <div style="padding:1rem 2rem;text-align:center;border-top:1px solid #2a0040;color:#6b7280;font-size:0.75rem;">
          © 2025 LuxPhone · Libreville, Gabon
        </div>
      </div>
    `
  };

  // Email de confirmation au CLIENT
  const emailClient = {
    from: "LuxPhone <onboarding@resend.dev>",
    to: email,
    subject: "✅ Votre message a bien été reçu — LuxPhone",
    html: `
      <div style="background:#0a0010;color:#f0e6ff;font-family:sans-serif;max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#3d0070,#6b2fcb);padding:2rem;text-align:center;">
          <h1 style="margin:0;font-size:1.8rem;letter-spacing:0.05em;">LUXPHONE</h1>
          <p style="margin:0.5rem 0 0;opacity:0.8;">Libreville, Gabon 🇬🇦</p>
        </div>
        <div style="padding:2rem;">
          <h2 style="color:#c084fc;">Bonjour ${nom} 👋</h2>
          <p>Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais (généralement sous 2h ouvrées).</p>
          <div style="margin:1.5rem 0;padding:1.2rem;background:#160025;border-radius:8px;border-left:3px solid #6b2fcb;">
            <p style="margin:0 0 0.5rem;color:#a78bfa;font-size:0.8rem;">Votre message :</p>
            <p style="margin:0;line-height:1.7;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="color:#a78bfa;font-size:0.85rem;">
            Vous pouvez également nous joindre directement au <strong style="color:#f0e6ff;">+241 066 030 115</strong><br/>
            du Lundi au Samedi de 8h00 à 19h00.
          </p>
        </div>
        <div style="padding:1rem 2rem;text-align:center;border-top:1px solid #2a0040;color:#6b7280;font-size:0.75rem;">
          © 2025 LuxPhone · Libreville, Gabon
        </div>
      </div>
    `
  };

  try {
    const RESEND_KEY = process.env.RESEND_API_KEY;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(emailAdmin),
    });

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(emailClient),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur envoi email" });
  }
}
