export const MENU = [
  {
    id: "hot",
    title: "Boissons Chaudes",
    subtitle: "Cafés & Chocolats",
    icon: "☕",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80",
    groups: [
      {
        name: "Nos Cafés",
        note: "✨ Rendez-le spécial — ajoutez Nestlé +1,5 DT ou Arôme +1 DT",
        items: [
          { name: "Express", price: "3" },
          { name: "Cappucin", price: "3,5" },
          { name: "Café Crème", price: "4" },
          { name: "Américain", price: "3" },
          { name: "Café Turc — قهوة عربي", price: "5" },
          { name: "Nescafé", price: "4" },
          { name: "Chocolat au Lait", price: "4" },
          { name: "Cappucino", price: "5" },
        ],
      },
      {
        name: "Chocolat Chaud",
        items: [
          { name: "Chocolat Chaud Classique", price: "5" },
          { name: "Nutella", price: "8" },
          { name: "Noisette", price: "7" },
          { name: "Caramel", price: "7" },
          { name: "Vanille", price: "7" },
          { name: "Overdose Vanilla", price: "12", star: true },
        ],
      },
    ],
  },
  {
    id: "cold",
    title: "Boissons Froides",
    subtitle: "Jus Frais & Cocktails",
    icon: "🍹",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1600&q=80",
    groups: [
      {
        name: "Jus Frais",
        items: [
          { name: "Citronade", price: "5" },
          { name: "Fraise", price: "6" },
          { name: "Orange", price: "5" },
          { name: "Ananas", price: "6" },
          { name: "Lait de Poule + Dattes", price: "8" },
          { name: "Cocktail", price: "11", star: true },
        ],
      },
    ],
  },
  {
    id: "frozen",
    title: "Boissons Glacées",
    subtitle: "Mojitos & Milkshakes",
    icon: "🧊",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1600&q=80",
    groups: [
      {
        name: "Mojitos",
        items: [
          { name: "Virgin", price: "6" },
          { name: "Citron", price: "7" },
          { name: "Fraise", price: "7" },
          { name: "Blue Sky", price: "7" },
          { name: "Blue Moon", price: "7" },
          { name: "Fruits Rouges", price: "8" },
          { name: "Piña Colada", price: "8" },
          { name: "Energitic", price: "10", star: true },
        ],
      },
      {
        name: "Milkshakes",
        items: [
          { name: "Vanille", price: "7" },
          { name: "Nutella", price: "9" },
          { name: "Chocolat", price: "8" },
        ],
      },
    ],
  },
  {
    id: "tea",
    title: "Notre Thé",
    subtitle: "Thé Traditionnel",
    icon: "🍵",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
    groups: [
      {
        name: "Thé",
        items: [
          { name: "Amande", price: "7" },
          { name: "Bondok", price: "6" },
          { name: "Mixte", price: "7,5" },
        ],
      },
    ],
  },
  {
    id: "crepes",
    title: "Crêpes",
    subtitle: "Salées & Sucrées",
    icon: "🥞",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1600&q=80",
    groups: [
      {
        name: "Crêpes Salées",
        items: [
          { name: "Thon Fromage", price: "7" },
          { name: "Jambon Fromage", price: "7" },
          { name: "Spécial", price: "10", star: true },
        ],
      },
      {
        name: "Crêpes Sucrées",
        items: [
          { name: "Chocolat", price: "7" },
          { name: "Nutella", price: "9" },
          { name: "Nutella Banane", price: "12" },
          { name: "Nutella Banane Amande", price: "14", star: true },
        ],
      },
    ],
  },
  {
    id: "dessert",
    title: "Nos Desserts",
    subtitle: "Douceurs Maison",
    icon: "🍰",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80",
    groups: [
      {
        name: "Desserts",
        items: [
          { name: "Tarte", price: "4" },
          { name: "Gâteau", price: "6" },
          { name: "Cheesecake", price: "7" },
          { name: "Cake", price: "3" },
          { name: "Bousa", price: "6" },
          { name: "Assida", price: "6" },
        ],
      },
    ],
  },
  {
    id: "chicha",
    title: "Notre Chicha",
    subtitle: "C'est Notre Signature ✦",
    icon: "💨",
    signature: true,
    image:
      "https://images.unsplash.com/photo-1635547821500-77542481940c?auto=format&fit=crop&w=1600&q=80",
    groups: [
      {
        name: "Chicha",
        items: [
          { name: "Chicha Fakher / Adalya", price: "7" },
          {
            name: "Chicha Spécial",
            desc: "glaçons + assiette de fruits",
            price: "10",
            star: true,
          },
          { name: "Tapis — Chkoba · Rami · Belote", price: "5" },
        ],
      },
    ],
  },
  {
    id: "drinks",
    title: "Eaux & Sodas",
    subtitle: "Boissons Fraîches",
    icon: "🥤",
    image:
      "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=1600&q=80",
    groups: [
      {
        name: "Eau",
        items: [
          { name: "Eau 0,5 L", price: "2" },
          { name: "Eau 1 L", price: "3" },
          { name: "Eau Gazéifiée", price: "3,5" },
        ],
      },
      {
        name: "Sodas — 3,5 DT",
        items: [
          { name: "Boga Cidre", price: "3,5" },
          { name: "Boga Menthe", price: "3,5" },
          { name: "Boga Lime", price: "3,5" },
          { name: "Fanta", price: "3,5" },
          { name: "Orangina", price: "3,5" },
          { name: "Sprite", price: "3,5" },
          { name: "Schweppes Grenadine", price: "3,5" },
          { name: "Schweppes Ananas", price: "3,5" },
          { name: "Schweppes Piña Colada", price: "3,5" },
          { name: "Schweppes Citron", price: "3,5" },
          { name: "Coca-Cola", price: "3,5" },
          { name: "Coca Zéro", price: "3,5" },
          { name: "Apla", price: "3,5" },
        ],
      },
    ],
  },
];
