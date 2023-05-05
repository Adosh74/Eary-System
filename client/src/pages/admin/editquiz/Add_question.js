import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../createquiz/createquiz.css';

const Add_question =()=>{

    return(
        <section className="player">
        <div>
          <section class="cards" id="services">
            <h2 class="title">Add Question</h2>
            <div class="content">
  
  
                <div class="details"> 
  
   
  
                </div>
                  
  
                  <div className="mb-3"  style={{ paddingTop:'80px'}}>
                  <InputGroup size="lg">
                        <InputGroup.Text id="inputGroup-sizing-lg">Question text</InputGroup.Text>
                        <Form.Control
                          aria-label="Large"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                  </InputGroup>
                  </div>
                  <br/>
                  <ol type="A">
                  <li class="option">
                    <span id="option0"></span>
                    <input type="text" class="vzz"></input>
                  </li>

                  <li class="option">
                    <span id="option1"></span>
                    <input type="text"></input>
                  </li>
                  <li class="option">
                    <span id="option2"></span>
                    <input type="text"></input>
                  </li>
                </ol>
                <Form.Control type="text" placeholder="Answer" />
                <br/> <br/> <br/> <br/> <br/> 
              <Button variant="outline-secondary">SUBMIT</Button>
              {''}
        </div>
      </section>
      </div>
      </section>
    );
};export default Add_question;