import React from "react";
import './createquiz.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Createquiz = () => {
    const repeatedCode = [];
    const [repeats, setRepeats] = useState(1);



         for (let i = 0; i < repeats; i++) {
           repeatedCode.push(
<div key={i}>
    <div>

        {
             
             <div>
            
             <div class="card">

  

    <div class="slider_container">
    <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Question</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

    </div>
    <ol type="A">
        <li class="option"><span id="option0"></span><input type="text" class="vzz"></input></li>
        <li class="option"><span id="option1"></span><input type="text"></input></li>
        <li class="option"><span id="option2"></span><input type="text"></input></li>

    </ol>
     
        </div>
                </div>
       
        }
    </div>
</div>);
         }
         const handleRepeatsChange = (event) => {
           setRepeats(Number(event.target.value));
         };

    return (

                
        <section className="player">
        
                <div>
        <section class="cards" id="services">
        <h2 class="title">Questions</h2>
        <div class="content">
        <div>
                    <label htmlFor="repeats">Enter number of questions :  </label>
                    <input type="number" id="repeats" name="repeats" value={repeats} onChange={handleRepeatsChange} />
                    
                    <div class="details">
                        
                        <div class="track-art"></div>
                        <div class="track-name">Track Name</div>


                        <label for="file" id="auu">Upload Audio</label>

                        <input type="file" id="audiofile"></input>

                    </div>

                    {repeatedCode}
                 
                </div>

                     
      <Button variant="outline-secondary">Save  [ Quiz ]</Button>{''}

            </div>
            </section>
            </div>
            </section>
    

    );
}; export default Createquiz;
