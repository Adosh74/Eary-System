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
