import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function TeacherDetails({ teacher, setTeacher }) {
  let navigate= useNavigate()
    let handleDelete=(i)=>{
    let newArray=[...teacher]
        newArray.splice(i,1)
        setTeacher(newArray)
    }
  return (
   <div className='container'>
     <Table striped bordered hover>
      <thead>
        <tr >
          <th>#</th>
          <th> Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {teacher.map((e, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.tname}</td>
              <td>{e.temail}</td>
              <td>{e.role}</td>
              
              <td>
                  <Button variant="dark" onClick={()=>navigate(`/editteacher/${i}`)}>Edit</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="danger"onClick={()=>handleDelete(i)}>Delete</Button>
                </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
   </div>
  );
}

export default TeacherDetails;
