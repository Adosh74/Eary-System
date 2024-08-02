import axios from 'axios';
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';

import '../pages/admin/update.css';
import '../pages/authentication/Login.css';
import { getAuthToken } from '../services/auth.service';

const Update_user = () => {
  const { id } = useParams();
  const { token, user } = getAuthToken();
  const navigate = useNavigate();

  const form = useRef({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const submit = e => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:4000/user/${id}`,
        {
          name: form.current.name.value,
          email: form.current.email.value,
          password: form.current.password.value,
          phone: form.current.phone.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(data => {
        alert(data.data.message);
        navigate('/users');
      })
      .catch(err => {
        alert(`something went wrong`);
      });
  };

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
            <form onSubmit={e => submit(e)}>
              <h3>Update Profile</h3>
              <input
                ref={val => {
                  form.current.name = val;
                }}
                type="text"
                name="name"
                placeholder="Enter Your Name"
              ></input>
              <input
                ref={val => {
                  form.current.email = val;
                }}
                type="email"
                name="email"
                required
                placeholder="enter your email"
              ></input>
              <input
                ref={val => {
                  form.current.password = val;
                }}
                type="password"
                name="password"
                required
                placeholder="enter your password"
              ></input>
              <input
                ref={val => {
                  form.current.phone = val;
                }}
                type="text"
                name="phone"
                placeholder="Enter Your Phone Number"
              ></input>

              <button type="submit" className="btn btn-primary" style={{color:"black"}} >
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
