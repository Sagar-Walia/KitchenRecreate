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
            
            <div className="rounded-lg h-48 mb-4 overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d77.12345678901234!3d12.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123456789012%3A0x1234567890123456!2sSwarna%20Bhavan%2C%20132%2C%20KVP%20Nagar%2C%20Singapura%2C%20Bengaluru%2C%20Karnataka%20560097%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mom's Approved Kitchen Location"
              ></iframe>
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
