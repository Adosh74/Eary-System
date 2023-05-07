import axios from 'axios';
import jwt from 'jwt-decode';
import React, { useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

import { setAuthToken } from './../../services/auth.service.js';
import './Login.css';

export const Login_admin = () => {
  const navigate = useNavigate();

  const form = useRef({
    email: '',
    password: '',
  });

  const submit = e => {
    e.preventDefault();
    // console.log(
    //   form.current.email.value,
    //   form.current.password.value
    // );
    axios
      .post('http://localhost:3000/login', {
        email: form.current.email.value,
        password: form.current.password.value,
      })
      .then(data => {
        const user = jwt(data.data.token);
        alert(data.data.message);
        setAuthToken(data.data.token);
        if (user.isAdmin) {
          navigate('/home_admin');
        } else {
          navigate('home_user');
        }
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="page_admin">
      <Form onSubmit={e => submit(e)}>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};
export default Login_admin;
