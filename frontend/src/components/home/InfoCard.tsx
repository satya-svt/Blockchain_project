
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const InfoCard = ({ title, description, icon, className }: InfoCardProps) => {
  return (
    <Card className={cn("glassmorphism card-gradient border-0 overflow-hidden animate-float", className)}>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-genechain-purple/20 to-genechain-light-blue/20 flex items-center justify-center mb-2">
          {icon}
        </div>
        <CardTitle className="text-lg font-medium text-genechain-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-genechain-dark/70">{description}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
