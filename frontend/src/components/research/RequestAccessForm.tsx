
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check } from 'lucide-react';

interface RequestAccessFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const RequestAccessForm = ({ onSubmit, onCancel }: RequestAccessFormProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="glassmorphism rounded-xl p-6 max-w-lg w-full">
        <h2 className="text-xl font-medium text-genechain-dark mb-6">
          Request Access to Genome
        </h2>
        
        <form onSubmit={onSubmit} className="space-y-4">
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
            <Textarea 
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
              onClick={onCancel}
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
  );
};

export default RequestAccessForm;
