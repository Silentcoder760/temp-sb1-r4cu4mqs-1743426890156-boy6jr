import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Shield } from 'lucide-react';

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        We're here to help with your rental needs. Reach out to us through the form below,
        give us a call, or visit our office in person.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">info@rentalcompany.com</p>
                  <p className="text-sm text-gray-500">We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium">Office</h3>
                  <p className="text-gray-600">123 Main Street</p>
                  <p className="text-gray-600">Rockwall, TX 75032</p>
                  <p className="text-sm text-gray-500 mt-1">Serving all of DFW with focus on East Dallas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium">Pickup & Delivery Hours</h3>
                  <p className="text-gray-600">Standard hours: 7AM - 7PM</p>
                  <p className="text-gray-600">Extended hours available for additional fee</p>
                  <p className="text-sm text-gray-500 mt-1">Each hour beyond 7PM incurs an additional charge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Send Us a Message</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your event and requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="mt-12 max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-2xl font-semibold p-6 text-blue-600 border-b">Our Rockwall Location</h2>
        <div className="h-96 w-full bg-gray-200">
          <img 
            src="/images/dallas-map.jpg" 
            alt="Map location" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 bg-blue-50">
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
            <p className="text-gray-700">We're proud to be a US veteran-owned business serving the Dallas-Fort Worth metroplex from our Rockwall office.</p>
          </div>
        </div>
      </div>
    </div>
  );
}