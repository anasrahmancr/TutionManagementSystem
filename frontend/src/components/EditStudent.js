import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent() {
  const { className, studentId } = useParams();
  const [studentName, setStudentName] = useState('');
  const [status, setStatus] = useState('Excellent');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch student details from API using studentId
    // Example: fetch(`/api/student/${studentId}`)
    //   .then(response => response.json())
    //   .then(data => { setStudentName(data.name); setStatus(data.status); });

    // Placeholder data for demonstration
    setStudentName('Student 1');
    setStatus('Excellent');
  }, [studentId]);

  const handleEditStudent = () => {
    // Update student API call
    // Example: fetch(`/api/editStudent/${studentId}`, { method: 'PUT', body: JSON.stringify({ name: studentName, status }) });

    // After editing student, navigate back to class details page
    navigate(`/class/${className}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Edit Student in {className}</h2>
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
          onClick={handleEditStudent}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditStudent;
