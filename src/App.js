import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import StudentDetails from './components/StudentDetails';
import AddTeacher from './components/AddTeacher';
import TeacherDetails from './components/TeacherDetails';

function App() {
  let [student, setStudent] = useState([
    {
      studentname: "Arun",
      Studentrollno: "748596",
      studentdob: "12/02/2001",
      studentmobileno: "123456789",
    },
    {
      studentname: "Mani",
      Studentrollno: "748593",
      studentdob: "01/11/1999",
      studentmobileno: "7481962315"
    },
    {
      studentname: "Hari",
      Studentrollno: "748591",
      studentdob: "18/01/2002",
      studentmobileno: "147852369"
    },
    {
      studentname: "Abi",
      Studentrollno: "84916235",
      studentdob: "14/01/2001",
      studentmobileno: "748512369"
    },
    {
      studentname: "Sabari",
      Studentrollno: "415263",
      studentdob: "19/03/2001",
      studentmobileno: "84916237"
    }
  ])

  let [teacher, setTeacher] = useState([
    {
      tname: "geetha",
      temail: "geetha@gmail.com",
      role: "maths teacher"

    },
    {
      tname: "senthil",
      temail: "senthil@gmail.com",
      role: "english  teacher  teacher"

    },
    {
      tname: "divya",
      temail: "divya@gmail.com",
      role: "english  teacher"

    },
    {
      tname: "devi",
      temail: "devi@gmail.com",
      role: "tamil  teacher"

    },
    {
      tname: "shakthivel",
      temail: "shakthivel@gmail.com",
      role: "maths  teacher"

    }
  ])
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/studentdetails' element={<StudentDetails student={student} setStudent={setStudent} />} />
          <Route path='/addstudent' element={<AddStudent student={student} setStudent={setStudent} />} />
          <Route path='/editstudent/:id' element={<AddStudent student={student} setStudent={setStudent} />} />

          <Route path='/teacherdetails' element={<TeacherDetails teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/addteacher' element={<AddTeacher teacher={teacher} setTeacher={setTeacher} />} />
          <Route path='/editteacher/:id' element={<AddTeacher teacher={teacher} setTeacher={setTeacher} />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
