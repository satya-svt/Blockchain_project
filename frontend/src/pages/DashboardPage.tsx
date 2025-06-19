
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GenomeNFTCard from '@/components/dashboard/GenomeNFTCard';
import AccessRequestCard from '@/components/dashboard/AccessRequestCard';
import { useToast } from '@/hooks/use-toast';

// Mock data
const mockGenomes = [
  {
    id: '1234',
    name: 'Personal Genome',
    dateCreated: '2025-03-15',
    accessLevel: 'private',
    ipfsLink: 'ipfs://QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco',
  },
  {
    id: '5678',
    name: 'Research Sample',
    dateCreated: '2025-03-20',
    accessLevel: 'researchers',
    ipfsLink: 'ipfs://QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG',
  },
];

const mockRequests = [
  {
    id: 'req-123',
    researcherName: 'Dr. Jane Smith',
    institution: 'Harvard Medical School',
    purpose: 'Researching genetic markers for early detection of Alzheimer\'s disease',
    date: '2025-04-01',
  },
  {
    id: 'req-456',
    researcherName: 'Prof. Michael Chen',
    institution: 'Stanford Genomics Institute',
    purpose: 'Study on rare genetic variations in cancer resistance',
    date: '2025-04-03',
  },
];

const mockAccessHistory = [
  {
    id: 'acc-123',
    genomeId: '1234',
    researcherName: 'Dr. Robert Johnson',
    institution: 'MIT Biology Department',
    purpose: 'CRISPR gene therapy research',
    timestamp: '2025-02-15 09:34:22',
    status: 'Completed',
  },
  {
    id: 'acc-456',
    genomeId: '1234',
    researcherName: 'Dr. Lisa Wang',
    institution: 'UCLA Medical Center',
    purpose: 'Personalized medicine protocols',
    timestamp: '2025-01-23 14:12:08',
    status: 'Completed',
  },
];

const DashboardPage = () => {
  const [genomes, setGenomes] = useState(mockGenomes);
  const [requests, setRequests] = useState(mockRequests);
  const [accessHistory] = useState(mockAccessHistory);
  
  const { toast } = useToast();
  
  const handleApproveRequest = (requestId: string) => {
    setRequests(requests.filter(req => req.id !== requestId));
    toast({
      title: "Access Approved",
      description: "The researcher has been granted access to your genome data.",
    });
  };
  
  const handleDenyRequest = (requestId: string) => {
    setRequests(requests.filter(req => req.id !== requestId));
    toast({
      title: "Access Denied",
      description: "The access request has been rejected.",
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-genechain-dark">Your Genome Dashboard</h1>
            <p className="text-genechain-dark/70 mt-2">
              Manage your genome NFTs, access requests, and research participation.
            </p>
          </div>
          
          <Tabs defaultValue="nfts" className="space-y-8">
            <TabsList className="glassmorphism">
              <TabsTrigger value="nfts">Your Genome NFTs</TabsTrigger>
              <TabsTrigger value="requests">Access Requests</TabsTrigger>
              <TabsTrigger value="history">Access History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="nfts" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {genomes.map(genome => (
                  <GenomeNFTCard
                    key={genome.id}
                    id={genome.id}
                    name={genome.name}
                    dateCreated={genome.dateCreated}
                    accessLevel={genome.accessLevel}
                    ipfsLink={genome.ipfsLink}
                  />
                ))}
              </div>
              
              {genomes.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-genechain-dark/70">You don't have any genome NFTs yet.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="requests" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {requests.map(request => (
                  <AccessRequestCard
                    key={request.id}
                    id={request.id}
                    researcherName={request.researcherName}
                    institution={request.institution}
                    purpose={request.purpose}
                    date={request.date}
                    onApprove={handleApproveRequest}
                    onDeny={handleDenyRequest}
                  />
                ))}
              </div>
              
              {requests.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-genechain-dark/70">You don't have any pending access requests.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="history">
              <div className="glassmorphism rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-genechain-light-purple/20">
                        <th className="py-3 px-4 text-left">Researcher</th>
                        <th className="py-3 px-4 text-left">Institution</th>
                        <th className="py-3 px-4 text-left">Purpose</th>
                        <th className="py-3 px-4 text-left">Timestamp</th>
                        <th className="py-3 px-4 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {accessHistory.map(entry => (
                        <tr key={entry.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{entry.researcherName}</td>
                          <td className="py-3 px-4">{entry.institution}</td>
                          <td className="py-3 px-4">{entry.purpose}</td>
                          <td className="py-3 px-4">{entry.timestamp}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                              {entry.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {accessHistory.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-genechain-dark/70">No access history available.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
