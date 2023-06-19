import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';

function AddStudent({ student, setStudent }) {
  const navigate = useNavigate();
  const params = useParams();
  const [sstudentname, setStudentname] = useState('');
  const [srollno, setRollno] = useState('');
  const [sdob, setDob] = useState('');
  const [smobileno, setMobileno] = useState('');

  const handleSubmit = () => {
    const newStudent = {
      studentname: sstudentname,
      Studentrollno: srollno,
      studentdob: sdob,
      studentmobileno: smobileno
    };
    const newArray = [...student];
    if (params.id !== undefined) {
      newArray[params.id] = newStudent;
    } else {
      newArray.push(newStudent);
    }
    setStudent(newArray);
    navigate('/studentdetails');
  };

  useEffect(() => {
    if (params.id !== undefined) {
      setStudentname(student[params.id].studentname);
      setRollno(student[params.id].Studentrollno);
      setDob(student[params.id].studentdob);
      setMobileno(student[params.id].studentmobileno);
    }
  }, [params.id, student]);

  return (
    <>
      <div>
        <h3>Add Students Details</h3>
      </div>
      <Container className="d-flex justify-content-center align-items-center">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the student name"
              value={sstudentname}
              onChange={(e) => setStudentname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Roll No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the Roll number"
              value={srollno}
              onChange={(e) => setRollno(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="date"
              value={sdob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mobile no</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the mobile number"
              value={smobileno}
              onChange={(e) => setMobileno(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddStudent;
