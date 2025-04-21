import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="glassmorphism rounded-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-genechain-purple to-genechain-blue flex items-center justify-center mx-auto">
            <span className="text-white text-4xl font-bold">404</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-genechain-dark mb-2">Page Not Found</h1>
        <p className="text-genechain-dark/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Button asChild className="btn-gradient">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;