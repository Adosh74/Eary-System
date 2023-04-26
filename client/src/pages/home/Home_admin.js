import React from 'react';
import './Home_admin.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
const Home_admin = () => {
  return (
    <div className="container">

      <div className="intro">
        <h1 className="intro-title">Hello Admin</h1>
        <form action="code.php" method="POST" class="d-inline">
          <Link to='login_admin'>
          <button type="submit" name="delete_student" value="<?=$student['id'];?>" class="btn btn-danger btn-sm">LogOut</button>
      </Link>
        </form>
        <p>Here You can create and update Quiz</p>
        <Link to="/quiz" className="link-1">
          <button class="btn btn1">Quiz</button>
        </Link>

        <p>Here you can approve their account</p>

        <Link to="/approve" className="link-2">
          <button class="btn btn2">Approve</button>
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
          <button class="btn btn1">Users</button>
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
  );
};
export default Home_admin;
