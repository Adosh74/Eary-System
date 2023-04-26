import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import './update.css'
 const Update =()=>{
    return(
        <div >
        <div className="head" style={{paddingBottom:"0px",paddingRight:"1150px"}}>
        <Link  to="/home_admin">
        <Button variant="primary" type="submit"  style={{backgroundColor:"black"}} >
        Home
        </Button>
        </Link>  
     </div>
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
   </div>
    );
 };
 export default Update;
