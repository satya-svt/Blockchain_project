
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-genechain-dark mb-3">About GeneChain</h1>
            <p className="text-lg text-genechain-dark/70">
              Revolutionizing genomic data ownership and research participation
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="lead">
              GeneChain empowers individuals to take control of their genetic data through blockchain technology and NFTs.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              We believe that individuals should have complete ownership and control over their genetic information. Our mission is to create a transparent, secure platform where:
            </p>
            <ul>
              <li>People can securely store and manage access to their genomic data</li>
              <li>Researchers can ethically access diverse genetic information with proper consent</li>
              <li>The value of genetic data is fairly distributed to its rightful owners</li>
            </ul>
            
            <h2>How GeneChain Works</h2>
            <p>
              GeneChain uses blockchain technology to create an immutable record of data ownership and access. When you upload your genetic data, we:
            </p>
            <ol>
              <li>Encrypt your data using advanced encryption standards</li>
              <li>Store the encrypted data on decentralized storage (IPFS)</li>
              <li>Mint an NFT that represents ownership of your genomic data</li>
              <li>Allow you to control who can access your data and for what purpose</li>
              <li>Provide a transparent log of all access requests and approvals</li>
            </ol>
            
            <h2>For Researchers</h2>
            <p>
              GeneChain provides a revolutionary platform for genetic research:
            </p>
            <ul>
              <li>Access to diverse, global genetic datasets</li>
              <li>Transparent consent process ensures ethical data usage</li>
              <li>Direct connection with data owners</li>
              <li>Reproducible research through verifiable data provenance</li>
            </ul>
            
            <h2>Our Team</h2>
            <p>
              GeneChain was founded by a team of experts in genomics, blockchain technology, and data privacy. Our advisors include leading researchers from major universities and medical institutions.
            </p>
            
            <div className="text-center mt-12">
              <Button asChild className="btn-gradient">
                <Link to="/upload">Join GeneChain Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
