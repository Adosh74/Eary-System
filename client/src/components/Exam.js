import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

const Exam= () => {
    return (
        <div>
        <div className="head" style={{paddingBottom:"0px",paddingRight:"1150px"}}>
        <Link  to="/home_user">
        <Button variant="primary" type="submit"  style={{backgroundColor:"black"}} >
           Home
        </Button>
        </Link>  
        </div>
        <section className="page_user">
        <div>
        <section class="cards" id="services">
        <h2 class="title">Quiz</h2>
        <div class="content">
            <div class="card">
            <Button variant="outline-warning" type="submit"   >
              Click here to hear the question
            </Button>
            <Form.Select aria-label="Default select example" placeholder="Password" >
            <option>Open this select menu</option>
            <option value="1">answare 1</option>
            <option value="2">answare 2</option>
            <option value="3">answare 3</option>
           
            </Form.Select>
                    
            </div>
            <Button variant="primary">
                <h4>submit</h4>
           </Button>
        <div>
      <h1>
      exam result <Badge bg="info"> # </Badge>
      </h1>
      </div>
        </div>
    </section>
        </div>
        </section>
    </div>
     );
};
  export default Exam;
