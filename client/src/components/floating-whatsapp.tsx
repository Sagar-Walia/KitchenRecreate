export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = "Hello! I'd like to place an order";
    const whatsappUrl = `https://wa.me/918095053609?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </button>
    </div>
  );
}
