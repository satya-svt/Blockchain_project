import React from 'react';
import { Github, FileDown, Scale } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-16 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-purple-600 mb-4">GeneChain</h3>
            <p className="text-gray-600 mb-4">
              Empowering individuals to own and control their genetic data through
              blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <FileDown size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Scale size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Whitepaper</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Data Usage</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Disclaimers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} GeneChain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;