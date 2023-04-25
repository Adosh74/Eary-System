import React from "react";
import './approve.css'

 const Approve = () => {
    return(
        <div >
<table >

 

<tr>

<th>Id</th>

<th>Name</th>

<th>Email Address</th>

<th>Action </th>
</tr>
 <tr>

<td>1</td>

<td>Jean</td>

<td>leBon</td>

<td>1368</td>

</tr>


</table>
<form  class='bu'>
<button class="submit" type="submit"> submit</button>
<button class="reject" type="reject"> reject</button>
</form>


        </div>
    );
 };
 export default Approve;
