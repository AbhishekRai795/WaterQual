import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react';

interface WaterQualityResult {
  potability: boolean;
  confidence: number;
  recommendations: string[];
}

const Results = () => {
  const location = useLocation();
  const results = (location.state?.results || {}) as WaterQualityResult;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-center mb-8">
          {results.potability ? (
            <CheckCircle className="h-16 w-16 text-green-500" />
          ) : (
            <AlertTriangle className="h-16 w-16 text-red-500" />
          )}
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Water Quality Results
        </h2>

        <div className="text-center mb-8">
          <div className={`text-xl font-semibold ${results.potability ? 'text-green-600' : 'text-red-600'}`}>
            {results.potability ? 'Water is Potable' : 'Water is Not Potable'}
          </div>
          <div className="text-gray-600 mt-2">
            Confidence: {(results.confidence * 100).toFixed(2)}%
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommendations</h3>
          <ul className="space-y-2">
            {results.recommendations?.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-blue-500">•</span>
                <span className="ml-2 text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <Link
            to="/analysis"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            New Analysis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;