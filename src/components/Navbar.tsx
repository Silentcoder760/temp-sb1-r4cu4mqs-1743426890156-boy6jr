import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield, Tag } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Veteran-Owned Banner */}
      <div className="bg-blue-700 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 md:mb-0">
            <Shield className="w-4 h-4 mr-2" />
            <span className="font-semibold">US Veteran-Owned Company</span>
          </div>
          <div>Proudly Serving DFW Area - Specializing in East Dallas</div>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">Rental Business</Link>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
                <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}