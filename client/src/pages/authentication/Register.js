import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    loading: true,
    result: {},
    err: null,
  });

  const form = useRef({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const submit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/register', {
        name: form.current.name.value,
        email: form.current.email.value,
        password: form.current.password.value,
        phone: form.current.phone.value,
      })
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  };
  // useEffect(() => {
  //   axios.post('http://localhost:3000/register')
  //   .then((da))
  // }, []);

  return (
    <>
      <div className="page_user">
        <Form onSubmit={e => submit(e)}>
          <Alert variant="danger" className=" p-1">
            Error —check it out!
          </Alert>

          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            ref={val => {
              form.current.name = val;
            }}
          />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={val => {
                form.current.email = val;
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={val => {
                form.current.password = val;
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone </Form.Label>
            <Form.Control
              type="integer"
              placeholder="phone number"
              ref={val => {
                form.current.phone = val;
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit">
            Register
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Register;
