// src/components/Teachers.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            const response = await api.get('/teachers');
            setTeachers(response.data);
        };

        fetchTeachers();
    }, []);

    return (
        <div>
            <h1>Teachers</h1>
            <ul>
                {teachers.map(teacher => (
                    <li key={teacher.id}>{teacher.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Teachers;
