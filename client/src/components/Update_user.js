import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import '../pages/admin/update.css';
import '../pages/authentication/Login.css';

const Update_user = () => {
  return (
    <div>
      <div
        className="head"
        style={{ paddingBottom: '0px', paddingRight: '1150px' }}
      ></div>
      <section className="page_updateuser">
        <div>
          <div
            className="form-container"
            style={{ backgroundColor: '#e4d3e6ca' }}
          >
            <form action="" method="post">
              <h3>Update Profile</h3>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
              ></input>
              <input
                type="email"
                name="email"
                required
                placeholder="enter your email"
              ></input>
              <input
                type="password"
                name="password"
                required
                placeholder="enter your password"
              ></input>
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Phone Number"
              ></input>

              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Update_user;
