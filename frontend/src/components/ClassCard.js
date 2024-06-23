// src/components/ClassCard.js
import React from 'react';

function ClassCard({ className, numberOfStudents, onClick }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer transition duration-300">
      <h3 className="text-lg font-semibold">{className}</h3>
      <p className="text-gray-600 mt-2">{numberOfStudents} Students</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
        onClick={() => onClick(className)}
      >
        View Students
      </button>
    </div>
  );
}

export default ClassCard;
