const products = [

  // ══════════════════════════════════════
  // SAMSUNG — GALAXY S SERIES
  // ══════════════════════════════════════
  {
    id: "s22u", brand: "Samsung", name: "Galaxy S22 Ultra", storage: "256 Go", camera: "108 MP", battery: "5000 mAh", color: "Phantom Black", badge: null, price: 230000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-1.jpg",
    description: "Le Galaxy S22 Ultra intègre le S Pen pour la première fois dans la gamme S, avec un capteur 108 MP et une autonomie de 5000 mAh.",
  },
  {
    id: "s21u", brand: "Samsung", name: "Galaxy S21 Ultra", storage: "256 Go", camera: "108 MP", battery: "5000 mAh", color: "Phantom Black", badge: "Bon Plan", price: 200000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg",
    description: "Le Galaxy S21 Ultra offre un zoom 100x Space Zoom et un écran Dynamic AMOLED 6,8\" 120Hz.",
  },
  {
    id: "s21", brand: "Samsung", name: "Galaxy S21", storage: "128 Go", camera: "64 MP", battery: "4000 mAh", color: "Phantom Gray", badge: "Bon Plan", price: 135000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-1.jpg",
    description: "Le Galaxy S21 combine design premium, écran 120Hz et triple caméra à un prix accessible.",
  },
  {
    id: "s23u", brand: "Samsung", name: "Galaxy S23 Ultra", storage: "256 Go", camera: "200 MP", battery: "5000 mAh", color: "Phantom Black", badge: null, price: 325000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg",
    description: "Le Galaxy S23 Ultra inaugure le capteur 200 MP et le Snapdragon 8 Gen 2 exclusif Samsung.",
  },
  {
    id: "s24u", brand: "Samsung", name: "Galaxy S24 Ultra", storage: "256 Go", camera: "200 MP", battery: "5000 mAh", color: "Titanium Black", badge: null, price: 460000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-1.jpg",
    description: "Le Galaxy S24 Ultra introduit le châssis en titane, Galaxy AI et un S Pen redessiné.",
  },
  {
    id: "s25u", brand: "Samsung", name: "Galaxy S25 Ultra", storage: "256 Go", camera: "200 MP", battery: "5000 mAh", color: "Titanium Black", badge: "Nouveau", price: 565000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-1.jpg",
    description: "Le Galaxy S25 Ultra propulse Galaxy AI avec le Snapdragon 8 Elite et un S Pen ultra-précis.",
  },

  // ══════════════════════════════════════
  // SAMSUNG — GALAXY Z FOLD
  // ══════════════════════════════════════
  {
    id: "fold7", brand: "Samsung", name: "Galaxy Z Fold 7", storage: "256 Go", camera: "200 MP", battery: "4400 mAh", color: "Black", badge: "Nouveau", price: 890000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold7-1.jpg",
    description: "Le Galaxy Z Fold 7 est le smartphone pliable le plus fin jamais créé par Samsung, avec un écran intérieur 8\" et Galaxy AI.",
  },
  {
    id: "fold6", brand: "Samsung", name: "Galaxy Z Fold 6", storage: "256 Go", camera: "50 MP", battery: "4400 mAh", color: "Black", badge: null, price: 470000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold6-1.jpg",
    description: "Le Galaxy Z Fold 6 offre un design plat, des coins arrondis et Galaxy AI intégré.",
  },
  {
    id: "fold5", brand: "Samsung", name: "Galaxy Z Fold 5", storage: "256 Go", camera: "50 MP", battery: "4400 mAh", color: "Icy Blue", badge: null, price: 350000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold5-1.jpg",
    description: "Le Galaxy Z Fold 5 introduit la charnière FlexHinge sans espace pour un pliage parfait.",
  },
  {
    id: "fold4", brand: "Samsung", name: "Galaxy Z Fold 4", storage: "256 Go", camera: "50 MP", battery: "4400 mAh", color: "Phantom Black", badge: "Promo", price: 315000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold4-1.jpg",
    description: "Le Galaxy Z Fold 4 améliore l'ergonomie et la caméra avec un capteur principal 50 MP.",
  },
  {
    id: "fold3", brand: "Samsung", name: "Galaxy Z Fold 3", storage: "256 Go", camera: "12 MP", battery: "4400 mAh", color: "Phantom Black", badge: "Bon Plan", price: 280000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold3-5g-1.jpg",
    description: "Le Galaxy Z Fold 3 est le premier pliable compatible S Pen avec un écran sous la caméra.",
  },

  // ══════════════════════════════════════
  // SAMSUNG — GALAXY Z FLIP
  // ══════════════════════════════════════
  {
    id: "flip3", brand: "Samsung", name: "Galaxy Z Flip 3", storage: "128 Go", camera: "12 MP", battery: "3300 mAh", color: "Cream", badge: "Bon Plan", price: 180000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip3-5g-1.jpg",
    description: "Le Galaxy Z Flip 3 popularise le format pliable avec son grand écran de couverture coloré.",
  },
  {
    id: "flip4", brand: "Samsung", name: "Galaxy Z Flip 4", storage: "128 Go", camera: "12 MP", battery: "3700 mAh", color: "Bora Purple", badge: null, price: 190000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip4-1.jpg",
    description: "Le Galaxy Z Flip 4 améliore l'autonomie et la charge rapide 25W.",
  },
  {
    id: "flip5", brand: "Samsung", name: "Galaxy Z Flip 5", storage: "256 Go", camera: "12 MP", battery: "3700 mAh", color: "Mint", badge: null, price: 230000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip5-1.jpg",
    description: "Le Galaxy Z Flip 5 introduit le Flex Window 3,4\" pour voir et faire plus sans ouvrir le téléphone.",
  },
  {
    id: "flip6", brand: "Samsung", name: "Galaxy Z Flip 6", storage: "256 Go", camera: "50 MP", battery: "4000 mAh", color: "Mint", badge: null, price: 310000,
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip6-1.jpg",
    description: "Le Galaxy Z Flip 6 intègre Galaxy AI, un capteur 50 MP et le Snapdragon 8 Gen 3.",
  },

  // ══════════════════════════════════════
  // APPLE — iPHONE (du plus récent au plus ancien)
  // ══════════════════════════════════════
  {
    id: "ip17pm512", brand: "Apple", name: "iPhone 17 Pro Max 512Go", storage: "512 Go", camera: "48 MP", battery: "4685 mAh", color: "Titane Naturel", badge: "Nouveau", price: 1250000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-max-1.jpg",
    description: "L'iPhone 17 Pro Max 512 Go offre une autonomie record, la puce A19 Pro et un zoom optique 5x.",
  },
  {
    id: "ip17pm256", brand: "Apple", name: "iPhone 17 Pro Max 256Go", storage: "256 Go", camera: "48 MP", battery: "4685 mAh", color: "Titane Naturel", badge: "Nouveau", price: 1110000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-max-1.jpg",
    description: "L'iPhone 17 Pro Max 256 Go allie la puce A19 Pro, Apple Intelligence et un design en titane premium.",
  },
  {
    id: "ip17pro", brand: "Apple", name: "iPhone 17 Pro 256Go", storage: "256 Go", camera: "48 MP", battery: "3274 mAh", color: "Titane Blanc", badge: "Nouveau", price: 1080000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-1.jpg",
    description: "L'iPhone 17 Pro combine la puce A19 Pro, un écran ProMotion 120Hz et le bouton Action personnalisable.",
  },
  {
    id: "ip17air", brand: "Apple", name: "iPhone 17 Air 256Go", storage: "256 Go", camera: "48 MP", battery: "3692 mAh", color: "Bleu Ciel", badge: "Nouveau", price: 690000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-air-1.jpg",
    description: "L'iPhone 17 Air est le smartphone le plus fin d'Apple — ultra-léger avec la puce A18 et Apple Intelligence.",
  },
  {
    id: "ip16pm", brand: "Apple", name: "iPhone 16 Pro Max 256Go", storage: "256 Go", camera: "48 MP", battery: "4685 mAh", color: "Titane Désert", badge: null, price: 740000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-1.jpg",
    description: "L'iPhone 16 Pro Max dispose d'un écran 6,9\" ProMotion et du bouton Contrôle de l'Appareil photo.",
  },
  {
    id: "ip16pro256", brand: "Apple", name: "iPhone 16 Pro 256Go", storage: "256 Go", camera: "48 MP", battery: "3582 mAh", color: "Titane Noir", badge: null, price: 645000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-1.jpg",
    description: "L'iPhone 16 Pro avec bouton Contrôle de l'Appareil photo, puce A18 Pro et écran 6,3\" ProMotion.",
  },
  {
    id: "ip16pro128", brand: "Apple", name: "iPhone 16 Pro 128Go", storage: "128 Go", camera: "48 MP", battery: "3582 mAh", color: "Titane Blanc", badge: null, price: 600000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-1.jpg",
    description: "L'iPhone 16 Pro 128 Go offre la puissance de la puce A18 Pro et Apple Intelligence.",
  },
  {
    id: "ip16-256", brand: "Apple", name: "iPhone 16 256Go", storage: "256 Go", camera: "48 MP", battery: "3561 mAh", color: "Ultramarine", badge: null, price: 520000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-1.jpg",
    description: "L'iPhone 16 256 Go avec puce A18, bouton Contrôle de l'Appareil photo et Apple Intelligence.",
  },
  {
    id: "ip16-128", brand: "Apple", name: "iPhone 16 128Go", storage: "128 Go", camera: "48 MP", battery: "3561 mAh", color: "Rose", badge: null, price: 490000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-1.jpg",
    description: "L'iPhone 16 128 Go introduit Apple Intelligence et le bouton Contrôle de l'Appareil photo.",
  },
  {
    id: "ip15pm", brand: "Apple", name: "iPhone 15 Pro Max 256Go", storage: "256 Go", camera: "48 MP", battery: "4422 mAh", color: "Titane Noir", badge: "Promo", price: 585000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    description: "L'iPhone 15 Pro Max avec zoom tétraprisme 5x, titane aéronautique et puce A17 Pro.",
  },
  {
    id: "ip15pro256", brand: "Apple", name: "iPhone 15 Pro 256Go", storage: "256 Go", camera: "48 MP", battery: "3274 mAh", color: "Titane Blanc", badge: "Promo", price: 560000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg",
    description: "L'iPhone 15 Pro 256 Go avec bouton Action, port USB-C et puce A17 Pro.",
  },
  {
    id: "ip15pro128", brand: "Apple", name: "iPhone 15 Pro 128Go", storage: "128 Go", camera: "48 MP", battery: "3274 mAh", color: "Titane Naturel", badge: "Promo", price: 540000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg",
    description: "L'iPhone 15 Pro en titane avec le bouton Action et la puce A17 Pro.",
  },
  {
    id: "ip15-256", brand: "Apple", name: "iPhone 15 256Go", storage: "256 Go", camera: "48 MP", battery: "3349 mAh", color: "Bleu", badge: null, price: 395000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
    description: "L'iPhone 15 256 Go avec Dynamic Island, USB-C et capteur principal 48 MP.",
  },
  {
    id: "ip15-128", brand: "Apple", name: "iPhone 15 128Go", storage: "128 Go", camera: "48 MP", battery: "3349 mAh", color: "Rose", badge: null, price: 380000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
    description: "L'iPhone 15 avec Dynamic Island et port USB-C.",
  },
  {
    id: "ip14pm256", brand: "Apple", name: "iPhone 14 Pro Max 256Go", storage: "256 Go", camera: "48 MP", battery: "4323 mAh", color: "Violet Intense", badge: "Promo", price: 410000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    description: "L'iPhone 14 Pro Max avec Dynamic Island, Always-On Display et capteur 48 MP.",
  },
  {
    id: "ip14pm128", brand: "Apple", name: "iPhone 14 Pro Max 128Go", storage: "128 Go", camera: "48 MP", battery: "4323 mAh", color: "Noir Spatial", badge: "Promo", price: 390000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    description: "L'iPhone 14 Pro Max 128 Go, le premier avec Dynamic Island et écran Always-On.",
  },
  {
    id: "ip14pro256", brand: "Apple", name: "iPhone 14 Pro 256Go", storage: "256 Go", camera: "48 MP", battery: "3200 mAh", color: "Or", badge: "Promo", price: 370000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-1.jpg",
    description: "L'iPhone 14 Pro avec Dynamic Island et capteur principal 48 MP.",
  },
  {
    id: "ip14pro128", brand: "Apple", name: "iPhone 14 Pro 128Go", storage: "128 Go", camera: "48 MP", battery: "3200 mAh", color: "Noir Spatial", badge: "Promo", price: 370000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-1.jpg",
    description: "L'iPhone 14 Pro 128 Go avec Dynamic Island et puce A16 Bionic.",
  },
  {
    id: "ip14-256", brand: "Apple", name: "iPhone 14 256Go", storage: "256 Go", camera: "12 MP", battery: "3279 mAh", color: "Bleu", badge: null, price: 285000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg",
    description: "L'iPhone 14 256 Go avec détection des accidents et SOS Urgence par satellite.",
  },
  {
    id: "ip14-128", brand: "Apple", name: "iPhone 14 128Go", storage: "128 Go", camera: "12 MP", battery: "3279 mAh", color: "Minuit", badge: null, price: 270000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg",
    description: "L'iPhone 14 avec puce A15 Bionic, détection des accidents et photos améliorées.",
  },
  {
    id: "ip13pm256", brand: "Apple", name: "iPhone 13 Pro Max 256Go", storage: "256 Go", camera: "12 MP", battery: "4352 mAh", color: "Vert Alpin", badge: "Promo", price: 350000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-1.jpg",
    description: "L'iPhone 13 Pro Max 256 Go avec ProMotion 120Hz et zoom tétraprisme 3x.",
  },
  {
    id: "ip13pm128", brand: "Apple", name: "iPhone 13 Pro Max 128Go", storage: "128 Go", camera: "12 MP", battery: "4352 mAh", color: "Or", badge: "Promo", price: 330000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-1.jpg",
    description: "L'iPhone 13 Pro Max avec le meilleur écran ProMotion et la plus grande batterie de la gamme.",
  },
  {
    id: "ip13pro256", brand: "Apple", name: "iPhone 13 Pro 256Go", storage: "256 Go", camera: "12 MP", battery: "3095 mAh", color: "Vert Alpin", badge: "Promo", price: 285000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-1.jpg",
    description: "L'iPhone 13 Pro 256 Go avec macro photo et mode cinématique.",
  },
  {
    id: "ip13pro128", brand: "Apple", name: "iPhone 13 Pro 128Go", storage: "128 Go", camera: "12 MP", battery: "3095 mAh", color: "Graphite", badge: "Promo", price: 270000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-1.jpg",
    description: "L'iPhone 13 Pro avec ProMotion 120Hz et triple caméra avec télémètre LiDAR.",
  },
  {
    id: "ip13-256", brand: "Apple", name: "iPhone 13 256Go", storage: "256 Go", camera: "12 MP", battery: "3227 mAh", color: "Rose", badge: null, price: 230000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-1.jpg",
    description: "L'iPhone 13 256 Go avec mode cinématique et puce A15 Bionic.",
  },
  {
    id: "ip13-128", brand: "Apple", name: "iPhone 13 128Go", storage: "128 Go", camera: "12 MP", battery: "3227 mAh", color: "Minuit", badge: null, price: 215000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-1.jpg",
    description: "L'iPhone 13 avec mode cinématique et puce A15 Bionic.",
  },
  {
    id: "ip12pm256", brand: "Apple", name: "iPhone 12 Pro Max 256Go", storage: "256 Go", camera: "12 MP", battery: "3687 mAh", color: "Bleu Pacifique", badge: "Bon Plan", price: 250000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg",
    description: "L'iPhone 12 Pro Max 256 Go avec stabilisation sensorielle et zoom 2,5x.",
  },
  {
    id: "ip12pm128", brand: "Apple", name: "iPhone 12 Pro Max 128Go", storage: "128 Go", camera: "12 MP", battery: "3687 mAh", color: "Or", badge: "Bon Plan", price: 240000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg",
    description: "L'iPhone 12 Pro Max avec le plus grand écran Super Retina XDR.",
  },
  {
    id: "ip12pro256", brand: "Apple", name: "iPhone 12 Pro 256Go", storage: "256 Go", camera: "12 MP", battery: "2815 mAh", color: "Argent", badge: "Bon Plan", price: 225000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-1.jpg",
    description: "L'iPhone 12 Pro 256 Go avec LiDAR et caméra ProRAW.",
  },
  {
    id: "ip12pro128", brand: "Apple", name: "iPhone 12 Pro 128Go", storage: "128 Go", camera: "12 MP", battery: "2815 mAh", color: "Graphite", badge: "Bon Plan", price: 210000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-1.jpg",
    description: "L'iPhone 12 Pro avec triple caméra, LiDAR et puce A14 Bionic.",
  },
  {
    id: "ip12-128", brand: "Apple", name: "iPhone 12 128Go", storage: "128 Go", camera: "12 MP", battery: "2815 mAh", color: "Bleu", badge: "Bon Plan", price: 170000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-1.jpg",
    description: "L'iPhone 12 128 Go avec 5G, OLED Super Retina XDR et puce A14.",
  },
  {
    id: "ip12-64", brand: "Apple", name: "iPhone 12 64Go", storage: "64 Go", camera: "12 MP", battery: "2815 mAh", color: "Rouge", badge: "Bon Plan", price: 160000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-1.jpg",
    description: "L'iPhone 12 avec 5G et écran OLED Super Retina XDR.",
  },
  {
    id: "ip11pm256", brand: "Apple", name: "iPhone 11 Pro Max 256Go", storage: "256 Go", camera: "12 MP", battery: "3969 mAh", color: "Vert Nuit", badge: "Bon Plan", price: 205000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-max-1.jpg",
    description: "L'iPhone 11 Pro Max avec triple caméra et la meilleure autonomie de son époque.",
  },
  {
    id: "ip11pm64", brand: "Apple", name: "iPhone 11 Pro Max 64Go", storage: "64 Go", camera: "12 MP", battery: "3969 mAh", color: "Or", badge: "Bon Plan", price: 205000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-max-1.jpg",
    description: "L'iPhone 11 Pro Max 64 Go avec triple caméra grand angle.",
  },
  {
    id: "ip11pro256", brand: "Apple", name: "iPhone 11 Pro 256Go", storage: "256 Go", camera: "12 MP", battery: "3046 mAh", color: "Argent", badge: "Bon Plan", price: 190000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-1.jpg",
    description: "L'iPhone 11 Pro 256 Go avec triple caméra et écran Super Retina XDR.",
  },
  {
    id: "ip11pro64", brand: "Apple", name: "iPhone 11 Pro 64Go", storage: "64 Go", camera: "12 MP", battery: "3046 mAh", color: "Gris Sidéral", badge: "Bon Plan", price: 186000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-1.jpg",
    description: "L'iPhone 11 Pro avec triple caméra et mode nuit.",
  },
  {
    id: "ip11-128", brand: "Apple", name: "iPhone 11 128Go", storage: "128 Go", camera: "12 MP", battery: "3110 mAh", color: "Violet", badge: "Bon Plan", price: 155000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",
    description: "L'iPhone 11 128 Go avec double caméra et mode nuit.",
  },
  {
    id: "ip11-64", brand: "Apple", name: "iPhone 11 64Go", storage: "64 Go", camera: "12 MP", battery: "3110 mAh", color: "Jaune", badge: "Bon Plan", price: 145000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",
    description: "L'iPhone 11 avec double caméra ultra grand-angle et puce A13 Bionic.",
  },
  {
    id: "ipxr-128", brand: "Apple", name: "iPhone XR 128Go", storage: "128 Go", camera: "12 MP", battery: "2942 mAh", color: "Corail", badge: "Bon Plan", price: 135000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xr-1.jpg",
    description: "L'iPhone XR avec écran Liquid Retina et puce A12 Bionic.",
  },
  {
    id: "ipxr-64", brand: "Apple", name: "iPhone XR 64Go", storage: "64 Go", camera: "12 MP", battery: "2942 mAh", color: "Bleu", badge: "Bon Plan", price: 115000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xr-1.jpg",
    description: "L'iPhone XR 64 Go, le meilleur rapport qualité-prix de la gamme iPhone.",
  },
];

export default products;
