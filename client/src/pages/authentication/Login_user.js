import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import './Login.css';


export const Login_user = () => {

    return (
    
        <div className="page_user">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Alert  variant="danger" className=" p-1">
              Error —check it out!
            </Alert>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            
            </Form.Group >
            
            <Link  to="/home_user">
        <Button variant="primary" type="submit"  className="submit">
        Submit
        </Button>
        </Link>  

            <div className="py-3" >
                <Link className="create_button" to="/register">Create an new acount </Link>
            </div>
        </Form>
        
     
      </div>
    );
};
export default Login_user;
 