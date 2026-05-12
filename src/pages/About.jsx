const TEAM = [
  { emoji: "👨‍💼", name: "MAGHOUMBOU Shean-Hadley", role: "CEO & Fondateur"       },
  { emoji: "👩‍💻", name: "ETHOUGHE Killiann",        role: "Directrice Technique"  },
  { emoji: "👨‍🎨", name: "Patrick Mba",              role: "Design & UX"           },
  { emoji: "👩‍📦", name: "Aïcha Diallo",             role: "Logistique"             },
];

const VALUES = [
  { icon: "✦",  title: "Authenticité",    desc: "100% de nos produits sont originaux, sourcés directement auprès des constructeurs."  },
  { icon: "🛡️", title: "Garantie Locale", desc: "12 mois de garantie sur tous nos appareils, SAV basé à Libreville."                  },
  { icon: "🚚", title: "Livraison Rapide",desc: "Livraison en 24h à Libreville, 48h pour le reste du Gabon."                          },
];

function About() {
  return (
    <div className="page">

      {/* Hero */}
      <div className="about-hero">
        <p className="eyebrow">✦ Notre histoire</p>
        <h1 className="page-title">
          Née à Libreville,{" "}
          <em>Reconnue Partout</em>
        </h1>
        <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: 600, margin: "1rem auto 0" }}>
          LuxPhone est née de la conviction qu'un Gabonais mérite d'accéder
          aux mêmes technologies premium qu'ailleurs, sans compromis sur la
          qualité ni sur le service.
        </p>
      </div>

      {/* Mission */}
      <div className="about-grid">

        <div className="about-visual">
          <div className="about-img-box">
            <span style={{ fontSize: "6rem" }}>📱</span>
          </div>
        </div>

        <div className="about-content">
          <h2>Notre Mission</h2>
          <p>
            Fondée en 2019, LuxPhone s'est imposée comme la référence en
            téléphonie haut de gamme au Gabon. Nous proposons une sélection
            rigoureuse des meilleurs smartphones mondiaux, avec un service
            après-vente à la hauteur.
          </p>
          <p>
            Chaque appareil est vérifié, authentifié et accompagné d'une
            garantie locale. Parce que vous méritez la tranquillité d'esprit
            autant que la performance.
          </p>

          <div className="values-list">
            {VALUES.map((v) => (
              <div className="value-item" key={v.title}>
                <span className="value-icon">{v.icon}</span>
                <div className="value-text">
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Équipe */}
      <section className="team-section">
        <div className="section-header">
          <p className="eyebrow">✦ L'équipe</p>
          <h2 className="page-title">Ceux Qui Font <em>LuxPhone</em></h2>
        </div>

        <div className="team-grid">
          {TEAM.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-avatar">{member.emoji}</div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;
