import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function StudentDetails({ student, setStudent }) {
  let navigate= useNavigate('')
  let handleDelete=(i)=>{
    let newArray=[...student]
    newArray.splice(i,1)
    setStudent(newArray)
  }
  return (
    <>
    <div className='container'>
    <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Date Of Birth</th>
            <th>Mobile No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.studentname}</td>
                <td>{e.Studentrollno}</td>
                <td>{e.studentdob}</td>
                <td>{e.studentmobileno}</td>
                <td>
                  <Button variant="dark" onClick={()=>navigate(`/editstudent/${i}`)}>Edit</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="danger" onClick={()=>handleDelete(i)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
     
    </>
  );
}

export default StudentDetails;
