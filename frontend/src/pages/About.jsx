import React from 'react';
import { Award, Heart, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-[#FF6B35]">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the story behind Fusion Flavors
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-[#FFD166]">Story</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2020, Fusion Flavors began with a simple vision: to bring together the best of Indian, Chinese, and Continental cuisines under one roof. Our passionate team of chefs combines traditional techniques with modern innovation to create unforgettable dining experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              What started as a small family restaurant has grown into a beloved dining destination, known for our commitment to quality, authenticity, and exceptional service. Every dish tells a story, and every meal is a celebration of culinary diversity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We source the finest ingredients, work with local farmers, and ensure that every plate that leaves our kitchen meets our high standards of excellence.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
              alt="Restaurant"
              className="rounded-2xl w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-[#FF6B35]">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for perfection in every dish we serve'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'Cooking with love and dedication to our craft'
              },
              {
                icon: Target,
                title: 'Quality',
                description: 'Only the finest ingredients make it to your plate'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building connections through shared meals'
              }
            ].map((value, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl text-center hover-glow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFD166] flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chef Section */}
        <div className="glass-card p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80"
                alt="Chef"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our <span className="text-[#FFD166]">Head Chef</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                <strong>Chef Rajesh Kumar</strong> brings over 20 years of culinary expertise to Fusion Flavors. Trained in both Indian classical cuisine and modern European techniques, he has worked in Michelin-starred restaurants across the globe.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                His passion for fusion cuisine stems from his belief that food has the power to bring cultures together. Under his leadership, our kitchen has become a place of creativity, innovation, and respect for culinary traditions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                "Cooking is not just about feeding people; it's about creating memories and emotions through flavors." - Chef Rajesh Kumar
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto glass-card p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-[#FF6B35]">Mission</span>
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              To create a welcoming space where people from all walks of life can come together to enjoy exceptional food, celebrate special moments, and create lasting memories. We are committed to sustainability, community engagement, and providing an unparalleled dining experience that delights all the senses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;