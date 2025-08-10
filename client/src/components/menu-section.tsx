import menuData from "./menuData";
import { useState } from "react";
import type { MenuItem } from "./menuData";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("main");

  const handleWhatsAppOrder = (itemName: string, price: number) => {
    const message = `Hello! I'd like to order ${itemName} (₹${price}). Please let me know the availability and delivery details.`;
    const whatsappUrl = `https://wa.me/918095053609?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };



  const filteredItems = menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Mom's Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Craft your perfect meals effortlessly with authentic home-cooked dishes
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center mb-8">
          <div className="bg-warm-orange-100 rounded-full p-2 flex space-x-1">
            <button
              onClick={() => setActiveCategory("main")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeCategory === "main"
                  ? "bg-warm-orange-600 text-white"
                  : "text-warm-orange-600 hover:bg-warm-orange-200"
              }`}
            >
              Main Menu
            </button>
            <button
              onClick={() => setActiveCategory("desserts")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeCategory === "desserts"
                  ? "bg-warm-orange-600 text-white"
                  : "text-warm-orange-600 hover:bg-warm-orange-200"
              }`}
            >
              Desserts
            </button>
            <button
              onClick={() => setActiveCategory("fresh")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeCategory === "fresh"
                  ? "bg-warm-orange-600 text-white"
                  : "text-warm-orange-600 hover:bg-warm-orange-200"
              }`}
            >
              Freshly made
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-warm-orange-600 text-white px-3 py-1 rounded-full font-bold">
                  ₹{item.price}
                  <span className="text-sm">/{item.weight}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <button
                  onClick={() => handleWhatsAppOrder(item.name, item.price)}
                  className="w-full bg-warm-orange-100 hover:bg-warm-orange-200 text-warm-orange-700 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Order via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No items available in this category yet.</p>
          </div>
        )}


      </div>
    </section>
  );
}
