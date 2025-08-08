export default function HeroSection() {
  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 bg-white rounded-full p-4 shadow-lg mx-auto w-fit">
          <img 
            src="/attached_assets/MAK_1754638937992.jpg" 
            alt="Mom's Approved Kitchen Logo" 
            className="w-72 h-72 md:w-80 md:h-80 object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-800">
          Welcome to
          <br />
          <span className="text-warm-orange-600">Mom's Approved Kitchen</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700">
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
            className="bg-transparent border-2 border-warm-orange-600 hover:bg-warm-orange-600 hover:text-white text-warm-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            <i className="fas fa-phone mr-2"></i>Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
