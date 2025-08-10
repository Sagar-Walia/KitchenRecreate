export default function ContactSection() {
  const handleWhatsAppMessage = () => {
    const message = "Hello! I'd like to place an order";
    const whatsappUrl = `https://wa.me/918095053609?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };



  const handleDirections = () => {
    window.open("https://maps.app.goo.gl/hpLpNCuXVZ7FvmYa6", "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Contact & Location
          </h2>
          <p className="text-xl text-gray-600">
            Visit us today and taste the difference love makes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-warm-orange-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Swarna Bhavan, 132, KVP Nagar, Singapura, Bengaluru, Karnataka 560097, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <i className="fas fa-phone text-warm-orange-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <a
                    href="tel:+918095053609"
                    className="text-warm-orange-600 hover:text-warm-orange-700"
                  >
                    +91 8095053609
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <i className="fas fa-envelope text-warm-orange-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a
                    href="mailto:momsapprovedkitchen@gmail.com"
                    className="text-warm-orange-600 hover:text-warm-orange-700"
                  >
                    momsapprovedkitchen@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppMessage}
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i>Send WhatsApp Message
              </button>


            </div>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">
              Find Us
            </h3>
            
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
              <div className="text-center text-gray-600">
                <i className="fas fa-map text-4xl mb-2"></i>
                <p>Interactive map will be displayed here</p>
              </div>
            </div>

            <button
              onClick={handleDirections}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <i className="fas fa-directions mr-2"></i>Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
