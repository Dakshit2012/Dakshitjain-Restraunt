import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { addReservation } from '../mock';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservation(formData);
    toast.success('Table reserved successfully! We\'ll send you a confirmation email shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
    setTimeout(() => navigate('/'), 2000);
  };

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Reserve a <span className="text-[#FF6B35]">Table</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Book your table and experience an unforgettable dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reservation Form */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
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

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Guests *</label>
                    <select
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full form-input"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Time Slot *</label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full form-input"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="3"
                    className="w-full form-input"
                    placeholder="Any special occasions or dietary requirements?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg font-semibold"
                >
                  Reserve Table
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Flexible Booking</h3>
                    <p className="text-gray-400 text-sm">Book up to 30 days in advance</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  We accept reservations for lunch and dinner service. Select your preferred date and time slot.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD166] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#1E1E1E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Opening Hours</h3>
                    <p className="text-gray-400 text-sm">We're here to serve you</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="font-semibold">10:00 AM - 12:00 AM</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Large Groups</h3>
                    <p className="text-gray-400 text-sm">Perfect for celebrations</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  For parties of 10 or more, please call us directly at +91 98765 43210 for special arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;