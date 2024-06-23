import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function AddStudent() {
  const { className } = useParams();
  const [studentName, setStudentName] = useState('');
  const [status, setStatus] = useState('Excellent');
  const navigate = useNavigate();

  const handleAddStudent = () => {
    // Add student API call
    // Example: fetch('/api/addStudent', { method: 'POST', body: JSON.stringify({ name: studentName, status, className }) });

    // After adding student, navigate back to class details page
    navigate(`/class/${className}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add Student to {className}</h2>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Student Name"
          className="w-full p-2 mb-4 border rounded"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
        <button
          onClick={handleAddStudent}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Student
        </button>
      </div>
    </div>
  );
}

export default AddStudent;
