import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, Users, Star } from 'lucide-react';
import { restaurantInfo, menuItems, testimonials } from '../mock';

const Home = () => {
  const featuredDishes = menuItems.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {restaurantInfo.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              {restaurantInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/reservations"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Book a Table</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/order"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Order Online</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#FFD166] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#FFD166] rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-[#FF6B35]">Us</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We bring you the finest fusion cuisine experience with exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Fast Service',
                description: 'Quick delivery and efficient dine-in service'
              },
              {
                icon: Award,
                title: 'Quality Food',
                description: 'Fresh ingredients and authentic recipes'
              },
              {
                icon: Users,
                title: 'Expert Chefs',
                description: 'Experienced culinary professionals'
              },
              {
                icon: Star,
                title: '5-Star Rated',
                description: 'Loved by thousands of customers'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl text-center hover-glow group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFD166] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-gradient-to-b from-[#1E1E1E] to-[#2A2A2A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#FF6B35]">Signature</span> Dishes
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our most popular and loved dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.id}
                className="menu-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    {dish.isVeg ? (
                      <div className="veg-badge">
                        <div className="veg-badge-dot" />
                      </div>
                    ) : (
                      <div className="non-veg-badge">
                        <div className="non-veg-badge-dot" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-[#FFD166] fill-current" />
                    <span className="text-sm font-semibold">{dish.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#FF6B35]">₹{dish.price}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white rounded-lg hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-[#FF6B35]">Customers</span> Say
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-8 rounded-2xl hover-glow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD166] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready for an Amazing Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your table now or order online for a delightful culinary journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/reservations"
              className="px-8 py-4 bg-white text-[#FF6B35] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/menu"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Browse Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;