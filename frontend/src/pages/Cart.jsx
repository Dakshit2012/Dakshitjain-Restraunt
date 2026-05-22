import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { getCart, updateCartQuantity, removeFromCart, clearCart } from '../mock';
import { toast } from 'sonner';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    setCartItems(getCart());
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    updateCartQuantity(itemId, newQuantity);
    loadCart();
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemove = (itemId, itemName) => {
    removeFromCart(itemId);
    loadCart();
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success(`${itemName} removed from cart`);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
      loadCart();
      window.dispatchEvent(new Event('cartUpdated'));
      toast.success('Cart cleared');
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05;
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + tax + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E] flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-400 mb-8">Add some delicious items to get started!</p>
          <Link
            to="/menu"
            className="btn-primary inline-block"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your <span className="text-[#FF6B35]">Cart</span>
          </h1>
          <button
            onClick={handleClearCart}
            className="text-red-500 hover:text-red-400 transition-colors duration-300 text-sm font-medium"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="glass-card p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id, item.name)}
                        className="text-red-500 hover:text-red-400 transition-colors duration-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-[#FF6B35]/20 hover:bg-[#FF6B35] transition-colors duration-300 flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-[#FF6B35]/20 hover:bg-[#FF6B35] transition-colors duration-300 flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-2xl font-bold text-[#FF6B35]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 rounded-xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>GST (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-[#FF6B35]">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/menu"
                className="block text-center mt-4 text-[#FFD166] hover:text-[#FF6B35] transition-colors duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;