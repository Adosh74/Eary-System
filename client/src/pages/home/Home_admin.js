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
<Link to="../admin/quiz" className="link">
<button className="btn">
  Quiz
</button>

</Link>

<p>
  Here you can approve their account 
</p>

<Link to="#" className="link">
<button className="btn">
  Approve
</button>
</Link>
<br></br>
<br></br>
<p>
  Here you can Update Your profile 
</p>
<Link to="#" className="link">
<button className="btn" >
  Update Your profile
</button>
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