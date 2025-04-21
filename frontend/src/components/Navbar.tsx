import React, { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'upload', label: 'Upload' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'research', label: 'Research Portal' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-600 cursor-pointer" onClick={() => setCurrentPage('home')}>
              GeneChain
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-gray-600 hover:text-purple-600 transition-colors ${
                  currentPage === item.id ? 'text-purple-600 font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 
              transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md
              transition-all duration-150 ease-in-out hover:bg-purple-700 relative
              before:absolute before:inset-0 before:bg-white/20 before:rounded-lg
              before:translate-y-1 before:z-[-1]">
              <Wallet size={20} />
              <span>Connect Wallet</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-gray-600 hover:bg-purple-50 ${
                  currentPage === item.id ? 'text-purple-600 bg-purple-50' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 
              transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md
              transition-all duration-150 ease-in-out hover:bg-purple-700 relative
              before:absolute before:inset-0 before:bg-white/20 before:rounded-lg
              before:translate-y-1 before:z-[-1]">
              <Wallet size={20} />
              <span>Connect Wallet</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;