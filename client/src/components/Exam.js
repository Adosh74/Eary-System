import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';




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
        <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />

        <div class="content">
            <div class="card">
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>question </Accordion.Header>
        <Accordion.Body>
        <Tab.Container id="list-group-tabs-example" >
    
    <ListGroup>

      <ListGroup.Item action href="#answer_1">
       answer 1
      </ListGroup.Item>
      
      <ListGroup.Item action href="#answer_2">
        answer 2
      </ListGroup.Item>

      <ListGroup.Item action href="#answer_3">
      answer 3
      </ListGroup.Item>

     </ListGroup>
     </Tab.Container>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          
          
            </div>
            <Button variant="primary">
                <h4>submit</h4>
                
           </Button>
      
        </div>
    </section>
        </div>
        </section>
    </div>
     );
};
  export default Exam;
