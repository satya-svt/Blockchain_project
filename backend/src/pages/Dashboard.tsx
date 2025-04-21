import React from 'react';
import { CheckCircle, XCircle, Clock, ExternalLink } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const nfts = [
    {
      id: 1,
      name: 'Genome NFT #1',
      ipfsHash: 'QmX...abc',
      accessLevel: 'Private',
      created: '2024-03-10',
    },
  ];

  const accessRequests = [
    {
      id: 1,
      researcher: 'Dr. Sarah Johnson',
      institution: 'GeneTech Research',
      purpose: 'Cancer Research Study',
      requested: '2024-03-15',
    },
  ];

  const accessHistory = [
    {
      id: 1,
      researcher: 'Dr. Michael Smith',
      purpose: 'Cardiovascular Study',
      timestamp: '2024-03-14 15:30',
      status: 'Approved',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Your Genome Dashboard</h1>

      {/* Your NFTs */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Genome NFTs</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">IPFS Hash</th>
                <th className="text-left py-3 px-4">Access Level</th>
                <th className="text-left py-3 px-4">Created</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {nfts.map(nft => (
                <tr key={nft.id} className="border-b">
                  <td className="py-3 px-4">{nft.name}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-sm">{nft.ipfsHash}</span>
                      <ExternalLink size={16} className="text-purple-600" />
                    </div>
                  </td>
                  <td className="py-3 px-4">{nft.accessLevel}</td>
                  <td className="py-3 px-4">{nft.created}</td>
                  <td className="py-3 px-4">
                    <button className="text-purple-600 hover:text-purple-700 transform hover:-translate-y-0.5 transition-transform">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Access Requests */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Pending Access Requests
        </h2>
        <div className="space-y-4">
          {accessRequests.map(request => (
            <div
              key={request.id}
              className="border rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">{request.researcher}</h3>
                <p className="text-sm text-gray-600">{request.institution}</p>
                <p className="text-sm text-gray-600">Purpose: {request.purpose}</p>
                <p className="text-sm text-gray-500">
                  Requested: {request.requested}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg 
                  transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md
                  transition-all duration-150 ease-in-out hover:bg-green-700 relative
                  before:absolute before:inset-0 before:bg-white/20 before:rounded-lg
                  before:translate-y-1 before:z-[-1]">
                  Approve
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg
                  transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md
                  transition-all duration-150 ease-in-out hover:bg-red-700 relative
                  before:absolute before:inset-0 before:bg-white/20 before:rounded-lg
                  before:translate-y-1 before:z-[-1]">
                  Deny
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Access History */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Access History
        </h2>
        <div className="space-y-4">
          {accessHistory.map(entry => (
            <div
              key={entry.id}
              className="border rounded-lg p-4 flex items-center space-x-4"
            >
              {entry.status === 'Approved' ? (
                <CheckCircle className="text-green-500" />
              ) : entry.status === 'Denied' ? (
                <XCircle className="text-red-500" />
              ) : (
                <Clock className="text-yellow-500" />
              )}
              <div>
                <h3 className="font-semibold">{entry.researcher}</h3>
                <p className="text-sm text-gray-600">Purpose: {entry.purpose}</p>
                <p className="text-sm text-gray-500">{entry.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;