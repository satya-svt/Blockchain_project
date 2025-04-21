import React, { useState } from 'react';
import { Search, Filter, FileText } from 'lucide-react';

const ResearcherPortal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for demonstration
  const genomes = [
    {
      id: 1,
      title: 'Genome Dataset #1',
      tags: ['Cardiovascular', 'European'],
      owner: '0x1234...5678',
      date: '2024-03-15',
    },
    {
      id: 2,
      title: 'Genome Dataset #2',
      tags: ['Neurological', 'Asian'],
      owner: '0x8765...4321',
      date: '2024-03-14',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Researcher Portal
        </h1>
        <p className="text-gray-600">
          Search and request access to genomic data for your research
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by disease, region, or other tags..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {['Cardiovascular', 'Neurological', 'Oncological', 'European', 'Asian', 'African'].map(
            (tag) => (
              <button
                key={tag}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200"
              >
                {tag}
              </button>
            )
          )}
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {genomes.map((genome) => (
          <div
            key={genome.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {genome.title}
                </h3>
                <p className="text-sm text-gray-500">Owner: {genome.owner}</p>
                <p className="text-sm text-gray-500">Added: {genome.date}</p>
              </div>
              <FileText className="text-purple-600" size={24} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {genome.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Request Access
            </button>
          </div>
        ))}
      </div>

      {/* Access Request Form */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Request Data Access
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Research Institution
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="University or Research Center"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Research Purpose
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              rows={4}
              placeholder="Describe your research objectives and how you plan to use the data..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Duration
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
              <option>1-3 months</option>
              <option>3-6 months</option>
              <option>6-12 months</option>
              <option>More than 12 months</option>
            </select>
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to use the data only for the stated research purpose and
              comply with all applicable privacy and ethical guidelines.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResearcherPortal;