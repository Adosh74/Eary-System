import axios from 'axios';
import React, { useRef } from 'react';

import { getAuthToken } from '../../../services/auth.service';
import './addusers.css';

const Addusers = () => {
  const { token } = getAuthToken();

  const form = useRef({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const submit = e => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3000/user`,
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
      })
      .catch(err => {
        alert(`something went wrong`);
      });
  };
  return (
    <div>
      <div className="form-container">
        <form onSubmit={e => submit(e)}>
          <h3>ADD Users</h3>
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

          <button type="submit" className="btn btn-primary" style={{color:"black"}}>
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};
export default Addusers;
