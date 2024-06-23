import React from 'react';
import { Link } from 'react-router-dom';

function PrincipalDashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Principal Dashboard</h2>
        <div className="grid grid-cols-1 gap-6">
          <Link to="/class-details">
            <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-4 px-6 flex items-center justify-between transition duration-300 mb-4 shadow-md">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 0 1 .832.445l3.827 5.5A1 1 0 0 1 15 10h-4v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-.832-1.555l3.827-5.5A1 1 0 0 1 5 3h5zm-4.293 1.105L2.38 8h3.24l-2.52 3.625L8.12 10H4.88l2.827-4.095zm8.586 0L11.12 10h3.24l2.52-3.625L15.88 8h-3.24l2.827-4.095z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Manage Students</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          <Link to="/manage-teachers">
            <div className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-4 px-6 flex items-center justify-between transition duration-300 mb-4 shadow-md">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 0 1 .832.445l3.827 5.5A1 1 0 0 1 15 10h-4v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-.832-1.555l3.827-5.5A1 1 0 0 1 5 3h5zm-4.293 1.105L2.38 8h3.24l-2.52 3.625L8.12 10H4.88l2.827-4.095zm8.586 0L11.12 10h3.24l2.52-3.625L15.88 8h-3.24l2.827-4.095z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Manage Teachers</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          <Link to="/dashboard">
            <div className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-4 px-6 flex items-center justify-between mb-4 shadow-md">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 0 1 .832.445l3.827 5.5A1 1 0 0 1 15 10h-4v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-.832-1.555l3.827-5.5A1 1 0 0 1 5 3h5zm-4.293 1.105L2.38 8h3.24l-2.52 3.625L8.12 10H4.88l2.827-4.095zm8.586 0L11.12 10h3.24l2.52-3.625L15.88 8h-3.24l2.827-4.095z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Dashboard</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrincipalDashboard;
