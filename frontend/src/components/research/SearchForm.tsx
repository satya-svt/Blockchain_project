
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const SearchForm = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  handleSearch
}: SearchFormProps) => {
  return (
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
  );
};

export default SearchForm;
