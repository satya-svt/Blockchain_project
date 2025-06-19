
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import SearchForm from '@/components/research/SearchForm';
import SearchResults from '@/components/research/SearchResults';
import RequestAccessForm from '@/components/research/RequestAccessForm';
import { GenomeResult } from '@/components/research/GenomeResult';

// Mock data
const mockSearchResults: GenomeResult[] = [
  {
    id: 'genome-123',
    title: 'Anonymous Genome #123',
    dataType: 'Full Exome',
    tags: ['Cardiovascular', 'European Ancestry'],
    owner: '0x1a2...3b4c',
  },
  {
    id: 'genome-456',
    title: 'Anonymous Genome #456',
    dataType: 'SNP Array',
    tags: ['Neurological', 'East Asian Ancestry'],
    owner: '0x5d6...7e8f',
  },
  {
    id: 'genome-789',
    title: 'Anonymous Genome #789',
    dataType: 'Full Genome',
    tags: ['Rare Disease', 'African Ancestry'],
    owner: '0x9a0...1b2c',
  },
];

const ResearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchResults, setSearchResults] = useState(mockSearchResults);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [selectedGenome, setSelectedGenome] = useState<string | null>(null);
  
  const { toast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would query an API
    // For now, just use our mock data
    toast({
      title: "Search complete",
      description: `Found ${mockSearchResults.length} genome NFTs matching your criteria.`,
    });
  };
  
  const handleRequestAccess = (genomeId: string) => {
    setSelectedGenome(genomeId);
    setShowRequestForm(true);
  };
  
  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Access Request Sent",
      description: "Your request has been submitted to the genome owner for review.",
    });
    setShowRequestForm(false);
    setSelectedGenome(null);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-genechain-dark">Researcher Portal</h1>
            <p className="text-genechain-dark/70 mt-2">
              Search and request access to genome NFTs for your research projects.
            </p>
          </div>
          
          <SearchForm 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            handleSearch={handleSearch}
          />
          
          <SearchResults 
            results={searchResults}
            onRequestAccess={handleRequestAccess}
          />
          
          {showRequestForm && (
            <RequestAccessForm 
              onSubmit={handleSubmitRequest}
              onCancel={() => setShowRequestForm(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;

// This component serves as the main Research Page for the GeneChain application.