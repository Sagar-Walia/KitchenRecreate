// client/src/components/menuData.ts

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  category: string; // "main", "desserts", "fresh"
}

const menuData: MenuItem[] = [
  // Main Menu
  {
    id: 1,
    name: "Chicken Masala",
    description: "Tender chicken pieces simmered in a rich aromatic sauce infused with a symphony of traditional Indian spices.",
    price: 350,
    weight: "box",
    image: "attached_assets/chicken_masala.jpg",
    category: "main"
  },
  {
    id: 2,
    name: "Matar Paneer",
    description: "A classic North Indian curry that combines tender paneer and green peas in a creamy and rich gravy.",
    price: 280,
    weight: "box",
    image: "attached_assets/matar_paneer.jpg",
    category: "main"
  },
  {
    id: 3,
    name: "Yogurt Pepper Chicken",
    description: "Tender chicken pieces marinated in creamy yogurt and perfectly spiced with freshly ground black pepper.",
    price: 320,
    weight: "box",
    image: "attached_assets/yogurt_pepper_chicken.jpg",
    category: "main"
  },
  {
    id: 4,
    name: "Kadhai Paneer",
    description: "A flavorful Indian dish featuring succulent cubes of cottage cheese stir-fried with bell peppers and onions, served in a thick, flavorful tomato-based gravy.",
    price: 300,
    weight: "box",
    image: "attached_assets/kadhai_paneer.jpg",
    category: "main"
  },

  // Desserts
  {
    id: 5,
    name: "Fruit Cream",
    description: "A delectable dessert comprising a medley of fresh, seasonal fruits gently folded with velvety smooth cream, lightly sweetened to perfection, and served chilled.",
    price: 325,
    weight: "500gm",
    image: "attached_assets/fruit_cream.jpg",
    category: "desserts"
  },
  {
    id: 6,
    name: "Gulab Jamun",
    description: "Warm and luscious deep-fried dough balls soaked in a fragrant rose and cardamom-infused syrup. Made with fresh Paneer and Khoya.",
    price: 300,
    weight: "500gm",
    image: "attached_assets/gulab_jamun.jpg",
    category: "desserts"
  },
  {
    id: 7,
    name: "Desi Kunafa",
    description: "A classic Middle Eastern dessert with an Indian twist made of fine shredded pastry, layered with Kesar Elaichi Rabdi, and garnished with roasted Pista and Almond.",
    price: 70,
    weight: "piece",
    image: "attached_assets/desi_kunafa.jpg",
    category: "desserts"
  },
  {
    id: 8,
    name: "Choco-Walnut Fudge Cake",
    description: "A decadent dessert crafted with rich, velvety chocolate and garnished with crunchy, toasted walnuts.",
    price: 700,
    weight: "500gm",
    image: "attached_assets/choco_walnut_fudge_cake.jpg",
    category: "desserts"
  },
  {
    id: 9,
    name: "Carrot Cake (Eggless)",
    description: "Moist and flavorful Carrot Cake, expertly prepared without eggs, and infused with the rich taste of grated carrots, aromatic spices, and a hint of vanilla.",
    price: 350,
    weight: "500gm",
    image: "attached_assets/carrot_cake.jpg",
    category: "desserts"
  },
  {
    id: 10,
    name: "Shahi Tukda",
    description: "A lavish Indian dessert made of crisp fried bread slices soaked in saffron-infused syrup, topped with Rabdi and coconut shredding.",
    price: 275,
    weight: "500gm",
    image: "attached_assets/shahi_tukda.jpg",
    category: "desserts"
  },
  {
    id: 11,
    name: "Butter Cake",
    description: "A classic pound cake with a rich and moist texture. A perfect companion for a cup of tea.",
    price: 300,
    weight: "500gm",
    image: "attached_assets/butter_cake.jpg",
    category: "desserts"
  },

  // Freshly Made
  {
    id: 12,
    name: "Fresh Home-made Paneer",
    description: "Crafted daily using traditional techniques to ensure superior taste and texture.",
    price: 250,
    weight: "500gm",
    image: "attached_assets/fresh_paneer.jpg",
    category: "fresh"
  },
  {
    id: 13,
    name: "Moong Daal Atta Mathri",
    description: "A crunchy snack crafted with a blend of moong dal flour and whole wheat flour, delicately seasoned with aromatic spices.",
    price: 300,
    weight: "500gm",
    image: "attached_assets/moong_daal_atta_mathri.jpg",
    category: "fresh"
  },
  {
    id: 14,
    name: "Dryfruit Murmure Mixture",
    description: "A delightful blend of crisp murmure (puffed rice) combined with a medley of premium dry fruits.",
    price: 350,
    weight: "500gm",
    image: "attached_assets/dryfruit_murmure_mixture.jpg",
    category: "fresh"
  },
  {
    id: 15,
    name: "Matthi",
    description: "A popular Indian savory snack, often described as a crispy, fried cracker, made from a dough of flour and ghee then deep-fried until golden brown.",
    price: 200,
    weight: "500gm",
    image: "attached_assets/matthi.jpg",
    category: "fresh"
  },
  {
    id: 16,
    name: "Namak Para",
    description: "A popular Indian savory snack similar to Mathri, but with an exciting twist—it's enhanced with tangy masala spices that give it a zesty, flavorful kick.",
    price: 200,
    weight: "500gm",
    image: "attached_assets/namak_para.jpg",
    category: "fresh"
  }
];

export default menuData;