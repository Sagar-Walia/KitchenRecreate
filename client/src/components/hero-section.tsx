export default function HeroSection() {
  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        }}
      ></div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Welcome to
          <br />
          <span className="text-warm-orange-400">Mom's Approved Kitchen</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Where every dish is made with love, just like mom used to make.
          Experience authentic home-cooked meals that warm your heart and
          satisfy your soul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => smoothScroll("menu")}
            className="bg-warm-orange-600 hover:bg-warm-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-utensils mr-2"></i>View Our Menu
          </button>
          <button
            onClick={() => smoothScroll("contact")}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            <i className="fas fa-phone mr-2"></i>Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
