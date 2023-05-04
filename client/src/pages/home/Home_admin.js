import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './Home_admin.css';

const Home_admin = () => {
  const Logout = () => {};
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="ms-auto">
            <Link className="nav-link" onClick={Logout}>
              Log out
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="container">
        <div className="intro">
          <h1 className="intro-title">Hello Admin</h1>

          <p>Here You can create and update Quiz</p>
          <Link to="/quiz" className="link-1">
            <button class="btn btn3">Quiz</button>
          </Link>

          <p>Here you can approve their account</p>

          <Link to="/approve" className="link-2">
            <button class="btn btn3">Approve</button>
          </Link>
          <br></br>
          <br></br>
          <p>Here you can Update Your profile</p>
          <Link to="/update" className="link-3">
            <button class="btn btn3"> Update</button>
          </Link>

          <br></br>
          <br></br>

          <p>Here you can see Users</p>
          <Link to="/users" className="link-3">
            <button class="btn btn3">Users</button>
          </Link>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};
export default Home_admin;
