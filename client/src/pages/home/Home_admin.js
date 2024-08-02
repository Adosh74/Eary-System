import React from 'react';
import { Link } from 'react-router-dom';

import { getAuthToken } from '../../services/auth.service';
import './Home_admin.css';

const Home_admin = () => {
  const { user } = getAuthToken();
  // const Logout = () => {};
  return (
    <>
      <div className="container">
        <div className="intro">
          <h1 className="intro-title">Hello {user.username}</h1>

          <p>Here You can create and update Quiz</p>
          <Link to="/quiz" className="link-1">
            <button className="btn btn3">Quiz</button>
          </Link>

          <br></br>
          <br></br>
          <p>Here you can Update Your profile</p>
          <Link to="/update" className="link-3">
            <button className="btn btn3"> Update</button>
          </Link>

          <br></br>
          <br></br>

          <p>Here You Can See And Manage All Users</p>
          <Link to="/users" className="link-3">
            <button className="btn btn3">Users</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home_admin;
