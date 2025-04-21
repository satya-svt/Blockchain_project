import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Search, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data
const mockSearchResults = [
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
          
          <div className="glassmorphism rounded-xl p-6 md:p-8 mb-12">
            <h2 className="text-xl font-medium text-genechain-dark mb-6">Search Genome Database</h2>
            
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Input
                    type="text"
                    placeholder="Search by disease, trait, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="disease">Disease Research</SelectItem>
                      <SelectItem value="ancestry">Ancestry Studies</SelectItem>
                      <SelectItem value="pharmacogenomics">Pharmacogenomics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="btn-gradient">
                  <Search className="h-4 w-4 mr-2" />
                  Search Genomes
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-medium text-genechain-dark mb-3">Search Results</h2>
            <p className="text-sm text-genechain-dark/70">
              {searchResults.length} genome NFTs found.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 mb-12">
            {searchResults.map((result) => (
              <Card key={result.id} className="glassmorphism border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-lg">{result.title}</h3>
                      <p className="text-sm text-genechain-dark/70 mb-2">Type: {result.dataType}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {result.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-genechain-light-purple px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-genechain-dark/50">Owner: {result.owner}</p>
                    </div>
                    <div className="flex gap-2 md:flex-col lg:flex-row">
                      <Button 
                        variant="outline" 
                        size="sm"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View Metadata
                      </Button>
                      <Button 
                        className="btn-gradient"
                        size="sm"
                        onClick={() => handleRequestAccess(result.id)}
                      >
                        Request Access
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {showRequestForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="glassmorphism rounded-xl p-6 max-w-lg w-full">
                <h2 className="text-xl font-medium text-genechain-dark mb-6">
                  Request Access to Genome
                </h2>
                
                <form onSubmit={handleSubmitRequest} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Researcher Name</label>
                    <Input type="text" placeholder="Dr. Jane Smith" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Institution</label>
                    <Input type="text" placeholder="University or Research Organization" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Research Purpose</label>
                    <Input 
                      as="textarea" 
                      rows={3} 
                      placeholder="Describe your research and how this genome data will contribute..." 
                      required 
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Requested Access Duration</label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-4 flex gap-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowRequestForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="btn-gradient flex-1"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Submit Request
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;