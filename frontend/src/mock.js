// Mock data for restaurant website
// This will be replaced with backend API calls later

export const restaurantInfo = {
  name: "Fusion Flavors",
  tagline: "Taste That Brings People Together",
  description: "Experience the perfect blend of Indian, Chinese, and Continental cuisines in a modern casual dining atmosphere.",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "hello@fusionflavors.com",
  address: "123 Culinary Street, Food District, Mumbai 400001",
  hours: {
    weekdays: "11:00 AM - 11:00 PM",
    weekends: "10:00 AM - 12:00 AM"
  },
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9347892345!2d72.8776!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
};

export const menuCategories = [
  { id: "starters", name: "Starters", icon: "sparkles" },
  { id: "main-course", name: "Main Course", icon: "utensils" },
  { id: "desserts", name: "Desserts", icon: "cake" },
  { id: "drinks", name: "Drinks", icon: "coffee" },
  { id: "combos", name: "Combos", icon: "package" }
];

export const menuItems = [
  // Starters
  {
    id: 1,
    name: "Crispy Spring Rolls",
    category: "starters",
    price: 199,
    rating: 4.5,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1550951957-c4e960099edc?w=800&q=80",
    description: "Crunchy vegetable spring rolls with sweet chili sauce"
  },
  {
    id: 2,
    name: "Chicken Manchurian",
    category: "starters",
    price: 249,
    rating: 4.7,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
    description: "Indo-Chinese favorite with tender chicken in tangy sauce"
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "starters",
    price: 229,
    rating: 4.6,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
    description: "Grilled cottage cheese with aromatic spices"
  },
  {
    id: 4,
    name: "Fish Fingers",
    category: "starters",
    price: 279,
    rating: 4.4,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1619040929118-1c90f4c6ee87?w=800&q=80",
    description: "Crispy breaded fish with tartar sauce"
  },
  // Main Course
  {
    id: 5,
    name: "Butter Chicken",
    category: "main-course",
    price: 349,
    rating: 4.8,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
    description: "Rich and creamy tomato-based chicken curry"
  },
  {
    id: 6,
    name: "Hakka Noodles",
    category: "main-course",
    price: 229,
    rating: 4.5,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80",
    description: "Stir-fried noodles with vegetables and sauces"
  },
  {
    id: 7,
    name: "Grilled Salmon",
    category: "main-course",
    price: 549,
    rating: 4.9,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    description: "Pan-seared salmon with lemon butter sauce"
  },
  {
    id: 8,
    name: "Paneer Butter Masala",
    category: "main-course",
    price: 299,
    rating: 4.7,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
    description: "Cottage cheese in rich tomato and butter gravy"
  },
  {
    id: 9,
    name: "Szechuan Chicken",
    category: "main-course",
    price: 329,
    rating: 4.6,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1580959375944-1ab5ba586c8b?w=800&q=80",
    description: "Spicy Chinese-style chicken with peppers"
  },
  {
    id: 10,
    name: "Mushroom Risotto",
    category: "main-course",
    price: 379,
    rating: 4.5,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1476124369491-c6e1f0b4afc1?w=800&q=80",
    description: "Creamy Italian rice with mushrooms and parmesan"
  },
  // Desserts
  {
    id: 11,
    name: "Gulab Jamun",
    category: "desserts",
    price: 129,
    rating: 4.7,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1589252337656-07f657646f38?w=800&q=80",
    description: "Soft milk dumplings in rose-flavored syrup"
  },
  {
    id: 12,
    name: "Chocolate Lava Cake",
    category: "desserts",
    price: 179,
    rating: 4.9,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
    description: "Warm chocolate cake with molten center"
  },
  {
    id: 13,
    name: "Tiramisu",
    category: "desserts",
    price: 199,
    rating: 4.8,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    description: "Classic Italian coffee-flavored dessert"
  },
  {
    id: 14,
    name: "Mango Cheesecake",
    category: "desserts",
    price: 219,
    rating: 4.6,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1533134242820-a12d6db36db8?w=800&q=80",
    description: "Creamy cheesecake with fresh mango topping"
  },
  // Drinks
  {
    id: 15,
    name: "Fresh Lime Soda",
    category: "drinks",
    price: 89,
    rating: 4.4,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9f?w=800&q=80",
    description: "Refreshing lime with soda and mint"
  },
  {
    id: 16,
    name: "Mango Lassi",
    category: "drinks",
    price: 119,
    rating: 4.7,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=800&q=80",
    description: "Creamy yogurt drink with mango pulp"
  },
  {
    id: 17,
    name: "Iced Coffee",
    category: "drinks",
    price: 149,
    rating: 4.5,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80",
    description: "Cold brew coffee with ice and cream"
  },
  {
    id: 18,
    name: "Virgin Mojito",
    category: "drinks",
    price: 139,
    rating: 4.6,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
    description: "Refreshing mint and lime mocktail"
  },
  // Combos
  {
    id: 19,
    name: "Family Feast",
    category: "combos",
    price: 1299,
    rating: 4.8,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    description: "Starter + 2 Main Course + Rice + Breads + Dessert (Serves 4)"
  },
  {
    id: 20,
    name: "Veg Delight Combo",
    category: "combos",
    price: 599,
    rating: 4.7,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    description: "Starter + Main Course + Bread + Drink (Serves 2)"
  },
  {
    id: 21,
    name: "Non-Veg Special",
    category: "combos",
    price: 749,
    rating: 4.9,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
    description: "2 Starters + Main Course + Rice + Dessert (Serves 2)"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    category: "food",
    title: "Signature Dishes"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    category: "interior",
    title: "Restaurant Interior"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    category: "food",
    title: "Fine Dining Experience"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    category: "chef",
    title: "Our Expert Chefs"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1562059392-096320bccc7e?w=800&q=80",
    category: "food",
    title: "Delicious Creations"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    category: "interior",
    title: "Cozy Ambiance"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    category: "food",
    title: "Fresh Ingredients"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    category: "customer",
    title: "Happy Customers"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing fusion of flavors! The butter chicken and hakka noodles combo is to die for. Great ambiance too!",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Rahul Verma",
    rating: 5,
    comment: "Best restaurant in the city! The service is impeccable and the food quality is consistently excellent.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    rating: 4,
    comment: "Love the modern vibe and the diverse menu. The grilled salmon was perfectly cooked. Will definitely return!",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

// Cart functionality (using localStorage)
export const getCart = () => {
  const cart = localStorage.getItem('restaurantCart');
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem('restaurantCart', JSON.stringify(cart));
};

export const addToCart = (item, quantity = 1) => {
  const cart = getCart();
  const existingItem = cart.find(i => i.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  
  saveCart(cart);
  return cart;
};

export const removeFromCart = (itemId) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== itemId);
  saveCart(updatedCart);
  return updatedCart;
};

export const updateCartQuantity = (itemId, quantity) => {
  const cart = getCart();
  const item = cart.find(i => i.id === itemId);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(itemId);
    }
    item.quantity = quantity;
    saveCart(cart);
  }
  
  return cart;
};

export const clearCart = () => {
  localStorage.removeItem('restaurantCart');
  return [];
};

// Reservations (using localStorage)
export const getReservations = () => {
  const reservations = localStorage.getItem('restaurantReservations');
  return reservations ? JSON.parse(reservations) : [];
};

export const addReservation = (reservation) => {
  const reservations = getReservations();
  const newReservation = {
    id: Date.now(),
    ...reservation,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  reservations.push(newReservation);
  localStorage.setItem('restaurantReservations', JSON.stringify(reservations));
  return newReservation;
};

// Orders (using localStorage)
export const getOrders = () => {
  const orders = localStorage.getItem('restaurantOrders');
  return orders ? JSON.parse(orders) : [];
};

export const addOrder = (order) => {
  const orders = getOrders();
  const newOrder = {
    id: Date.now(),
    ...order,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  orders.push(newOrder);
  localStorage.setItem('restaurantOrders', JSON.stringify(orders));
  return newOrder;
};