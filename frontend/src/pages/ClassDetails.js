import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from '../components/ClassCard';

function ClassDetails() {
  const classes = [
    { id: 1, className: 'Class 1', numberOfStudents: 20 },
    { id: 2, className: 'Class 2', numberOfStudents: 18 },
    { id: 3, className: 'Class 3', numberOfStudents: 22 },
    { id: 4, className: 'Class 4', numberOfStudents: 23 },
    { id: 5, className: 'Class 5', numberOfStudents: 22 },
    { id: 6, className: 'Class 6', numberOfStudents: 25 },
    { id: 7, className: 'Class 7', numberOfStudents: 23 },
    { id: 8, className: 'Class 8', numberOfStudents: 26 },
    { id: 9, className: 'Class 9', numberOfStudents: 20 },
    { id: 10, className: 'Class 10', numberOfStudents: 23 }
  ];

  const navigate = useNavigate();

  const handleClassCardClick = (className) => {
    navigate(`/student-management/${className.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Manage Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classInfo) => (
            <ClassCard
              key={classInfo.id}
              className={classInfo.className}
              numberOfStudents={classInfo.numberOfStudents}
              onClick={() => handleClassCardClick(classInfo.className)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassDetails;