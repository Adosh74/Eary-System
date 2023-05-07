import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import CloseButton from 'react-bootstrap/CloseButton';

const View_quiz_admin = () => {
    
  return (
    
      <div className="player ">
         <div>
        <section class="cards" id="services">
       
        <h2 class="title">#Quiz_name#</h2>
   
        <div class="content">

                <div className="bg-dark p-3">
                <CloseButton variant="white" />
                </div>
                
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
      </div>
   
  );
};
export default View_quiz_admin;
