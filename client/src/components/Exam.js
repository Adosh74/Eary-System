import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import  Navbar  from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
            <option value="4">answare 4</option>
            </Form.Select>
                    
            </div>
            <Button variant="primary" size="lg">
            submit
        </Button>
        <div>
      <h1>
      exam result <Badge bg="secondary"> #</Badge>
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
