export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-warm-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Mom's Approved Kitchen was born from a simple belief: that the best
              meals are made with love, fresh ingredients, and time-honored recipes
              passed down through generations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our founder, inspired by her grandmother's cooking, wanted to create a
              place where families could enjoy authentic home-cooked meals without
              the hassle of cooking. Every dish is prepared with the same care and
              attention you'd find in a loving home kitchen.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                  alt="Fresh Ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                We source our ingredients locally and prepare everything fresh daily.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                  alt="Family Recipes"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                Family Recipes
              </h3>
              <p className="text-gray-600">
                Our recipes have been passed down through generations of home cooks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                  alt="Made with Love"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                Made with Love
              </h3>
              <p className="text-gray-600">
                Every dish is prepared with the same care you'd find at home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
