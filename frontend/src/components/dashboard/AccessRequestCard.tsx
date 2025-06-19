
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface AccessRequestCardProps {
  id: string;
  researcherName: string;
  institution: string;
  purpose: string;
  date: string;
  onApprove: (id: string) => void;
  onDeny: (id: string) => void;
}

const AccessRequestCard = ({ 
  id, 
  researcherName, 
  institution, 
  purpose, 
  date, 
  onApprove, 
  onDeny 
}: AccessRequestCardProps) => {
  return (
    <Card className="glassmorphism border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Access Request</CardTitle>
        <p className="text-xs text-genechain-dark/50">Received: {date}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-medium">{researcherName}</p>
          <p className="text-xs text-genechain-dark/70">{institution}</p>
        </div>
        <div>
          <p className="text-xs text-genechain-dark/70">Research Purpose:</p>
          <p className="text-sm">{purpose}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="border-green-500 text-green-600 hover:bg-green-50"
          onClick={() => onApprove(id)}
        >
          <Check className="h-3 w-3 mr-1" />
          Approve
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-red-500 text-red-600 hover:bg-red-50"
          onClick={() => onDeny(id)}
        >
          <X className="h-3 w-3 mr-1" />
          Deny
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccessRequestCard;
