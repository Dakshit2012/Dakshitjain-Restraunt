import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, addOrder, clearCart } from '../mock';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = getCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod',
    specialInstructions: ''
  });

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05;
  const deliveryFee = 50;
  const total = subtotal + tax + deliveryFee;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const order = {
      ...formData,
      items: cartItems,
      subtotal,
      tax,
      deliveryFee,
      total
    };

    addOrder(order);
    clearCart();
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success('Order placed successfully!');
    navigate('/order-confirmation');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-[#FF6B35]">Checkout</span>
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Delivery Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full form-input"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full form-input"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full form-input"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">PIN Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full form-input"
                    placeholder="400001"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Delivery Address *</label>
                  <textarea
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className="w-full form-input"
                    placeholder="Street address, apartment, suite, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full form-input"
                    placeholder="Mumbai"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Special Instructions</label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    rows="3"
                    className="w-full form-input"
                    placeholder="Any special requests?"
                  />
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer p-4 rounded-lg border border-gray-700 hover:border-[#FF6B35] transition-colors duration-300">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#FF6B35]"
                  />
                  <span className="font-medium">Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer p-4 rounded-lg border border-gray-700 hover:border-[#FF6B35] transition-colors duration-300">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#FF6B35]"
                  />
                  <span className="font-medium">UPI Payment</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer p-4 rounded-lg border border-gray-700 hover:border-[#FF6B35] transition-colors duration-300">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#FF6B35]"
                  />
                  <span className="font-medium">Credit/Debit Card</span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 rounded-xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-300">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-semibold">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>GST (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Delivery</span>
                  <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-[#FF6B35]">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;