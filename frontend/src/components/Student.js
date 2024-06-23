// src/components/Students.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Student = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await api.get('/students');
            setStudents(response.data);
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Students</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Student;
