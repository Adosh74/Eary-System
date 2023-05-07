import React from "react";
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';


const View_quiz_user = () => {

    return (
        <div>
       
       
        <section className="page_user">
        <div>
        <section class="cards" id="services">
       
        <h2 class="title">#Quiz_name#</h2>
   
        <div class="content">
            <div class="card_history">
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>question </Accordion.Header>
        <Accordion.Body>
        <Tab.Container id="list-group-tabs-example" >
    
    <ListGroup>
    <ListGroup.Item action variant="success">
        True_answer
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        False_answer
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        False_answer
      </ListGroup.Item>
      
     </ListGroup>
     </Tab.Container>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          
          
            </div>
       
        </div>
    </section>
        </div>
        </section>
    </div>
    );
};
  export default View_quiz_user;
