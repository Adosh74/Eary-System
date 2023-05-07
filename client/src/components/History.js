import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

const History = () => {
    const navigate = useNavigate(); 

    const Logout =() =>{
      if (localStorage.get("/Home_user")) localStorage.removeItem("/Home_user");
      navigate("/")
    };
    return (
        <div className="page_user_history">
            
         <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th colSpan={2}>Exam Name</th>
              <th>View Exam</th>
              <th>Result</th>
           
            </tr>
          </thead>
          <tbody>
            
           
                <tr >
                  <td id="quiz_number">                     </td>
                  <td colSpan={2} id="quiz_namer">        </td>
                  <td >
                    {' '}
                    <Link to="/View_quiz_user">
                      <Button  variant="primary" type="submit"className="submit">View</Button>{' '}
                    </Link>{' '}
                  </td>
                  <td>  
                    <h1><Badge bg="info">  </Badge></h1>
                  </td>
                  
                 
                </tr>
              
           
          </tbody>
        </Table>
       
    </div>
    );
};
  export default History;
