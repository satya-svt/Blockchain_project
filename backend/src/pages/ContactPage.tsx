import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

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
            <div className="glassmorphism rounded-xl p-8">
              <h2 className="text-xl font-medium text-genechain-dark mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Input
                    id="message"
                    as="textarea" 
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    required
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-gradient w-full mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;