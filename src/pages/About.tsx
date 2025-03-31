import React from 'react';
import { Calendar, CheckCircle, Heart, Award, ThumbsUp, Shield, Star, Clock } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581087724822-f7507dd8a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Children playing" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About Our Rental Company</h1>
            <p className="text-xl text-blue-100 mb-8">
              Creating memorable experiences with premium party equipment and exceptional service since 2015.
              Proudly veteran-owned and serving the DFW area.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-yellow-300" />
                <span>Est. 2015</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-yellow-300" />
                <span>PA State Certified</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-yellow-300" />
                <span>Family Owned & Operated</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-yellow-300" />
                <span>US Veteran-Owned</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/images/family-event.jpg" 
              alt="Family event" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
            <p className="text-gray-600 mb-4">
              What started as a small family business with just two bounce houses has grown into the premier party rental service in East Dallas and surrounding areas. 
            </p>
            <p className="text-gray-600 mb-4">
              Founded by a proud US military veteran, our journey began when we noticed a lack of quality rental options for family events in our community. We decided to fill that gap by offering clean, safe, and reliable party equipment with exceptional customer service.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've expanded our inventory to include a wide range of inflatables, tables, chairs, and party accessories. Despite our growth, we've maintained our commitment to personalized service and attention to detail while serving the DFW metroplex.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Safety First",
                description: "We maintain rigorous safety standards and regularly inspect all equipment to ensure worry-free events."
              },
              {
                icon: <Star className="w-8 h-8 text-blue-600" />,
                title: "Quality Equipment",
                description: "We invest in premium, commercial-grade products that are clean, reliable, and visually appealing."
              },
              {
                icon: <Heart className="w-8 h-8 text-blue-600" />,
                title: "Customer Satisfaction",
                description: "We go above and beyond to ensure every client has an exceptional experience from booking to pickup."
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: "Reliability",
                description: "We're always on time, properly prepared, and ready to handle any challenges that arise."
              },
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: "Certification",
                description: "We maintain all required certifications and insurance to provide peace of mind."
              },
              {
                icon: <ThumbsUp className="w-8 h-8 text-blue-600" />,
                title: "Community Focus",
                description: "We're proud to support local events and give back to the community that has supported us."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "John Davis",
              title: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              bio: "John founded the company in 2015 after 15 years in event management. He oversees operations and client relationships."
            },
            {
              name: "Sarah Johnson",
              title: "Operations Manager",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
              bio: "Sarah ensures every delivery and setup runs smoothly. She coordinates our crew and handles logistics for all events."
            },
            {
              name: "Michael Rodriguez",
              title: "Maintenance Supervisor",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
              bio: "Michael leads our maintenance team, ensuring all equipment meets our rigorous safety and cleanliness standards."
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The bounce house was the highlight of my daughter's birthday party! Clean, on time, and the staff was incredibly helpful.",
                author: "Amanda R.",
                event: "Birthday Party"
              },
              {
                quote: "We've used them for our company picnic three years in a row. Always professional, reliable, and our employees love the equipment.",
                author: "Thomas K.",
                event: "Corporate Event"
              },
              {
                quote: "The setup team was fantastic! They helped us choose the perfect spot in our yard and explained all the safety features.",
                author: "Jennifer M.",
                event: "Family Reunion"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-700 p-6 rounded-lg">
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-blue-200">{testimonial.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Let us help you create memorable experiences for your next celebration. 
          Contact us today to check availability and get a personalized quote.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/products" 
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse Equipment
          </a>
          <a 
            href="/contact" 
            className="bg-gray-100 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}