import React, { useState } from 'react';
import { Star, Search } from 'lucide-react';
import { menuCategories, menuItems, addToCart } from '../mock';
import { toast } from 'sonner';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVeg, setFilterVeg] = useState(false);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = !filterVeg || item.isVeg;
    
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const handleAddToCart = (item) => {
    addToCart(item, 1);
    toast.success(`${item.name} added to cart!`, {
      position: 'bottom-right',
      duration: 2000
    });
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-[#FF6B35]">Menu</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our exquisite fusion of Indian, Chinese, and Continental cuisines
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 form-input"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filterVeg}
                onChange={(e) => setFilterVeg(e.target.checked)}
                className="w-5 h-5 rounded border-gray-600 text-[#FF6B35] focus:ring-[#FF6B35] focus:ring-offset-0"
              />
              <span className="text-sm font-medium text-gray-300">Vegetarian Only</span>
            </label>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-4 min-w-max">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            >
              All Items
            </button>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    {item.isVeg ? (
                      <div className="veg-badge" title="Vegetarian">
                        <div className="veg-badge-dot" />
                      </div>
                    ) : (
                      <div className="non-veg-badge" title="Non-Vegetarian">
                        <div className="non-veg-badge-dot" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-[#FFD166] fill-current" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#FF6B35]">₹{item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="px-5 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white rounded-lg hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-all duration-300 font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No items found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;