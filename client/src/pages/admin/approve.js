import React from "react";
import './approve.css'

 const Approve = () => {
    return(
        <div >
<div class="card-body">

<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone</th>
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
                            <a href="#" class="btn btn-success btn-sm">accept</a>
                            <form action="code.php" method="POST" class="d-inline">
                                <button type="submit" name="delete_student" value="<?=$student['id'];?>" class="btn btn-danger btn-sm">Reject</button>
                            </form>
                        </td>
                    </tr>
                 
        
    </tbody>
</table>

</div> </div>
    );
 };
 export default Approve;
