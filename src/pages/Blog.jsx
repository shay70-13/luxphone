const POSTS = [
  {
    id: 1, emoji: "📸", cat: "Comparatif", date: "28 Avr 2025",
    title: "iPhone 15 Pro vs Galaxy S24 Ultra : le duel des titans",
    excerpt: "Deux flagships, deux philosophies. On pousse les limites pour vous dire lequel mérite votre investissement.",
    color: "linear-gradient(135deg, #1a001f, #0a0008)",
  },
  {
    id: 2, emoji: "🔋", cat: "Guide", date: "20 Avr 2025",
    title: "5 astuces pour doubler l'autonomie de votre smartphone",
    excerpt: "Des réglages simples mais méconnus qui peuvent transformer votre expérience quotidienne avec votre téléphone.",
    color: "linear-gradient(135deg, #0d001a, #050010)",
  },
  {
    id: 3, emoji: "🤖", cat: "Technologie", date: "15 Avr 2025",
    title: "L'IA dans nos téléphones : révolution ou gadget ?",
    excerpt: "De Google Photos à Samsung Galaxy AI, l'intelligence artificielle s'invite dans nos poches. Mais à quel prix ?",
    color: "linear-gradient(135deg, #15001f, #080010)",
  },
  {
    id: 4, emoji: "🌍", cat: "Conseils", date: "10 Avr 2025",
    title: "Quel smartphone choisir pour un budget de 300 000 XAF ?",
    excerpt: "Le marché mid-range offre des surprises de taille. Notre sélection des meilleurs rapports qualité-prix en 2025.",
    color: "linear-gradient(135deg, #1a001f, #0a0008)",
  },
  {
    id: 5, emoji: "🛡️", cat: "Sécurité", date: "2 Avr 2025",
    title: "Comment protéger vos données personnelles sur mobile",
    excerpt: "Les bonnes pratiques que tout utilisateur devrait adopter, expliquées simplement, sans jargon technique.",
    color: "linear-gradient(135deg, #0d001a, #050010)",
  },
  {
    id: 6, emoji: "📡", cat: "5G", date: "25 Mars 2025",
    title: "La 5G au Gabon : état des lieux et perspectives",
    excerpt: "Où en est le déploiement de la 5G en Afrique centrale ? Ce que ça change concrètement pour les utilisateurs.",
    color: "linear-gradient(135deg, #15001f, #080010)",
  },
];

function Blog() {
  return (
    <div className="page">

      {/* ── En-tête ── */}
      <div className="blog-hero">
        <p className="eyebrow">✦ Actualités</p>
        <h1 className="page-title">
          Le Magazine <em>LuxPhone</em>
        </h1>
        <p style={{ color: "var(--muted)", marginTop: "0.5rem" }}>
          Conseils, comparatifs et actualités tech — pour des choix éclairés.
        </p>
      </div>

      {/* ── Grille d'articles ── */}
      <div className="blog-grid">
        {POSTS.map((post) => (
          <article className="blog-card" key={post.id}>

            {/* Miniature */}
            <div className="blog-thumb" style={{ background: post.color }}>
              <span style={{ fontSize: "3.5rem" }}>{post.emoji}</span>
            </div>

            {/* Contenu */}
            <div className="blog-body">
              <div className="blog-meta">
                <span className="blog-cat">{post.cat}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="blog-read">Lire l'article →</span>
            </div>

          </article>
        ))}
      </div>

    </div>
  );
}

export default Blog;