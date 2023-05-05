import React from 'react';
import Button from 'react-bootstrap/Button';
import '../createquiz/createquiz.css';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
const Editequiz =()=>{

    return(
        <section className="player_edit ">
        <div>

        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th colSpan={2}>Quiz Name</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      
        <tr>
          <td             id='quiz_number'>       </td>
          <td  colSpan={2} id='quiz_namer'>       </td>
          <td> <Link to="/Add_question"   ><Button variant="success">Edit</Button>{' '} </Link> </td>
          <td><Button variant="danger">Delete</Button>{' '}</td>
         
        </tr>
      </tbody>
    </Table>
      </div>
      </section>
      
    );
};export default Editequiz;