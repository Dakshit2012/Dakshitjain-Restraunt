import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E] flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Order <span className="text-[#FF6B35]">Confirmed!</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Thank you for your order. We'll start preparing your delicious meal right away!
          </p>
        </div>

        <div className="glass-card p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">What's Next?</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Order Confirmation</h3>
                <p className="text-gray-400 text-sm">You'll receive a confirmation email shortly</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Preparation</h3>
                <p className="text-gray-400 text-sm">Our chefs will start preparing your order</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Delivery</h3>
                <p className="text-gray-400 text-sm">Your order will be delivered in 30-45 minutes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/menu" className="btn-primary">
            Order More
          </Link>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;