import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { restaurantInfo } from '../mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get in <span className="text-[#FF6B35]">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="glass-card p-8 rounded-2xl hover-glow">
            <div className="w-14 h-14 rounded-full bg-[#FF6B35] flex items-center justify-center mb-6">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Phone</h3>
            <p className="text-gray-400 mb-2">Give us a call</p>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="text-[#FFD166] hover:text-[#FF6B35] transition-colors duration-300 font-medium"
            >
              {restaurantInfo.phone}
            </a>
          </div>

          <div className="glass-card p-8 rounded-2xl hover-glow">
            <div className="w-14 h-14 rounded-full bg-[#FFD166] flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-[#1E1E1E]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <p className="text-gray-400 mb-2">Send us an email</p>
            <a
              href={`mailto:${restaurantInfo.email}`}
              className="text-[#FFD166] hover:text-[#FF6B35] transition-colors duration-300 font-medium"
            >
              {restaurantInfo.email}
            </a>
          </div>

          <div className="glass-card p-8 rounded-2xl hover-glow">
            <div className="w-14 h-14 rounded-full bg-[#FF6B35] flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">WhatsApp</h3>
            <p className="text-gray-400 mb-2">Chat with us</p>
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD166] hover:text-[#FF6B35] transition-colors duration-300 font-medium"
            >
              {restaurantInfo.whatsapp}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full form-input"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full form-input"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full form-input"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold inline-flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Location & Hours */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300 mb-6">{restaurantInfo.address}</p>
              <div className="rounded-xl overflow-hidden h-64">
                <iframe
                  src={restaurantInfo.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                />
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FFD166] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#1E1E1E]" />
                </div>
                <h3 className="text-2xl font-semibold">Opening Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="font-semibold text-[#FFD166]">{restaurantInfo.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Saturday - Sunday</span>
                  <span className="font-semibold text-[#FFD166]">{restaurantInfo.hours.weekends}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;