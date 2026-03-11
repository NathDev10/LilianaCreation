/**
 * Pour ajouter les vraies photos :
 *
 * 1. Placez vos fichiers dans public/images/ en respectant cette structure :
 *    public/
 *    └── images/
 *        ├── creations/
 *        │   ├── bibis/
 *        │   │   ├── bibi-elegance-rose-1.jpg   ← mainImage
 *        │   │   ├── bibi-elegance-rose-2.jpg   ← images[0]
 *        │   │   └── bibi-elegance-rose-3.jpg   ← images[1]
 *        │   ├── chapeaux/
 *        │   └── bandeaux/
 *        ├── about/
 *        │   └── boutique.jpg
 *        └── creator/
 *            └── liliana.jpg
 *
 * 2. Renseignez les chemins ci-dessous (sans le "/" initial).
 *    Laissez null si la photo n'est pas encore disponible
 *    → un placeholder s'affichera automatiquement.
 *
 * Format recommandé : JPG 1200×900px, < 300 Ko (compressez sur squoosh.app)
 */

export const creations = [
  // ===== BIBIS =====
  {
    id: 1,
    name: 'Bibi Élégance Rose',
    category: 'bibis',
    mainImage: null, // ex: 'images/creations/bibis/bibi-elegance-rose-1.jpg'
    images: [null, null, null],
    description: "Un bibi raffiné orné d'une voilette délicate et d'une fleur en satin rose. Parfait pour les mariages et cocktails. Réalisé à la main avec un soin particulier pour chaque détail.",
    price: 85,
    materials: ['Feutre de laine', 'Voilette française', 'Fleur en satin', 'Épingle en cristal'],
    available: true,
    emoji: '🎩',
    color: '#8C2D3E',
  },
  {
    id: 2,
    name: 'Bibi Caprice Doré',
    category: 'bibis',
    mainImage: null, // ex: 'images/creations/bibis/bibi-caprice-dore-1.jpg'
    images: [null, null, null],
    description: "Un bibi audacieux avec des détails dorés et une plume de marabout. Son inclinaison parfaite lui confère un caractère unique et élégant, idéal pour les courses hippiques.",
    price: 95,
    materials: ['Paille naturelle tressée', 'Ruban doré', 'Plume de marabout', 'Base en sisal'],
    available: true,
    emoji: '🎩',
    color: '#B49A5E',
  },
  {
    id: 3,
    name: 'Bibi Minuet Violet',
    category: 'bibis',
    mainImage: null, // ex: 'images/creations/bibis/bibi-minuet-violet-1.jpg'
    images: [null, null, null],
    description: "Ce bibi moderne aux tons violets profonds associe sophistication et originalité. Sa forme asymétrique et son nœud en velours en font une pièce unique.",
    price: 75,
    materials: ['Velours de soie', 'Satin violet', 'Nœud papillon', 'Broche vintage'],
    available: false,
    emoji: '🎩',
    color: '#4A1020',
  },

  // ===== CHAPEAUX =====
  {
    id: 4,
    name: 'Chapeau Bohème Chic',
    category: 'chapeaux',
    mainImage: null, // ex: 'images/creations/chapeaux/chapeau-boheme-chic-1.jpg'
    images: [null, null, null],
    description: "Un grand chapeau de paille tressée aux allures bohèmes, agrémenté d'un ruban en lin naturel. Le compagnon idéal pour vos journées ensoleillées et escapades champêtres.",
    price: 120,
    materials: ['Paille de Pékin tressée', 'Ruban en lin', 'Doublure en coton', 'Fils de raphia'],
    available: true,
    emoji: '👒',
    color: '#8B7355',
  },
  {
    id: 5,
    name: 'Chapeau Romantique Rouge',
    category: 'chapeaux',
    mainImage: null, // ex: 'images/creations/chapeaux/chapeau-romantique-rouge-1.jpg'
    images: [null, null, null],
    description: "Un chapeau large bord en feutre rouge passion, orné d'une couronne de petites fleurs séchées. Romantique et audacieux, il transforme chaque tenue en œuvre d'art.",
    price: 145,
    materials: ['Feutre de laine merino', 'Fleurs séchées', 'Ruban de soie rouge', 'Fil de fer cousu'],
    available: true,
    emoji: '👒',
    color: '#6B1A2B',
  },
  {
    id: 6,
    name: 'Fedora Élégant Noir',
    category: 'chapeaux',
    mainImage: null, // ex: 'images/creations/chapeaux/fedora-elegant-noir-1.jpg'
    images: [null, null, null],
    description: "Un fedora intemporel en laine noire de haute qualité, avec un ruban tressé et une broche en cuivre. Sa silhouette classique s'adapte à toutes les occasions.",
    price: 135,
    materials: ['Laine vierge', 'Ruban tressé noir', 'Broche en cuivre', 'Crin de cheval intérieur'],
    available: true,
    emoji: '👒',
    color: '#1C1410',
  },

  // ===== BANDEAUX =====
  {
    id: 7,
    name: 'Bandeau Fleuri Printanier',
    category: 'bandeaux',
    mainImage: null, // ex: 'images/creations/bandeaux/bandeau-fleuri-printanier-1.jpg'
    images: [null, null, null],
    description: "Un bandeau délicat orné de fleurs en tissu aux tons pastels. Léger et confortable, il apporte une touche printanière et romantique à vos coiffures.",
    price: 45,
    materials: ['Coton biologique', 'Fleurs en tissu', 'Élastique confort', 'Fils de broderie'],
    available: true,
    emoji: '✨',
    color: '#8C2D3E',
  },
  {
    id: 8,
    name: 'Bandeau Teal Perlé',
    category: 'bandeaux',
    mainImage: null, // ex: 'images/creations/bandeaux/bandeau-teal-perle-1.jpg'
    images: [null, null, null],
    description: "Un bandeau structuré en velours orné de perles de rocaille cousues à la main. Son style seventies revisité est parfait pour les soirées festives.",
    price: 55,
    materials: ['Velours', 'Perles de rocaille', 'Structure en plastique souple', 'Doublure en satin'],
    available: true,
    emoji: '✨',
    color: '#4A3728',
  },
  {
    id: 9,
    name: 'Bandeau Mariage Ivoire',
    category: 'bandeaux',
    mainImage: null, // ex: 'images/creations/bandeaux/bandeau-mariage-ivoire-1.jpg'
    images: [null, null, null],
    description: "Un bandeau délicat pour mariées, orné de dentelle de Calais et de petites perles nacrées. Une touche finale parfaite pour sublimer la coiffure du grand jour.",
    price: 65,
    materials: ['Dentelle de Calais', 'Perles nacrées', 'Satin ivoire', 'Ruban de soie'],
    available: true,
    emoji: '✨',
    color: '#8B7355',
  },
];

export const getCategoryCreations = (category) => {
  if (!category || category === 'tous') return creations;
  return creations.filter((c) => c.category === category);
};
