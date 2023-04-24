import React from "react";
import'./Home_admin.css'
import { Link } from "react-router-dom";
const Home_admin = () => {
    return (
         <div className="container">
      <div className="intro">
<h1 className="intro-title">Hello  Admin</h1>
<p>
  Here You can create and update Quiz
</p>
<Link to="./quiz" className="link-1">
<button class="btn btn1"> Quiz</button>

</Link>

<p>
  Here you can approve their account 
</p>

<Link to="#" className="link-2">
<button class="btn btn2">Approve</button>

</Link>
<br></br>
<br></br>
<p>
  Here you can Update Your profile 
</p>
<Link to="#" className="link-3">
<button class="btn btn3"> Update</button>

</Link>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br><br></br>
<br></br>
<br></br><br></br><br></br>
<br></br>


      </div>
         </div>
    );
};
  export default Home_admin;