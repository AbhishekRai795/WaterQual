import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Activity, FileCheck } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Water Quality Analysis System
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Advanced water quality monitoring and analysis platform for accurate assessment
          of water parameters and safety indicators.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
            <Droplets className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Water Testing</h3>
          <p className="text-gray-600">
            Comprehensive analysis of water samples for various quality parameters.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
            <Activity className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Real-time Monitoring</h3>
          <p className="text-gray-600">
            Continuous monitoring of water quality metrics with instant updates.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mb-4">
            <FileCheck className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Reports</h3>
          <p className="text-gray-600">
            Detailed reports with analysis results and recommendations.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/analysis"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Start Analysis
        </Link>
      </div>
    </div>
  );
};

export default Home;