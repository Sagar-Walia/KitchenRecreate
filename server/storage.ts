import { type MenuItem, type InsertMenuItem, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Menu Items
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  getMenuItem(id: string): Promise<MenuItem | undefined>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private menuItems: Map<string, MenuItem>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.menuItems = new Map();
    this.contacts = new Map();
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    const defaultMenuItems: MenuItem[] = [
      // Main Menu Items
      {
        id: randomUUID(),
        name: "Chicken Masala",
        description: "Delight in our Chicken Masala, featuring tender chicken pieces simmered in a rich aromatic sauce infused with a symphony of traditional Indian spices.",
        price: 350,
        weight: "500gm",
        image: "/attached_assets/Chichen Masala_1754638470090.jpg",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Matar Paneer",
        description: "A classic North Indian curry dish that combines tender paneer (Indian cottage cheese) and green peas (matar) in a creamy and rich gravy, flavored with aromatic spices for a delightful culinary experience.",
        price: 280,
        weight: "500gm",
        image: "/attached_assets/Matar Paneer_1754638470090.jpg",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Yogurt Pepper Chicken",
        description: "Tender chicken pieces marinated in creamy yogurt, butter and perfectly spiced with freshly ground black pepper, creating a harmonious blend of brightness and warmth in every bite.",
        price: 320,
        weight: "500gm",
        image: "/attached_assets/Yogurt Pepper Chicken_1754638470090.jpg",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Kadhai Paneer",
        description: "Kadhai Paneer is a flavorful Indian dish featuring succulent cubes of cottage cheese stir-fried with a blend of aromatic spices, bell peppers, and onions, served in a thick, flavorful tomato-based gravy, perfect for pairing with naan or steamed rice.",
        price: 300,
        weight: "500gm",
        image: "/attached_assets/Kadhai Paneer_1754638470090.jpg",
        category: "main"
      },
      
      // Desserts
      {
        id: randomUUID(),
        name: "Fruit Cream",
        description: "A delectable dessert comprising a medley of fresh, seasonal fruits gently folded with velvety smooth cream, lightly sweetened to perfection, and served chilled for a refreshing and indulgent finish.",
        price: 200,
        weight: "500gm",
        image: "/attached_assets/fruit cream_1754638470090.jpg",
        category: "desserts"
      },
      {
        id: randomUUID(),
        name: "Gulab Jamun",
        description: "A classic Indian dessert, warm and luscious deep-fried dough balls soaked in a fragrant rose and cardamom-infused syrup, offering a melt-in-your-mouth sweetness that's perfect for satisfying your dessert cravings. Made with fresh Paneer and Khoya.",
        price: 30,
        weight: "Piece",
        image: "/attached_assets/Gulab Jamun_1754638470090.jpg",
        category: "desserts"
      },
      {
        id: randomUUID(),
        name: "Desi Kunafa",
        description: "A classic Middle Eastern dessert with an Indian twist made of fine shredded pastry, layered with Kesar Elaichi Rabdi, garnished with roasted Pista and Almond.",
        price: 70,
        weight: "Piece",
        image: "/attached_assets/Kunafa_1754638470090.jpg",
        category: "desserts"
      },
      {
        id: randomUUID(),
        name: "Choco-Walnut Fudge Cake",
        description: "Indulge in our Choco-Walnut Fudge, a decadent dessert crafted with rich, velvety chocolate and garnished with crunchy, toasted walnuts, creating a harmonious blend of textures and flavors.",
        price: 700,
        weight: "500gm",
        image: "/attached_assets/Choco Walnut Fudge_1754638470090.jpg",
        category: "desserts"
      },
      {
        id: randomUUID(),
        name: "Carrot Cake (Eggless)",
        description: "Delight in our moist and flavorful Carrot Cake, expertly prepared without eggs. Infused with the rich taste of grated carrots, aromatic spices, and a hint of vanilla.",
        price: 350,
        weight: "500gm",
        image: "/attached_assets/Carrot Cake (Eggless)_1754638470090.jpg",
        category: "desserts"
      },
      {
        id: randomUUID(),
        name: "Shahi Tukda",
        description: "A lavish Indian dessert made of crisp fried bread slices soaked in saffron-infused syrup, topped with Rabdi and coconut shredding.",
        price: 20,
        weight: "Piece",
        image: "/attached_assets/Shahi Tukda_1754638470090.jpg",
        category: "desserts"
      },
      
      // Freshly Made Items
      {
        id: randomUUID(),
        name: "Fresh Home-made Paneer",
        description: "Experience the delightful flavors of our 'Fresh Home-made Paneer,' crafted daily using traditional techniques to ensure superior taste and texture. Perfectly balanced for any palate.",
        price: 250,
        weight: "500gm",
        image: "/attached_assets/Paneer_1754638470090.jpg",
        category: "fresh"
      },
      {
        id: randomUUID(),
        name: "Moong Daal Atta Mathri",
        description: "A delightful crunchy snack crafted with a blend of moong dal flour and whole wheat flour, delicately seasoned with aromatic spices, and fried to perfection. This savory treat pairs wonderfully with tea.",
        price: 300,
        weight: "500gm",
        image: "/attached_assets/Moong Daal Atta Mathri_1754638470090.jpg",
        category: "fresh"
      },
      {
        id: randomUUID(),
        name: "Dryfruit Murmure Mixture",
        description: "A delightful blend of crisp murmure (puffed rice) combined with a medley of premium dry fruits, lightly spiced and perfectly roasted to create a harmonious snack that's both delicious and health-conscious.",
        price: 350,
        weight: "500gm",
        image: "/attached_assets/Dryfruit Murmure mixture_1754638470090.jpg",
        category: "fresh"
      },
      {
        id: randomUUID(),
        name: "Matthi",
        description: "Mathi, also known as mathri, is a popular Indian savory snack, often described as a crispy, fried cracker. It's typically made from a dough of flour and ghee then deep-fried until golden brown. Mathi is a common tea-time snack and is also enjoyed during festivals and special occasions.",
        price: 200,
        weight: "500gm",
        image: "/attached_assets/Matthi_1754638470090.jpg",
        category: "fresh"
      },
      {
        id: randomUUID(),
        name: "Namak Para",
        description: "Namak Para is a popular Indian savory snack similar to Mathri, but with an exciting twist - it's enhanced with tangy masala spices that give it a zesty, flavorful kick. These crispy, diamond-shaped treats are made from flour and ghee, then deep-fried until golden brown and seasoned with aromatic spice blends.",
        price: 200,
        weight: "500gm",
        image: "/attached_assets/Namak Paare_1754638470090.jpg",
        category: "fresh"
      }
    ];

    defaultMenuItems.forEach(item => {
      this.menuItems.set(item.id, item);
    });
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(item => item.category === category);
  }

  async getMenuItem(id: string): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }

  async createMenuItem(insertItem: InsertMenuItem): Promise<MenuItem> {
    const id = randomUUID();
    const item: MenuItem = { 
      weight: "Box",
      category: "main",
      ...insertItem, 
      id 
    };
    this.menuItems.set(id, item);
    return item;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      phone: null,
      ...insertContact, 
      id,
      createdAt: new Date().toISOString()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
