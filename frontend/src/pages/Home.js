import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Tuition Management System</h2>
        <div className="grid grid-cols-1 gap-4">
          <Link
            to="/login/principal"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg block text-center transition duration-300 mb-4"
          >
            Principal Login
          </Link>
          <Link
            to="/login/teacher"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg block text-center transition duration-300 mb-4"
          >
            Teacher Login
          </Link>
          <Link
            to="/login/student"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg block text-center transition duration-300 mb-4"
          >
            Student Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
