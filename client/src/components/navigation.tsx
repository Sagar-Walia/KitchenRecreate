import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/attached_assets/MAK_1754638937992.jpg" 
              alt="Mom's Approved Kitchen Logo" 
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-display font-bold text-gray-800">
              Mom's Approved Kitchen
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => smoothScroll("home")}
              className="text-gray-700 hover:text-warm-orange-600 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => smoothScroll("menu")}
              className="text-gray-700 hover:text-warm-orange-600 transition-colors duration-300"
            >
              Menu
            </button>
            <button
              onClick={() => smoothScroll("about")}
              className="text-gray-700 hover:text-warm-orange-600 transition-colors duration-300"
            >
              About Us
            </button>
            <button
              onClick={() => smoothScroll("contact")}
              className="text-gray-700 hover:text-warm-orange-600 transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-warm-orange-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              <button
                onClick={() => smoothScroll("home")}
                className="block text-gray-700 hover:text-warm-orange-600 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => smoothScroll("menu")}
                className="block text-gray-700 hover:text-warm-orange-600 transition-colors duration-300"
              >
                Menu
              </button>
              <button
                onClick={() => smoothScroll("about")}
                className="block text-gray-700 hover:text-warm-orange-600 transition-colors duration-300"
              >
                About Us
              </button>
              <button
                onClick={() => smoothScroll("contact")}
                className="block text-gray-700 hover:text-warm-orange-600 transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
