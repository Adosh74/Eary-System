import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './Home_admin.css';

const Home_admin = () => {
  // const Logout = () => {};
  return (
    <>
      <div className="container">
        <div className="intro">
          <h1 className="intro-title">Hello Admin</h1>

          <p>Here You can create and update Quiz</p>
          <Link to="/quiz" className="link-1">
            <button className="btn btn1">Quiz</button>
          </Link>

          <p>Here you can approve their account</p>

          <Link to="/approve" className="link-2">
            <button className="btn btn2">Approve</button>
          </Link>
          <br></br>
          <br></br>
          <p>Here you can Update Your profile</p>
          <Link to="/update" className="link-3">
            <button className="btn btn3"> Update</button>
          </Link>

          <br></br>
          <br></br>

          <p>Here you can see Users</p>
          <Link to="/users" className="link-3">
            <button className="btn btn1">Users</button>
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
