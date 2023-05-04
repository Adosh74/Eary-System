import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuthToken } from '../../services/auth.service';
import './update.css';

const Update = () => {
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
        `http://localhost:3000/user/${user.user_id}`,
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
        navigate('/home_admin');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={e => submit(e)}>
          <h3>Update Profile</h3>
          <input
            ref={val => {
              form.current.name = val;
            }}
            type="text"
            name="name"
            placeholder="Enter New Name"
          ></input>
          <input
            ref={val => {
              form.current.email = val;
            }}
            type="email"
            name="email"
            required
            placeholder="Enter New Email"
          ></input>
          <input
            ref={val => {
              form.current.password = val;
            }}
            type="password"
            name="password"
            required
            placeholder="Enter New Password"
          ></input>
          <input
            ref={val => {
              form.current.phone = val;
            }}
            type="text"
            name="phone"
            placeholder="Enter New Phone Number"
          ></input>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
export default Update;
