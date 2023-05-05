import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './createquiz.css';

const Createquiz = () => {



  return (
    <section className="player">
      <div>
        <section class="cards" id="services">
          <h2 class="title">Create Quiz</h2>
          <div class="content">


              <div class="details"> 

              <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Upload Audio</Form.Label>
              <Form.Control type="file" size="sm" />
              </Form.Group>
              </div>
                

                <div className="mb-3"  style={{ paddingTop:'80px'}}>
                <InputGroup size="lg">
                      <InputGroup.Text id="inputGroup-sizing-lg">Quiz Name</InputGroup.Text>
                      <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                </InputGroup>
        
                </div>

            <Button variant="outline-secondary">Save [ Quiz ]</Button>
            {''}
      </div>
    </section>
    </div>
    </section>
  );
};
export default Createquiz;
