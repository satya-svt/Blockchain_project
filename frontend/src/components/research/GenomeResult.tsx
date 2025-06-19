
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export interface GenomeResult {
  id: string;
  title: string;
  dataType: string;
  tags: string[];
  owner: string;
}

interface GenomeResultProps {
  result: GenomeResult;
  onRequestAccess: (genomeId: string) => void;
}

const GenomeResult = ({ result, onRequestAccess }: GenomeResultProps) => {
  return (
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
              onClick={() => onRequestAccess(result.id)}
            >
              Request Access
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GenomeResult;
