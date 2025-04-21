import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DNAAnimation from '@/components/home/DNAAnimation';
import InfoCard from '@/components/home/InfoCard';
import { Database, Lock, Wallet, ArrowUp, ArrowDown, Dna } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-genechain-dark leading-tight">
                Own Your Genome. <br />
                <span className="text-genechain-purple">Control Your Data.</span>
              </h1>
              <p className="text-lg text-genechain-dark/80 max-w-md">
                Upload your DNA, mint a genome NFT, and control research access to your genetic data.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="btn-gradient">
                  <Link to="/upload">Get Started</Link>
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="lg:flex justify-center hidden">
              <DNAAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-genechain-dark mb-3">How It Works</h2>
            <p className="text-genechain-dark/70 max-w-xl mx-auto">
              Take control of your genetic data in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-genechain-light-purple flex items-center justify-center mb-4">
                <ArrowUp className="h-8 w-8 text-genechain-purple" />
              </div>
              <h3 className="text-xl font-medium text-genechain-dark mb-2">Upload</h3>
              <p className="text-sm text-genechain-dark/70">
                Securely upload your genome data file (.txt, .vcf, etc.)
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-genechain-light-blue flex items-center justify-center mb-4">
                <Dna className="h-8 w-8 text-genechain-blue" />
              </div>
              <h3 className="text-xl font-medium text-genechain-dark mb-2">Mint NFT</h3>
              <p className="text-sm text-genechain-dark/70">
                Turn your genome into a unique NFT that proves your ownership
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-genechain-light-purple flex items-center justify-center mb-4">
                <ArrowDown className="h-8 w-8 text-genechain-purple" />
              </div>
              <h3 className="text-xl font-medium text-genechain-dark mb-2">Control</h3>
              <p className="text-sm text-genechain-dark/70">
                Approve or deny access requests from researchers and earn rewards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-genechain-light-purple/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-genechain-dark mb-3">Why Choose GeneChain?</h2>
            <p className="text-genechain-dark/70 max-w-xl mx-auto">
              Our platform offers unparalleled security, privacy, and control over your genetic information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
              title="Privacy & Encryption"
              description="Your genomic data is end-to-end encrypted. Only you control who can access it and for what purpose."
              icon={<Lock className="h-6 w-6 text-genechain-purple" />}
            />
            <InfoCard
              title="Blockchain Security"
              description="Built on decentralized technology for immutable records and transparent access management."
              icon={<Database className="h-6 w-6 text-genechain-blue" />}
            />
            <InfoCard
              title="Monetization"
              description="Earn rewards when researchers access your data for studies you approve."
              icon={<Wallet className="h-6 w-6 text-genechain-purple" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-genechain-purple to-genechain-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to take control of your genetic data?</h2>
          <p className="text-lg mb-8 text-white/80 max-w-xl mx-auto">
            Join thousands who have already secured their genomic information on GeneChain.
          </p>
          <Button asChild size="lg" className="bg-white text-genechain-purple hover:bg-white/90">
            <Link to="/upload">Upload Your Genome</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;