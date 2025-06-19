
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';

interface GenomeNFTCardProps {
  id: string;
  name: string;
  dateCreated: string;
  accessLevel: string;
  ipfsLink: string;
}

const GenomeNFTCard = ({ id, name, dateCreated, accessLevel, ipfsLink }: GenomeNFTCardProps) => {
  return (
    <Card className="glassmorphism card-gradient border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Genome NFT #{id}</CardTitle>
        <p className="text-xs text-genechain-dark/50">Created: {dateCreated}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-genechain-dark/70">Name:</p>
            <p className="font-medium">{name}</p>
          </div>
          <div>
            <p className="text-genechain-dark/70">Access Level:</p>
            <p className="font-medium capitalize">{accessLevel}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm" className="text-xs">
          <FileText className="h-3 w-3 mr-1" />
          View Details
        </Button>
        <Button variant="ghost" size="sm" className="text-xs">
          <ExternalLink className="h-3 w-3 mr-1" />
          IPFS Link
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GenomeNFTCard;
