import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useParams, useNavigate } from 'react-router-dom';

function AddTeacher({ teacher, setTeacher }) {
  const navigate = useNavigate();
  const params = useParams();
  const [tteachername, setTeachername] = useState('');
  const [tteacheremail, setTeacheremail] = useState('');
  const [tteacherrole, setTeacherrole] = useState('');

  const handleSubmit = () => {
    const newTeacher = {
      tname: tteachername,
      temail: tteacheremail,
      role: tteacherrole
    };
    const newArray = [...teacher];
    if (params.id !== undefined) {
      newArray[params.id] = newTeacher;
    } else {
      newArray.push(newTeacher);
    }
    setTeacher(newArray);
    navigate('/teacherdetails');
  };

  useEffect(() => {
    if (params.id !== undefined) {
      setTeachername(teacher[params.id].tname);
      setTeacheremail(teacher[params.id].temail);
      setTeacherrole(teacher[params.id].role);
    }
  }, [params.id, teacher]);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the teacher name"
            value={tteachername}
            onChange={(e) => setTeachername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter the mail ID"
            value={tteacheremail}
            onChange={(e) => setTeacheremail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Role"
            value={tteacherrole}
            onChange={(e) => setTeacherrole(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddTeacher;
