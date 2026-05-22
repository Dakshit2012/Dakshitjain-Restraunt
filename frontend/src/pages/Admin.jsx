import React, { useState } from 'react';
import { getOrders, getReservations } from '../mock';
import { Package, Calendar, TrendingUp, Users } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const orders = getOrders();
  const reservations = getReservations();

  const stats = [
    {
      title: 'Total Orders',
      value: orders.length,
      icon: Package,
      color: 'from-[#FF6B35] to-[#FF8C61]'
    },
    {
      title: 'Reservations',
      value: reservations.length,
      icon: Calendar,
      color: 'from-[#FFD166] to-[#FFC933]'
    },
    {
      title: 'Revenue',
      value: `₹${orders.reduce((sum, order) => sum + (order.total || 0), 0).toFixed(0)}`,
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Customers',
      value: new Set(orders.map(o => o.email)).size,
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Admin <span className="text-[#FF6B35]">Dashboard</span>
          </h1>
          <p className="text-gray-400">Manage your restaurant operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-4 border-b border-gray-700">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-4 font-medium transition-colors duration-300 ${
                activeTab === 'overview'
                  ? 'text-[#FF6B35] border-b-2 border-[#FF6B35]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`pb-4 px-4 font-medium transition-colors duration-300 ${
                activeTab === 'orders'
                  ? 'text-[#FF6B35] border-b-2 border-[#FF6B35]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Orders ({orders.length})
            </button>
            <button
              onClick={() => setActiveTab('reservations')}
              className={`pb-4 px-4 font-medium transition-colors duration-300 ${
                activeTab === 'reservations'
                  ? 'text-[#FF6B35] border-b-2 border-[#FF6B35]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Reservations ({reservations.length})
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && (
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Welcome to Admin Dashboard</h2>
              <p className="text-gray-300 mb-4">
                This is a mock admin panel. In the full backend implementation, you'll be able to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>Manage menu items (add, edit, delete dishes)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>View and update order status</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>Manage table reservations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>View customer messages and feedback</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>Upload and manage gallery images</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FF6B35] font-bold">•</span>
                  <span>Generate sales reports and analytics</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-4">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <div key={order.id} className="glass-card p-6 rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Order #{order.id}</h3>
                        <p className="text-gray-400 text-sm">
                          {new Date(order.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-500 text-sm font-medium mt-2 md:mt-0 inline-block">
                        {order.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Customer</p>
                        <p className="font-medium">{order.name}</p>
                        <p className="text-gray-300">{order.email}</p>
                        <p className="text-gray-300">{order.phone}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Delivery Address</p>
                        <p className="font-medium">{order.address}</p>
                        <p className="text-gray-300">{order.city} - {order.pincode}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Amount</span>
                        <span className="text-2xl font-bold text-[#FF6B35]">₹{order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="glass-card p-12 rounded-xl text-center">
                  <p className="text-gray-400 text-lg">No orders yet</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'reservations' && (
            <div className="space-y-4">
              {reservations.length > 0 ? (
                reservations.map((reservation) => (
                  <div key={reservation.id} className="glass-card p-6 rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{reservation.name}</h3>
                        <p className="text-gray-400 text-sm">
                          Booked on {new Date(reservation.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-500 text-sm font-medium mt-2 md:mt-0 inline-block">
                        {reservation.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Contact</p>
                        <p className="font-medium">{reservation.email}</p>
                        <p className="text-gray-300">{reservation.phone}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Date & Time</p>
                        <p className="font-medium">{reservation.date}</p>
                        <p className="text-gray-300">{reservation.time}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Guests</p>
                        <p className="font-medium">{reservation.guests} people</p>
                      </div>
                    </div>
                    {reservation.specialRequests && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-gray-400 text-sm mb-1">Special Requests</p>
                        <p className="text-gray-300">{reservation.specialRequests}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="glass-card p-12 rounded-xl text-center">
                  <p className="text-gray-400 text-lg">No reservations yet</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;