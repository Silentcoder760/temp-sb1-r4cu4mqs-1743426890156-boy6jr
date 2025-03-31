import React, { useState, useEffect } from 'react';
import { Star, Users, Ruler, Clock, Plus, Minus, ShoppingCart, Zap, Cable, Power, X, CheckCircle, Droplets, Calendar, Info, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
  price: number;
  specs: {
    capacity?: string;
    dimensions?: string;
    duration?: string;
    color?: string;
    powerReq?: {
      blowers: number;
      amps: number;
    };
    wetDry?: boolean;
    certified?: boolean;
    inventory?: number;
  };
  features: string[];
}

interface CartItem {
  productId: string;
  quantity: number;
  powerOption?: 'none' | 'extension' | 'generator';
  rentalDate?: string;
  returnDate?: string;
}

interface ModalProps {
  product: Product;
  powerOption: 'extension' | 'generator' | 'none';
  onConfirm: (rentalDate: string, returnDate: string, quantity?: number) => void;
  onClose: () => void;
}

const products: Product[] = [
  {
    id: 'wedding-castle',
    name: 'White Wedding Castle',
    category: 'Bounce Houses',
    description: 'Elegant all-white bounce house perfect for wedding receptions, baptisms, and formal events.',
    image: '/images/new white bouncer.webp',
    price: 249,
    specs: {
      capacity: '6-8 children',
      dimensions: '13\'L x 13\'W x 14\'H',
      powerReq: {
        blowers: 1,
        amps: 15
      },
      certified: true,
      wetDry: false
    },
    features: [
      'PA State Certified',
      'All-white elegant design',
      'Perfect for formal events',
      'Premium commercial-grade vinyl',
      'Easy-clean surface',
      'Safety netting all around',
      'Reinforced stitching'
    ]
  },
  {
    id: 'pink-princess',
    name: 'Pink Princess Castle',
    category: 'Bounce Houses',
    description: 'Enchanting pink castle with royal details and princess theming. Perfect for birthday parties and princess-themed events.',
    image: '/images/AI pink castle.webp',
    price: 259,
    specs: {
      capacity: '6-8 children',
      dimensions: '15\'L x 15\'W x 16\'H',
      powerReq: {
        blowers: 1,
        amps: 15
      },
      wetDry: false,
      certified: true
    },
    features: [
      'PA State Certified',
      'Vibrant pink color',
      'Royal castle design',
      'Princess theme graphics',
      'Durable commercial vinyl',
      'Safety netting for visibility',
      'Easy clean surface'
    ]
  },
  {
    id: 'jungle-adventure',
    name: 'Jungle Adventure Bouncer',
    category: 'Bounce Houses',
    description: 'Exciting jungle-themed inflatable with vibrant animals, trees, and interactive elements. Perfect for safari and zoo parties.',
    image: '/images/jungle AI.webp',
    images: [
      '/images/jungle AI.webp',
      '/images/jungle 2.webp',
      '/images/jungle 3.webp',
      '/images/jungle 4.webp',
      '/images/jungle 5.webp'
    ],
    price: 349,
    specs: {
      capacity: '8-10 children',
      dimensions: '28\'L x 15\'W x 14\'H',
      powerReq: {
        blowers: 1,
        amps: 15
      },
      wetDry: false,
      certified: true
    },
    features: [
      'PA State Certified',
      'Detailed jungle animals',
      'Interactive climbing elements',
      'Lush forest backdrop',
      'Commercial-grade vinyl',
      'Safety netting all around',
      'Easy-access entrance'
    ]
  },
  {
    id: 'pirate-ship',
    name: 'Pirate Ship Adventure',
    category: 'Bounce Houses',
    description: 'Arrr! This pirate ship inflatable features bouncing deck, slide, climbing elements and detailed pirate theming for adventure on the high seas.',
    image: '/images/AI Pirate ship.webp',
    images: [
      '/images/AI Pirate ship.webp',
      '/images/pirate 2.webp',
      '/images/pirate 3.webp',
      '/images/pirate 4.webp',
      '/images/pirate 5.webp',
      '/images/pirate 6.webp'
    ],
    price: 399,
    specs: {
      capacity: '10-12 children',
      dimensions: '32\'L x 16\'W x 18\'H',
      powerReq: {
        blowers: 2,
        amps: 30
      },
      wetDry: true,
      certified: true
    },
    features: [
      'PA State Certified',
      'Wet & Dry Use Compatible',
      'Ship deck bounce area',
      'Pirate-themed graphics',
      'Climbing wall and slide',
      'Water cannon (for wet use)',
      'Premium safety features'
    ]
  },
  {
    id: 'square-table',
    name: 'Premium Square Table',
    category: 'Tables & Chairs',
    description: 'Sturdy square tables perfect for smaller spaces and more intimate gatherings.',
    image: '/images/better square table.webp',
    price: 14,
    specs: {
      capacity: '4-6 guests',
      dimensions: '48"L x 48"W x 29"H'
    },
    features: [
      'Heavy-duty construction',
      'Elegant square design',
      'Easy to clean surface',
      'Pairs perfectly with our linens',
      'Suitable for indoor/outdoor use'
    ]
  },
  {
    id: 'round-table',
    name: '60" Round Table',
    category: 'Tables & Chairs',
    description: 'Perfect for wedding receptions, corporate events, and formal dinners.',
    image: '/images/circle table.webp',
    price: 12,
    specs: {
      capacity: '8-10 guests',
      dimensions: '60" diameter'
    },
    features: [
      'Commercial grade durability',
      'Easy to clean surface',
      'Pairs perfectly with our linens',
      'Ideal for formal events'
    ]
  },
  {
    id: 'tablecloth',
    name: 'Table Linen',
    category: 'Tables & Chairs',
    description: 'Elegant table linens available in various colors to complement your event theme.',
    image: '/images/Table cloth 2.webp',
    price: 8,
    specs: {
      dimensions: 'Fits 60" round tables'
    },
    features: [
      'Premium quality fabric',
      'Multiple colors available',
      'Professionally laundered',
      'Wrinkle resistant'
    ]
  },
  {
    id: 'rectangular-table',
    name: '8ft Rectangular Table',
    category: 'Tables & Chairs',
    description: 'Versatile rectangular tables perfect for buffets, displays, or conference-style seating.',
    image: '/images/better square table.webp',
    price: 15,
    specs: {
      capacity: '8-10 guests',
      dimensions: '96"L x 30"W x 29"H'
    },
    features: [
      'Heavy-duty construction',
      'Folds for easy transport',
      'Suitable for indoor/outdoor use',
      'Perfect for buffet setups'
    ]
  },
  {
    id: 'folding-chair',
    name: 'White Resin Folding Chair',
    category: 'Tables & Chairs',
    description: 'Clean and classic white resin folding chairs suitable for any occasion.',
    image: '/images/white chair.webp',
    price: 5,
    specs: {
      capacity: '300 lbs',
      dimensions: '17.5"W x 18"D x 32"H'
    },
    features: [
      'Weather resistant',
      'Easy to clean',
      'Comfortable design',
      'Non-marking feet'
    ]
  },
  {
    id: 'balloon-arch',
    name: 'Balloon Arch',
    category: 'Party Decorations',
    description: 'Stunning balloon arch to create a festive entrance or photo backdrop for your event.',
    image: '/images/balloon arches.webp',
    price: 75,
    specs: {
      dimensions: '8\'W x 8\'H',
    },
    features: [
      'Customizable colors',
      'Professional installation',
      'High-quality balloons',
      'Perfect for photo opportunities',
      'Matches event theme'
    ]
  }
];

const powerOptions = {
  extension: { name: '50ft Extension Cord', price: 0 },
  generator: { name: 'Generator Rental (includes fuel)', price: 75 },
  none: { name: 'No Power Option', price: 0 }
};

// Mock inventory data for dates - in a real app this would come from a database
interface InventoryData {
  [productId: string]: {
    [date: string]: number;
  };
}

// Mock inventory data - this would come from API/database in a real application
const inventoryData: InventoryData = {
  'round-table': {
    // Generate some sample availability data - 20 tables available by default
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        // Random inventory between 5-20 for demo purposes
        return [date.toISOString().split('T')[0], 20 - Math.floor(Math.random() * 15)];
      })
    )
  },
  'square-table': {
    // Generate some sample availability data - 15 square tables available by default
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        // Random inventory between 3-15 for demo purposes
        return [date.toISOString().split('T')[0], 15 - Math.floor(Math.random() * 12)];
      })
    )
  },
  'tablecloth': {
    // Generate some sample availability data - 30 tablecloths available by default
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        // Random inventory between 10-30 for demo purposes
        return [date.toISOString().split('T')[0], 30 - Math.floor(Math.random() * 20)];
      })
    )
  },
  'rectangular-table': {
    // Generate some sample availability data - 15 rectangular tables available by default
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        // Random inventory between 3-15 for demo purposes
        return [date.toISOString().split('T')[0], 15 - Math.floor(Math.random() * 12)];
      })
    )
  },
  'folding-chair': {
    // Generate some sample availability data - 100 chairs available by default
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        // Random inventory between 20-100 for demo purposes
        return [date.toISOString().split('T')[0], 100 - Math.floor(Math.random() * 80)];
      })
    )
  },
  // Generate some random booked dates for bounce houses
  'jungle-adventure': {
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        // 0 means fully booked, 1 means available (only one bounce house of each type)
        return [date.toISOString().split('T')[0], Math.random() > 0.2 ? 1 : 0]; // 20% chance to be booked
      })
    )
  },
  'pink-princess': {
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return [date.toISOString().split('T')[0], Math.random() > 0.3 ? 1 : 0]; // 30% chance to be booked
      })
    )
  },
  'wedding-castle': {
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return [date.toISOString().split('T')[0], Math.random() > 0.25 ? 1 : 0]; // 25% chance to be booked
      })
    )
  },
  'pirate-ship': {
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return [date.toISOString().split('T')[0], Math.random() > 0.4 ? 1 : 0]; // 40% chance to be booked
      })
    )
  },
  'balloon-arch': {
    ...Object.fromEntries(
      Array(60).fill(0).map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return [date.toISOString().split('T')[0], Math.random() > 0.15 ? 3 : Math.floor(Math.random() * 3)]; // Random inventory
      })
    )
  }
};

// Function to check if an item is available on a given date
const checkAvailability = (productId: string, date: string): number => {
  if (!inventoryData[productId] || !inventoryData[productId][date]) {
    return 0; // Default to unavailable if no data
  }
  return inventoryData[productId][date];
};

// Function to check availability for a date range
const checkDateRangeAvailability = (productId: string, startDate: string, endDate: string): boolean => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    if (checkAvailability(productId, dateStr) <= 0) {
      return false; // If any day in range is unavailable
    }
  }
  
  return true;
};

function PowerOptionsModal({ product, powerOption, onConfirm, onClose }: ModalProps) {
  const option = powerOptions[powerOption];
  const [rentalDate, setRentalDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [dateError, setDateError] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [availableQuantity, setAvailableQuantity] = useState<number>(0);
  const [datesForCalendar, setDatesForCalendar] = useState<{[date: string]: {available: boolean, inventory: number}}>({});
  const [selectedDateInfo, setSelectedDateInfo] = useState<string>('');
  
  // Generate availability data for the next 60 days for the calendar view
  useEffect(() => {
    const availabilityData: {[date: string]: {available: boolean, inventory: number}} = {};
    
    for (let i = 0; i < 60; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      const inventory = checkAvailability(product.id, dateStr);
      
      availabilityData[dateStr] = {
        available: inventory > 0,
        inventory: inventory
      };
    }
    
    setDatesForCalendar(availabilityData);
  }, [product.id]);
  
  // When rental date changes, check and update available quantity
  useEffect(() => {
    if (rentalDate) {
      const available = checkAvailability(product.id, rentalDate);
      setAvailableQuantity(available);
      
      // Set info message for inventory items
      const isInventoryItem = ['Tables & Chairs'].includes(product.category);
      if (isInventoryItem && available > 0) {
        setSelectedDateInfo(`${available} ${product.name}(s) available for this date`);
      } else if (available <= 0) {
        setSelectedDateInfo('This item is not available on the selected date');
      } else {
        setSelectedDateInfo('Item is available for this date');
      }
    } else {
      setSelectedDateInfo('');
    }
  }, [rentalDate, product.id, product.category, product.name]);

  const handleConfirm = () => {
    if (!rentalDate || !returnDate) {
      setDateError('Please select both rental and return dates');
      return;
    }
    
    const start = new Date(rentalDate);
    const end = new Date(returnDate);
    
    if (start >= end) {
      setDateError('Return date must be after rental date');
      return;
    }
    
    // Min 1 day rental
    const dayDiff = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    
    if (dayDiff < 1) {
      setDateError('Minimum rental period is 1 day');
      return;
    }
    
    // Check availability for the entire date range
    if (!checkDateRangeAvailability(product.id, rentalDate, returnDate)) {
      setDateError('This item is not available for the entire date range selected');
      return;
    }
    
    // Check if quantity requested is available
    if (quantity > availableQuantity) {
      setDateError(`Only ${availableQuantity} ${product.name}(s) available for selected date`);
      return;
    }
    
    onConfirm(rentalDate, returnDate, quantity);
  };
  
  // Is this a "Tables & Chairs" or inventory-based product?
  const isInventoryItem = product.category === 'Tables & Chairs';
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Rental Options</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-6">
          {product.specs.powerReq && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>Required Power: {product.specs.powerReq?.blowers} blower(s), {product.specs.powerReq?.amps} amps</span>
              </div>
              
              <div className="flex items-center space-x-2">
                {powerOption === 'extension' ? (
                  <Cable className="w-5 h-5 text-blue-500" />
                ) : powerOption === 'generator' ? (
                  <Power className="w-5 h-5 text-green-500" />
                ) : (
                  <X className="w-5 h-5 text-gray-500" />
                )}
                <span>{option.name}</span>
              </div>
              
              <p className="text-sm text-gray-600">
                {powerOption === 'extension' 
                  ? 'Free extension cord rental for setups more than 50ft from power source.'
                  : powerOption === 'generator' 
                  ? 'Generator rental includes fuel and setup/maintenance.'
                  : 'No power option selected. Make sure you have appropriate power source available.'}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="font-semibold">Additional Cost:</span>
                <span className="text-lg font-bold">${option.price}</span>
              </div>
            </div>
          )}
          
          <div className="border-t pt-4">
            <h4 className="text-md font-semibold flex items-center mb-4">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Select Rental Dates
            </h4>
            
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md mb-4">
                <h5 className="font-medium text-sm mb-1">Pickup & Delivery Hours</h5>
                <p className="text-xs text-gray-700">Standard hours: 7AM - 7PM</p>
                <p className="text-xs text-gray-700">Each hour beyond 7PM incurs an additional fee</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rental Date</label>
                <input 
                  type="date" 
                  value={rentalDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setRentalDate(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {rentalDate && (
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Info className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{selectedDateInfo}</span>
                  </div>
                  
                  {isInventoryItem && availableQuantity > 0 && (
                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-1 hover:bg-blue-100 rounded"
                          disabled={quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{quantity}</span>
                        <button
                          onClick={() => setQuantity(Math.min(availableQuantity, quantity + 1))}
                          className="p-1 hover:bg-blue-100 rounded"
                          disabled={quantity >= availableQuantity}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <span className="text-sm text-gray-500">of {availableQuantity} available</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                <input 
                  type="date" 
                  value={returnDate}
                  min={rentalDate || new Date().toISOString().split('T')[0]}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {dateError && (
                <p className="text-red-500 text-sm">{dateError}</p>
              )}
              
              <div className="mt-4">
                <h5 className="text-sm font-medium text-gray-700 mb-2">Availability Calendar</h5>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-xs font-medium py-1">{day}</div>
                  ))}
                  
                  {/* Display a mini calendar for visual availability */}
                  {Object.keys(datesForCalendar).slice(0, 30).map(dateStr => {
                    const date = new Date(dateStr);
                    const dayOfWeek = date.getDay();
                    const dayOfMonth = date.getDate();
                    const { available, inventory } = datesForCalendar[dateStr];
                    const isSelected = dateStr === rentalDate;
                    
                    // Calculate initial offset for first week
                    const isFirstDay = dayOfMonth === 1 || dateStr === Object.keys(datesForCalendar)[0];
                    const offset = isFirstDay ? Array(dayOfWeek).fill(0).map((_, i) => (
                      <div key={`offset-${i}`} className="h-7"></div>
                    )) : [];
                    
                    return (
                      <React.Fragment key={dateStr}>
                        {isFirstDay && offset}
                        <div 
                          className={`h-7 flex items-center justify-center text-xs rounded cursor-pointer 
                            ${isSelected ? 'bg-blue-500 text-white' : ''} 
                            ${!available ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 
                              (inventory < 3 && isInventoryItem) ? 'bg-yellow-100' : 'hover:bg-blue-100'}`}
                          onClick={() => available && setRentalDate(dateStr)}
                          title={available ? `${inventory} available` : 'Not available'}
                        >
                          {dayOfMonth}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-200 mr-1 rounded-sm"></div>
                    <span>Unavailable</span>
                  </div>
                  {isInventoryItem && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-100 mr-1 rounded-sm"></div>
                      <span>Limited Stock</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-100 mr-1 rounded-sm"></div>
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            disabled={!rentalDate || !returnDate || availableQuantity <= 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProductLightboxProps {
  images: string[];
  alt: string;
  onClose: () => void;
  initialIndex?: number;
}

function ProductLightbox({ images, alt, onClose, initialIndex = 0 }: ProductLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (e.key === 'ArrowLeft') {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center">
        <button 
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="w-8 h-8" />
        </button>

        {images.length > 1 && (
          <>
            <button 
              className="absolute left-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
              onClick={goPrev}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              className="absolute right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
              onClick={goNext}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        <img 
          src={images[currentIndex]} 
          alt={`${alt} - image ${currentIndex + 1} of ${images.length}`} 
          className="max-h-full max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-500"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const isComingSoon = product.category === 'Coming Soon';
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get current displayed image - either from images array or default image
  const currentImage = product.images ? product.images[currentImageIndex] : product.image;
  
  // Determine if product has multiple images
  const hasMultipleImages = product.images && product.images.length > 1;

  const nextImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % product.images!.length);
  };

  const prevImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev - 1 + product.images!.length) % product.images!.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center">
        <img
          src={currentImage}
          alt={product.name}
          className={`max-h-full max-w-full object-contain transform transition-transform duration-300 ${isComingSoon ? 'opacity-70' : 'hover:scale-105'}`}
          onClick={() => setShowLightbox(true)}
        />
        
        {/* Image gallery controls */}
        {hasMultipleImages && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {product.images?.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index ? "bg-white" : "bg-gray-400"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Show gallery icon on hover if product has multiple images */}
        {hasMultipleImages && product.images && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white rounded p-1 flex items-center">
            <ImageIcon className="w-4 h-4 mr-1" />
            <span className="text-xs">{currentImageIndex + 1}/{product.images.length}</span>
          </div>
        )}
        
        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-yellow-500 text-white px-4 py-2 rounded-md text-xl font-bold transform -rotate-12">
              Coming Soon
            </div>
          </div>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {product.specs.certified && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-md flex items-center text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              PA Certified
            </div>
          )}
          {product.specs.wetDry && (
            <div className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center text-sm">
              <Droplets className="w-4 h-4 mr-1" />
              Wet/Dry
            </div>
          )}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <div className="text-xl font-bold text-blue-600">${product.price}</div>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="space-y-4">
          {product.specs.capacity && (
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span>Capacity: {product.specs.capacity}</span>
            </div>
          )}
          {product.specs.dimensions && (
            <div className="flex items-center">
              <Ruler className="w-5 h-5 text-blue-600 mr-2" />
              <span>Size: {product.specs.dimensions}</span>
            </div>
          )}
          {product.specs.powerReq && (
            <div className="flex items-center">
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <span>Power: {product.specs.powerReq.blowers} blower(s)</span>
            </div>
          )}
        </div>

        <div className="mt-4 mb-6 flex-grow">
          <h4 className="font-semibold mb-2">Features:</h4>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <ProductLightbox
          images={product.images || [product.image]}
          alt={product.name}
          onClose={() => setShowLightbox(false)}
          initialIndex={currentImageIndex}
        />
      )}
    </div>
  );
}

export function Products() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPowerModal, setShowPowerModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedPowerOption, setSelectedPowerOption] = useState<'extension' | 'generator' | 'none'>('extension');
  
  const categories = Array.from(new Set(products.map(p => p.category))).sort((a, b) => {
    // Sort "Bounce Houses" to top
    if (a === 'Bounce Houses') return -1;
    if (b === 'Bounce Houses') return 1;
    return a.localeCompare(b);
  });

  const addToCart = (productId: string, powerOption?: 'extension' | 'generator' | 'none', rentalDate?: string, returnDate?: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.productId === productId && 
        item.powerOption === powerOption &&
        item.rentalDate === rentalDate &&
        item.returnDate === returnDate
      );
      
      if (existingItem) {
        return prevCart.map(item =>
          (item.productId === productId && 
           item.powerOption === powerOption &&
           item.rentalDate === rentalDate &&
           item.returnDate === returnDate)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, { 
        productId, 
        quantity: 1, 
        powerOption,
        rentalDate,
        returnDate
      }];
    });
  };

  const removeFromCart = (productId: string, powerOption?: 'extension' | 'generator' | 'none', rentalDate?: string, returnDate?: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.productId === productId && 
        item.powerOption === powerOption &&
        item.rentalDate === rentalDate &&
        item.returnDate === returnDate
      );
      
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return prevCart.filter(item => 
            !(item.productId === productId && 
              item.powerOption === powerOption &&
              item.rentalDate === rentalDate &&
              item.returnDate === returnDate)
          );
        }
        
        return prevCart.map(item =>
          (item.productId === productId && 
           item.powerOption === powerOption &&
           item.rentalDate === rentalDate &&
           item.returnDate === returnDate)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      
      return prevCart;
    });
  };

  const getCartQuantity = (productId: string, powerOption?: 'extension' | 'generator' | 'none') => {
    // Sum all quantities for this product across all dates
    return cart
      .filter(item => item.productId === productId && item.powerOption === powerOption)
      .reduce((total, item) => total + item.quantity, 0);
  };

  const handleAddToCart = (product: Product) => {
    if (product.specs.powerReq) {
      setSelectedProduct(product);
      setShowPowerModal(true);
    } else {
      // For products without power requirements, still show the date picker
      setSelectedProduct(product);
      setSelectedPowerOption('none');
      setShowPowerModal(true);
    }
  };

  const handlePowerOptionConfirm = (rentalDate: string, returnDate: string, quantity: number = 1) => {
    if (selectedProduct) {
      // Add the specified quantity to cart
      for (let i = 0; i < quantity; i++) {
        addToCart(selectedProduct.id, selectedPowerOption, rentalDate, returnDate);
      }
      setShowPowerModal(false);
      setSelectedProduct(null);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric'
    });
  };

  const calculateRentalDays = (startDate?: string, endDate?: string) => {
    if (!startDate || !endDate) return 1;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Add the pirate ship product images
  const pirateProduct = products.find(p => p.id === 'pirate-ship');
  if (pirateProduct) {
    pirateProduct.images = [
      '/images/AI Pirate ship.webp',
      '/images/pirate 2.webp',
      '/images/pirate 3.webp',
      '/images/pirate 4.webp',
      '/images/pirate 5.webp',
      '/images/pirate 6.webp'
    ];
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Our Rental Collection</h1>
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-blue-600" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </div>
      </div>

      {cart.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <div className="space-y-4">
            {cart.map((item, index) => {
              const product = products.find(p => p.id === item.productId);
              const powerOption = item.powerOption ? powerOptions[item.powerOption] : null;
              const rentalDays = calculateRentalDays(item.rentalDate, item.returnDate);
              const itemTotal = (product?.price || 0) * item.quantity * rentalDays + 
                               (powerOption?.price || 0) * item.quantity;
              
              return product ? (
                <div key={`${item.productId}-${item.powerOption}-${item.rentalDate}-${index}`} 
                     className="flex flex-col md:flex-row md:justify-between md:items-center p-3 bg-white rounded-md shadow-sm">
                  <div className="mb-2 md:mb-0">
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-600 flex flex-col md:flex-row md:gap-3">
                      {powerOption && powerOption.price > 0 && (
                        <span className="md:after:content-['\2022'] md:after:mx-2">
                          + {powerOption.name}
                        </span>
                      )}
                      {item.rentalDate && item.returnDate && (
                        <span>
                          {formatDate(item.rentalDate)} - {formatDate(item.returnDate)}
                          {rentalDays > 1 && ` (${rentalDays} days)`}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:justify-end md:space-x-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeFromCart(item.productId, item.powerOption, item.rentalDate, item.returnDate)}
                        className="p-1 hover:bg-blue-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item.productId, item.powerOption, item.rentalDate, item.returnDate)}
                        className="p-1 hover:bg-blue-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-semibold">${itemTotal}</span>
                  </div>
                </div>
              ) : null;
            })}
          </div>
          <div className="flex justify-end border-t mt-4 pt-3">
            <div className="text-xl font-bold">
              Total: ${cart.reduce((total, item) => {
                const product = products.find(p => p.id === item.productId);
                const powerOption = item.powerOption ? powerOptions[item.powerOption] : null;
                const rentalDays = calculateRentalDays(item.rentalDate, item.returnDate);
                return total + ((product?.price || 0) * item.quantity * rentalDays) + 
                       ((powerOption?.price || 0) * item.quantity);
              }, 0)}
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-md text-sm">
            <p className="font-medium mb-1">Pickup & Delivery Information:</p>
            <p className="text-gray-700">Standard pickup/delivery hours are 7AM to 7PM.</p>
            <p className="text-gray-700">If you need extended hours, please note each hour beyond 7PM will incur an additional charge.</p>
          </div>
        </div>
      )}

      {categories.map(category => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 flex items-center">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id} className="flex flex-col h-full">
                  <ProductCard product={product} />
                  <div className="mt-4 flex items-center justify-center">
                    {getCartQuantity(product.id) > 0 ? (
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                        >
                          <Minus className="w-5 h-5 text-blue-600" />
                        </button>
                        <span className="font-medium text-lg">{getCartQuantity(product.id)}</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                        >
                          <Plus className="w-5 h-5 text-blue-600" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {showPowerModal && selectedProduct && (
        <PowerOptionsModal
          product={selectedProduct}
          powerOption={selectedPowerOption}
          onConfirm={handlePowerOptionConfirm}
          onClose={() => {
            setShowPowerModal(false);
            setSelectedProduct(null);
          }}
        />
      )}

      <div className="bg-blue-50 rounded-lg p-8 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Custom Orders and Special Requests</h2>
        <p className="text-gray-700 mb-4">
          Don't see exactly what you're looking for? We offer custom packages and can accommodate special requests to make your event perfect.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Contact Us for Custom Orders
        </button>
      </div>
    </div>
  );
}