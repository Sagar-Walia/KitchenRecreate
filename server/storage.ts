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
      {
        id: randomUUID(),
        name: "Chicken Masala",
        description: "Delight in our Chicken Masala, featuring tender chicken pieces simmered in a rich aromatic sauce infused with a symphony of traditional Indian spices.",
        price: 300,
        weight: "Box",
        image: "https://files.cdn-files-a.com/uploads/11010256/800_687fcef173bb1.jpg",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Matar Paneer",
        description: "A classic North Indian curry dish that combines tender paneer (Indian cottage cheese) and green peas (matar) in a creamy and rich gravy, flavored with aromatic spices for a delightful culinary experience.",
        price: 280,
        weight: "Box",
        image: "https://files.cdn-files-a.com/uploads/11010256/800_687fd0d831813.jpg",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Yogurt Pepper Chicken",
        description: "Tender chicken pieces marinated in creamy yogurt, butter and perfectly spiced with freshly ground black pepper, creating a harmonious blend of brightness and warmth in every bite.",
        price: 320,
        weight: "Box",
        image: "https://files.cdn-files-a.com/uploads/11010256/800_687fd90c47446.jpg",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Kadhai Paneer",
        description: "Kadhai Paneer is a flavorful Indian dish featuring succulent cubes of cottage cheese stir-fried with a blend of aromatic spices, bell peppers, and onions, served in a thick, flavorful tomato-based gravy, perfect for pairing with naan or steamed rice.",
        price: 300,
        weight: "Box",
        image: "https://files.cdn-files-a.com/uploads/11010256/800_687fd9bc57dff.jpg",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Fruit Cream",
        description: "A delightful dessert made with fresh seasonal fruits mixed in rich cream, offering a perfect balance of sweetness and freshness that melts in your mouth.",
        price: 300,
        weight: "Box",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "desserts"
      },
      {
        id: randomUUID(),
        name: "Butter Cake",
        description: "A moist and fluffy butter cake made with premium butter and fresh ingredients, offering a rich vanilla flavor that melts in your mouth with every bite.",
        price: 300,
        weight: "500gm",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "desserts"
      },
      {
        id: randomUUID(),
        name: "Fresh Mixed Vegetables",
        description: "A healthy and nutritious mix of freshly sourced seasonal vegetables, lightly seasoned and cooked to perfection, maintaining their natural flavors and nutrients.",
        price: 180,
        weight: "Box",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "fresh"
      },
      {
        id: randomUUID(),
        name: "Fresh Green Salad",
        description: "A crisp and refreshing salad made with farm-fresh greens, tomatoes, cucumbers, and a light homemade dressing that brings out the natural flavors.",
        price: 120,
        weight: "Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
