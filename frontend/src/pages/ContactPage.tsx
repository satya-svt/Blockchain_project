
import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import ContactInformation from '@/components/contact/ContactInformation';

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-genechain-dark mb-3">Contact Us</h1>
            <p className="text-lg text-genechain-dark/70">
              Have questions about GeneChain? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
