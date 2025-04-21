import React from 'react';
import { Dna, Shield, DollarSign } from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGetStarted }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Dna size={64} className="mx-auto text-purple-600 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Own Your Genome. Control Your Data.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Upload your DNA, mint a genome NFT, and control research access to your genetic data.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold 
            transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md
            transition-all duration-150 ease-in-out
            hover:bg-purple-700 relative
            before:absolute before:inset-0 before:bg-white/20 before:rounded-lg
            before:translate-y-1.5 before:z-[-1]"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
            <Dna className="text-purple-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">How it Works</h3>
          <p className="text-gray-600">
            Upload your genetic data, and we'll securely store it on IPFS. Your data becomes an NFT,
            giving you complete control over who can access it and how it's used.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
            <Shield className="text-purple-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy & Encryption</h3>
          <p className="text-gray-600">
            Your genetic data is encrypted using state-of-the-art technology. Only you can grant or
            revoke access to researchers through smart contracts.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
            <DollarSign className="text-purple-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Monetization</h3>
          <p className="text-gray-600">
            Set your terms for data access. Receive compensation when researchers use your genetic
            data for studies, all managed through smart contracts.
          </p>
        </div>
      </section>

      {/* Feature Image */}
      <section className="relative h-96 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=2000&q=80"
          alt="DNA Research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex items-center">
          <div className="text-white p-8 md:p-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Genome Data Management
            </h2>
            <p className="text-lg opacity-90">
              Join the future of personalized medicine while maintaining complete control over your
              genetic information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;