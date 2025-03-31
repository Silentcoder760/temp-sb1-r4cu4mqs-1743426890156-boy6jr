import React, { useState } from 'react';
import { CheckCircle, ShieldCheck, ArrowRight, Calculator, MapPin, Calendar, PieChart, Clock, DollarSign, Percent, Shield, Heart, BadgePercent, Award, VerifiedIcon, Medal, Stethoscope, School } from 'lucide-react';

export function Pricing() {
  const [activeTab, setActiveTab] = useState<string>('cost-plus');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Flexible Pricing Options</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We offer multiple pricing strategies to accommodate different event needs and budgets. Choose the option that works best for you.
        </p>
      </div>

      {/* Pricing Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {[
          { id: 'cost-plus', label: 'Build Your Own Package' },
          { id: 'market', label: 'Seasonal Offers' }
        ].map((tab) => (
          <button
            key={tab.id}
            className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Service Heroes Discount Banner */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <div className="flex items-center">
                  <Medal className="w-8 h-8 text-yellow-300 mr-3 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-white">Service Heroes Discount</h2>
                </div>
                <p className="text-blue-100 mt-2 max-w-2xl">
                  We're proud to offer a 15% discount to those who serve our communities. Thank you for your dedication!
                </p>
              </div>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-semibold whitespace-nowrap">
                Verify Eligibility
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
              <div className="bg-blue-600 bg-opacity-40 p-3 rounded-lg text-center">
                <Shield className="w-6 h-6 mx-auto text-white mb-2" />
                <span className="text-white text-sm font-medium">Military</span>
              </div>
              <div className="bg-blue-600 bg-opacity-40 p-3 rounded-lg text-center">
                <Award className="w-6 h-6 mx-auto text-white mb-2" />
                <span className="text-white text-sm font-medium">Veterans</span>
              </div>
              <div className="bg-blue-600 bg-opacity-40 p-3 rounded-lg text-center">
                <Stethoscope className="w-6 h-6 mx-auto text-white mb-2" />
                <span className="text-white text-sm font-medium">First Responders</span>
              </div>
              <div className="bg-blue-600 bg-opacity-40 p-3 rounded-lg text-center">
                <Heart className="w-6 h-6 mx-auto text-white mb-2" />
                <span className="text-white text-sm font-medium">Nurses</span>
              </div>
              <div className="bg-blue-600 bg-opacity-40 p-3 rounded-lg text-center">
                <Shield className="w-6 h-6 mx-auto text-white mb-2" />
                <span className="text-white text-sm font-medium">Police</span>
              </div>
              <div className="bg-blue-600 bg-opacity-40 p-3 rounded-lg text-center">
                <School className="w-6 h-6 mx-auto text-white mb-2" />
                <span className="text-white text-sm font-medium">Teachers</span>
              </div>
            </div>
            
            <p className="text-blue-100 text-sm mt-4 text-center">
              Valid ID or credentials required. Cannot be combined with other discounts.
            </p>
          </div>
        </div>
      </div>

      {/* Cost-Plus Pricing */}
      {activeTab === 'cost-plus' && (
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="mb-8 text-center">
                <div className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full mb-4">
                  Customizable Options
                </div>
                <h2 className="text-3xl font-bold mb-2">Build Your Own Package</h2>
                <p className="text-gray-600">Choose exactly what you need for your event</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Calculator className="w-5 h-5 text-blue-600 mr-2" />
                    Bounce Houses & Inflatables
                  </h3>
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2">Item</th>
                        <th className="py-2 text-right">Price (12 hours)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Basic Bounce House</td>
                        <td className="py-3 text-right font-medium">$140 - $180</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Themed Bounce Castle</td>
                        <td className="py-3 text-right font-medium">$180 - $220</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Combo Unit with Slide</td>
                        <td className="py-3 text-right font-medium">$220 - $280</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Water Slide</td>
                        <td className="py-3 text-right font-medium">$250 - $350</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Calculator className="w-5 h-5 text-blue-600 mr-2" />
                    Tables, Chairs & Accessories
                  </h3>
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2">Item</th>
                        <th className="py-2 text-right">Price (per item)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Round Tables (60")</td>
                        <td className="py-3 text-right font-medium">$12 each</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Rectangular Tables (8ft)</td>
                        <td className="py-3 text-right font-medium">$15 each</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Folding Chairs</td>
                        <td className="py-3 text-right font-medium">$2 each</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Chiavari Chairs</td>
                        <td className="py-3 text-right font-medium">$8 each</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Additional Services:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-1 mr-2" />
                    <span>Delivery & Setup: Included for locations within 15 miles. Beyond 15 miles: $1 per additional mile.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-1 mr-2" />
                    <span>Generator Rental: $75 (includes fuel)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-1 mr-2" />
                    <span>Extended Hours: $25 per hour beyond standard 12-hour rental</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors text-lg font-semibold">
                  Build Your Custom Package
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Market Mapping Pricing */}
      {activeTab === 'market' && (
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="mb-8 text-center">
                <div className="inline-block bg-purple-100 text-purple-800 font-semibold px-4 py-2 rounded-full mb-4">
                  Limited Time Offers
                </div>
                <h2 className="text-3xl font-bold mb-2">Seasonal Specials</h2>
                <p className="text-gray-600">Take advantage of our seasonal pricing and promotions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-purple-200 rounded-lg p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg font-medium">
                    POPULAR
                  </div>
                  <div className="flex items-center mb-4">
                    <Calendar className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold">Summer Package</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Perfect for summer birthday parties, family reunions, and neighborhood gatherings.
                  </p>
                  <div className="text-3xl font-bold text-purple-600 mb-4">$400</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Any water slide or combo unit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>6 tables and 48 chairs included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Standard 12-hour rental</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Delivery within 15 miles</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mb-6">
                    Available May through September. Weekend bookings require 2-week advance notice.
                  </p>
                  <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                    Book Summer Package
                  </button>
                </div>

                <div className="border border-purple-200 rounded-lg p-6 relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold">Wedding Special</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Elegant seating for your wedding reception or formal celebration.
                  </p>
                  <div className="text-3xl font-bold text-purple-600 mb-4">$499</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>100 Gold Chiavari Chairs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>10 Round Tables (60")</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>White wedding bounce house (optional)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Weekend-long rental (Fri-Sun)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mb-6">
                    20% off for off-season weddings (Nov-Mar). $100 refundable deposit required.
                  </p>
                  <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                    Book Wedding Package
                  </button>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold">Weekday Discount</h4>
                  </div>
                  <p className="text-sm">15% off all equipment rentals Monday-Thursday</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold">Off-Season Rates</h4>
                  </div>
                  <p className="text-sm">20% discount during winter months (November-February)</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Percent className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold">Repeat Customer</h4>
                  </div>
                  <p className="text-sm">10% loyalty discount for returning customers</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Medal className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold">Heroes Discount</h4>
                  </div>
                  <p className="text-sm">15% off for military, veterans, first responders, nurses, police, and teachers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Considerations Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Additional Pricing Considerations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="font-semibold text-lg">Seasonality & Demand</h3>
            </div>
            <p className="text-gray-600">
              Prices may vary based on peak seasons (summer, wedding season) and holidays. Book early for the best rates, especially for weekend dates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="font-semibold text-lg">Deposits & Fees</h3>
            </div>
            <p className="text-gray-600">
              A refundable damage deposit may be required for certain items. Additional fees may apply for extended delivery distances or after-hours setup/pickup.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="font-semibold text-lg">Delivery Area</h3>
            </div>
            <p className="text-gray-600">
              Our standard pricing includes delivery within 15 miles of our East Dallas location. Beyond 15 miles, we charge $1 per additional mile throughout the DFW metroplex.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
        <p className="text-gray-600 mb-8">
          Contact us for a customized quote based on your specific event needs and preferences. 
          Our team is ready to help you create a memorable experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Request a Quote
          </button>
          <button className="bg-gray-100 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors">
            Browse Equipment
          </button>
        </div>
      </div>
    </div>
  );
}