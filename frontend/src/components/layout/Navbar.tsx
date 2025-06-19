
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Wallet } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Upload', path: '/upload' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Research Portal', path: '/research' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-genechain-purple to-genechain-blue flex items-center justify-center">
            <span className="text-white font-bold">G</span>
          </div>
          <span className="text-lg font-semibold text-genechain-dark">GeneChain</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-genechain-purple ${
                  location.pathname === item.path 
                    ? 'text-genechain-purple'
                    : 'text-genechain-dark/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <Button 
            className="btn-gradient"
            onClick={() => alert('Connect Wallet Feature Coming Soon!')}
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium px-2 py-2 rounded-md transition-colors hover:bg-genechain-light-purple ${
                  location.pathname === item.path 
                    ? 'text-genechain-purple bg-genechain-light-purple'
                    : 'text-genechain-dark/80'
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="btn-gradient w-full mt-2"
              onClick={() => alert('Connect Wallet Feature Coming Soon!')}
            >
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
