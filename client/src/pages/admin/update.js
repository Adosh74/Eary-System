<<<<<<< Updated upstream
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

 const Update =()=>{
    return(
   <div>
         
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
>>>>>>> Stashed changes
