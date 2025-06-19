
import React from 'react';
import GenomeResult, { GenomeResult as GenomeResultType } from './GenomeResult';

interface SearchResultsProps {
  results: GenomeResultType[];
  onRequestAccess: (genomeId: string) => void;
}

const SearchResults = ({ results, onRequestAccess }: SearchResultsProps) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-medium text-genechain-dark mb-3">Search Results</h2>
        <p className="text-sm text-genechain-dark/70">
          {results.length} genome NFTs found.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-12">
        {results.map((result) => (
          <GenomeResult 
            key={result.id} 
            result={result} 
            onRequestAccess={onRequestAccess} 
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
