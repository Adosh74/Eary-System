import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Update_user= () => {
    return (
         <div>
            <Link  to="/home_user">
        <Button variant="primary" type="submit"  className="submit">
        Home
        </Button>
        </Link>  
         
         </div>
    );
};
  export default Update_user;