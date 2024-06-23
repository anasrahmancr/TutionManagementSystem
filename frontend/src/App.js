import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import StudentsHome from './pages/Students';
// import TeachersHome from './pages/TeachersHome';
import PrincipalDashboard from './pages/PrincipalDashboard';
import LoginPrincipal from './pages/LoginPrincipal';
import LoginTeacher from './pages/LoginTeacher';
import LoginStudent from './pages/LoginStudent';
import StudentManagement from './pages/StudentManagement';
import ClassDetails from './pages/ClassDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/students" element={<Students />} /> */}
        {/* <Route path="/teachers" element={<Teachers />} /> */}
        <Route path="/class-details" element={<ClassDetails />} />
        {/* <Route path="/class-details/:className/add" element={<AddStudent />} />
        <Route path="/class-details/:className/edit/:studentId" element={<EditStudent />} /> */}
        <Route path="/student-management/:className" element={<StudentManagement />} />
        <Route path="/principal" element={<PrincipalDashboard/>} />
        <Route path="/login/principal" element={<LoginPrincipal />} />
        <Route path="/login/teacher" element={<LoginTeacher />} />
        <Route path="/login/student" element={<LoginStudent />} />
      </Routes>
    </div>
  );
}

export default App;
