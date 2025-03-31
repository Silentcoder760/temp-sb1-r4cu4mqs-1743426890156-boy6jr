import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Truck, Clock, Shield } from 'lucide-react';

export function Clearance() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6">
        <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
        <span className="mx-2 text-gray-400">&gt;</span>
        <span className="text-gray-700">Clearance Discounted Inflatables For Sale</span>
      </div>
      
      {/* Clearance Banner */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-40 h-40 md:w-auto md:h-auto">
          <img 
            src="/images/us-veteran.png" 
            alt="US Veteran Owned Company" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-3 p-4 text-center">
            <div className="relative inline-block">
              <img
                src="/images/clearance-tag.png"
                alt="Clearance Blowout!"
                className="w-48 h-auto"
              />
            </div>
          </div>
          
          <div className="md:col-span-9 p-6 text-center md:text-left">
            <h1 className="text-5xl font-bold text-red-600 mb-2">You Can't Beat Free!</h1>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-3xl font-bold text-blue-600">Enjoy</span>
              <span className="bg-blue-600 text-white px-4 py-1 text-2xl font-bold rounded">FREE SHIPPING</span>
              <span className="text-3xl font-bold text-blue-600">on all Clearance Products</span>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">Hurry! These Deals are Going Fast!</p>
              <p className="text-md">(Limited Time Only. While Supplies Last.)</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-600 text-white py-2 px-4 text-center">
          <p>Centrally Located in East Dallas • We Ship Nationwide!</p>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-center mb-8">Clearance Discounted Inflatables For Sale</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[
          {
            id: 'clearance-1',
            name: 'Tropical Paradise Water Slide',
            originalPrice: 3499,
            salePrice: 2699,
            image: '/images/tropical-paradise.jpg',
            description: 'Commercial grade water slide with tropical theme. Perfect for rental businesses.'
          },
          {
            id: 'clearance-2',
            name: 'Castle Kingdom Combo',
            originalPrice: 2899,
            salePrice: 2199,
            image: '/images/castle-kingdom.jpg',
            description: 'Medieval themed bounce house and slide combo. Slightly used but in excellent condition.'
          },
          {
            id: 'clearance-3',
            name: 'Sports Arena Inflatable',
            originalPrice: 2599,
            salePrice: 1899,
            image: '/images/sports-arena.jpg',
            description: 'Sports themed bouncer with basketball hoop. Floor sample with minor wear.'
          },
          {
            id: 'clearance-4',
            name: 'Pink Princess Castle',
            originalPrice: 2499,
            salePrice: 1799,
            image: '/images/Pink castel low.webp',
            description: 'Beautiful pink castle perfect for princess-themed events. Demo unit in excellent condition.'
          },
          {
            id: 'clearance-5',
            name: 'Jungle Adventure Bouncer',
            originalPrice: 2799,
            salePrice: 1999,
            image: '/images/Jungle 1.webp',
            description: 'Exciting jungle-themed bouncer with interactive animal elements. Floor sample with warranty.'
          },
          {
            id: 'clearance-6',
            name: 'Pirate Ship Adventure',
            originalPrice: 3299,
            salePrice: 2499,
            image: '/images/pirate 1.webp',
            description: 'Massive pirate ship with slide and bounce area. Demo unit with full manufacturer warranty.'
          },
          {
            id: 'clearance-7',
            name: 'Palm Island Bouncer',
            originalPrice: 2199,
            salePrice: 1599,
            image: '/images/tropical-paradise.jpg',
            description: 'Tropical themed bouncer with slide. Demo unit in great condition.'
          },
          {
            id: 'clearance-8',
            name: 'Wedding Castle',
            originalPrice: 1999,
            salePrice: 1499,
            image: '/images/Whtie castle low.webp',
            description: 'Elegant white castle. Perfect for wedding events and formal occasions.'
          }
        ].map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-bold">
                SAVE ${product.originalPrice - product.salePrice}
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-gray-500 line-through mr-2">${product.originalPrice}</span>
                  <span className="text-2xl font-bold text-red-600">${product.salePrice}</span>
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                  {Math.round((product.originalPrice - product.salePrice) / product.originalPrice * 100)}% OFF
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Tag className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Commercial Grade Quality</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Veteran-Owned Business</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="w-4 h-4 mr-2 text-blue-600" />
                  <span>FREE Shipping Included</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Limited Time Offer</span>
                </div>
              </div>
              
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-50 rounded-lg p-8 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Looking for Custom Inflatables?</h2>
        <p className="mb-6">Contact our team for special orders and custom designs for your rental business</p>
        <Link 
          to="/contact" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Request Custom Quote
        </Link>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Why are these inflatables discounted?</h3>
            <p className="text-gray-600">
              Our clearance items include floor models, demo units, and discontinued designs. 
              All products are thoroughly inspected, cleaned, and guaranteed to be in excellent working condition.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Do these inflatables come with a warranty?</h3>
            <p className="text-gray-600">
              Yes, all clearance inflatables include a 90-day warranty. Extended warranty options are available for purchase.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Is financing available?</h3>
            <p className="text-gray-600">
              Yes, we offer flexible financing options for qualified customers. Contact our sales team for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 