<<<<<<< HEAD
import React from "react";

import './update.css'
 const Update =()=>{
    return(
      <div class="form-container">

      <form action="" method="post">
         <h3>Update Profile</h3>
         <input type="text" name="name"placeholder="Enter Your Name" ></input>
         <input type="email" name="email" required placeholder="enter your email"></input>
         <input type="password" name="password" required placeholder="enter your password"></input>
         <input type="text" name="phone" placeholder="Enter Your Phone Number"></input>

         <button type="submit" class="btn btn-primary">Update</button>
      </form>
   
   </div>
    );
 };
 export default Update;
=======
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Update = () => {
  return (
    <div>
      <Link to="/home_admin">
        <Button variant="primary" type="submit" className="submit">
          Home
        </Button>
      </Link>
    </div>
  );
};
export default Update;
>>>>>>> c1546d3f78dc2a82a4b97ed0969decc16d04810d
