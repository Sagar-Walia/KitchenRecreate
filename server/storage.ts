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
        price: 350,
        weight: "500gm",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Matar Paneer",
        description: "A classic North Indian curry dish that combines tender paneer (Indian cottage cheese) and green peas (matar) in a creamy and rich gravy, flavored with aromatic spices for a delightful culinary experience.",
        price: 280,
        weight: "500gm",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Yogurt Pepper Chicken",
        description: "Tender chicken pieces marinated in creamy yogurt, butter and perfectly spiced with freshly ground black pepper, creating a harmonious blend of brightness and warmth in every bite.",
        price: 320,
        weight: "500gm",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "main"
      },
      {
        id: randomUUID(),
        name: "Kadhai Paneer",
        description: "Kadhai Paneer is a flavorful Indian dish featuring succulent cubes of cottage cheese stir-fried with a blend of aromatic spices, bell peppers, and onions, served in a thick, flavorful tomato-based gravy, perfect for pairing with naan or steamed rice.",
        price: 300,
        weight: "500gm",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "main"
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
    const item: MenuItem = { ...insertItem, id };
    this.menuItems.set(id, item);
    return item;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
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
