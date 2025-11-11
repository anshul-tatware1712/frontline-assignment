import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import LandingPage from './components/LandingPage';
import CompaniesTable from './components/CompaniesTable';
import type { Company } from './types/company';
import { AlertCircle, Loader } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'companies'>('landing');

  const { data: companies = [], isLoading, error } = useQuery<Company[]>({
    queryKey: ['companies'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/companies');
      if (!response.ok) {
        throw new Error('Failed to fetch companies');
      }
      return response.json();
    },
    enabled: currentView === 'companies',
  });

  const handleViewCompanies = () => {
    setCurrentView('companies');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen">
      {currentView === 'landing' ? (
        <LandingPage onViewCompanies={handleViewCompanies} />
      ) : (
        <>
          {isLoading && (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="flex flex-col items-center space-y-4">
                <Loader className="h-8 w-8 animate-spin text-blue-600" />
                <p className="text-gray-600">Loading companies...</p>
              </div>
            </div>
          )}
          {error && (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="flex flex-col items-center space-y-4 max-w-md">
                <AlertCircle className="h-8 w-8 text-red-600" />
                <p className="text-gray-900 font-semibold">Error loading companies</p>
                <p className="text-gray-600 text-center">
                  {error instanceof Error ? error.message : 'An unexpected error occurred'}
                </p>
                <button
                  onClick={handleBackToLanding}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
          {!isLoading && !error && (
            <CompaniesTable companies={companies} onBack={handleBackToLanding} />
          )}
        </>
      )}
    </div>
  );
};

export default App;