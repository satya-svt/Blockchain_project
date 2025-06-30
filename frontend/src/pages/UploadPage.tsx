
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import FileUploader from '@/components/upload/FileUploader';
import { useToast } from '@/hooks/use-toast';

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accessLevel, setAccessLevel] = useState('private');
  const [consentResearch, setConsentResearch] = useState(false);
  const [consentTerms, setConsentTerms] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const { toast } = useToast();

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      toast({
        title: "Missing file",
        description: "Please upload a genome file to continue.",
        variant: "destructive",
      });
      return;
    }

    if (!name || !email || !consentTerms) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and accept the terms.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      toast({
        title: "Upload successful!",
        description: "Your genome file has been uploaded and your NFT is being minted.",
      });
      setIsUploading(false);

      // Redirect to dashboard after successful upload
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-genechain-dark mb-3">Upload Your Genome</h1>
            <p className="text-genechain-dark/70">
              Your genomic data will be encrypted and stored securely. Create an NFT to prove ownership and control access.
            </p>
          </div>

          <div className="glassmorphism rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-xl font-medium text-genechain-dark mb-4">1. Upload Genome File</h2>
                <FileUploader onFileSelect={handleFileSelect} />
              </div>

              <div>
                <h2 className="text-xl font-medium text-genechain-dark mb-4">2. User Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium text-genechain-dark mb-4">3. Access Control</h2>
                <div className="space-y-2">
                  <Label htmlFor="access-level">Who can access your data?</Label>
                  <Select
                    value={accessLevel}
                    onValueChange={setAccessLevel}
                  >
                    <SelectTrigger id="access-level" className="w-full">
                      <SelectValue placeholder="Select access level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open (Anyone can access)</SelectItem>
                      <SelectItem value="researchers">Only approved researchers</SelectItem>
                      <SelectItem value="private">Private (Only you)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium text-genechain-dark mb-4">4. Consent</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent-research"
                      checked={consentResearch}
                      onCheckedChange={(checked) => setConsentResearch(checked as boolean)}
                    />
                    <div>
                      <Label
                        htmlFor="consent-research"
                        className="text-sm font-normal leading-tight cursor-pointer"
                      >
                        I consent to my anonymized genetic data being used for scientific research purposes that I explicitly approve.
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent-terms"
                      checked={consentTerms}
                      onCheckedChange={(checked) => setConsentTerms(checked as boolean)}
                      required
                    />
                    <div>
                      <Label
                        htmlFor="consent-terms"
                        className="text-sm font-normal leading-tight cursor-pointer"
                      >
                        I agree to the GeneChain Terms of Service and Privacy Policy. I understand that I retain ownership of my genetic data.
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="btn-gradient w-full py-6"
                  disabled={isUploading}
                >
                  {isUploading ? "Processing..." : "Upload to IPFS & Mint NFT"}
                </Button>
                <p className="text-xs text-center mt-4 text-genechain-dark/50">
                  This will require a wallet connection and transaction approval.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
