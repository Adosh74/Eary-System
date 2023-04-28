import React from "react";
import './approve.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
 const Approve = () => {
    return(
        <div >
             <div className="head" style={{paddingBottom:"0px",paddingRight:"1150px"}}>
                <Link  to="/home_admin">
                <Button variant="primary" type="submit"  style={{backgroundColor:"black"}} >
                Home
                </Button>
                </Link>  
             </div>
<div class="card-body">

<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>-</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
       
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button class="btn btn-success btn-sm">accept</button>
                            <form action="code.php" method="POST" class="d-inline">
                                <button type="submit" name="delete_student" value="<?=$student['id'];?>" class="btn btn-danger btn-sm">Reject</button>
                            </form>
                        </td>
                    </tr>
                 
        
        </tbody>
    </table>
    
  </div>
</div>
    );
 };
 export default Approve;
