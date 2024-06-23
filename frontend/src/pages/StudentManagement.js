import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function StudentManagement() {
  const { className } = useParams();
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    setStudents([
      { id: 1, name: 'Student 1', status: 'Excellent' },
      { id: 2, name: 'Student 2', status: 'Good' },
      { id: 3, name: 'Student 3', status: 'Average' }
    ]);
  }, [className]);

  const handleAddStudent = () => {
    
    navigate(`/class/${className}/add`);
  };

  const handleEditStudent = (studentId) => {
    
    navigate(`/class/${className}/edit/${studentId}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Students in {className}</h2>
        <button
          onClick={handleAddStudent}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Student
        </button>
        <ul className="w-full">
          {students.map((student) => (
            <li key={student.id} className="flex justify-between items-center p-4 border-b">
              <span>{student.name} - {student.status}</span>
              <button
                onClick={() => handleEditStudent(student.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentManagement;
