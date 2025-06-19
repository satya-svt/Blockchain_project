
import React from 'react';

const ContactInformation = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-medium text-genechain-dark mb-3">Contact Information</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-genechain-dark/70">contact@genechain.io</p>
          </div>
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-genechain-dark/70">San Francisco, CA</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-medium text-genechain-dark mb-3">For Researchers</h2>
        <p className="text-genechain-dark/70 mb-3">
          If you're interested in accessing genomic data for research purposes, please email:
        </p>
        <p className="font-medium">research@genechain.io</p>
      </div>
      
      <div>
        <h2 className="text-xl font-medium text-genechain-dark mb-3">Support Hours</h2>
        <p className="text-genechain-dark/70">
          Monday - Friday: 9AM - 6PM PST<br />
          Saturday - Sunday: Closed
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
