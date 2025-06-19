
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Github, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-genechain-light-purple to-genechain-light-blue py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-genechain-purple to-genechain-blue flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-lg font-semibold text-genechain-dark">GeneChain</span>
            </div>
            <p className="text-sm text-genechain-dark/70">
              The decentralized platform for genome ownership, privacy, and research access.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                <Book size={20} />
              </a>
              <a href="#" className="text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                <FileText size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-genechain-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-sm text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                  Upload Genome
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                  Research Portal
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-genechain-dark">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-genechain-dark/70 hover:text-genechain-purple transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-genechain-dark/10 mt-8 pt-8 text-sm text-genechain-dark/70 text-center">
          <p>© {currentYear} GeneChain. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Disclaimer: GeneChain is a demonstration platform. Please consult with healthcare professionals 
            before making medical decisions based on genetic data.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
