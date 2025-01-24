import { AlertCircle } from 'lucide-react';

const NoCollegesFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <AlertCircle className="w-24 h-24 text-red-500 mb-6" />
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Colleges Found</h2>
      <p className="text-gray-600 mb-6">We couldn't find any colleges matching your criteria. Please try again later or adjust your filters.</p>
      <button 
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition-colors"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
};

export default NoCollegesFound;
