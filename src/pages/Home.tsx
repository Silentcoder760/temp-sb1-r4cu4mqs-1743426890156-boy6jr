import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, Truck, Shield, X } from 'lucide-react';

// Image Lightbox Modal Component
interface LightboxProps {
  image: string;
  alt: string;
  onClose: () => void;
}

function ImageLightbox({ image, alt, onClose }: LightboxProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl w-full">
        <button 
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="w-8 h-8" />
        </button>
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-auto max-h-[85vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

export function Home() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  const popularProducts = [
    {
      title: "Bounce Houses",
      image: "/images/new white bouncer.webp",
      description: "Fun and safe bounce houses for all ages"
    },
    {
      title: "Pink Princess Castle",
      image: "/images/AI pink castle.webp",
      description: "Perfect for birthdays and princess-themed events"
    },
    {
      title: "Jungle Adventure",
      image: "/images/jungle AI.webp",
      description: "Exciting safari-themed bouncer with interactive elements"
    },
    {
      title: "Tables & Chairs",
      image: "/images/better square table.webp",
      description: "Everything you need for any size event"
    },
    {
      title: "Premium Folding Chairs",
      image: "/images/white chair.webp",
      description: "Comfortable seating for indoor and outdoor events"
    },
    {
      title: "Party Tents",
      image: "/images/party-tent.jpg",
      description: "Create the perfect outdoor party space"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black">
        {/* Full-width background image with proper responsive scaling */}
        <div 
          className="w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/Homepage party.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Content container with proper responsive padding */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                White Glove Delivery on Time, Every Time
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Premium party rentals in East Dallas with flat-rate pricing and exceptional service
              </p>
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Veteran-Owned & Operated | Serving All DFW</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium inline-block hover:bg-blue-700 transition-colors"
                >
                  Browse Products
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium inline-block hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Rental Service?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Premium equipment maintained to the highest standards</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple online reservation system with real-time availability</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Delivery</h3>
              <p className="text-gray-600">On-time delivery and setup included with every rental</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Veteran Owned</h3>
              <p className="text-gray-600">Bringing military precision and reliability to every event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Popular Rentals</h2>
            <p className="text-xl text-gray-600 mt-4">Browse our most requested party equipment</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {popularProducts.map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                <div className="h-40 overflow-hidden cursor-pointer bg-gray-50 flex items-center justify-center p-2" 
                  onClick={() => openLightbox(product.image, product.title)}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "The team made my daughter's birthday party absolutely amazing. The bounce house was spotless and they handled everything!"
              },
              {
                name: "Mike Thompson",
                text: "Best party rental service in East Dallas! Their flat-rate pricing meant no surprises, and their delivery was right on time."
              },
              {
                name: "Lisa Garcia",
                text: "We use this service for all our church events. Their tables and chairs are always in perfect condition and their service is unmatched."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make Your Event Perfect?
          </h2>
          <p className="text-xl text-white mb-8">
            Book now and experience our white glove service
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium inline-block hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <ImageLightbox
          image={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}