import React from "react";
import './createquiz.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
              <div class="details">
       
        <div class="track-art"></div>
        <div class="track-name">Track Name</div>


        <label for="file" id="auu">Upload Audio</label>

        <input type="file" id="audiofile"></input>

    </div>

    <div class="buttons">
        <div class="prev-track" onclick="prevTrack()">
            <i class="fa fa-step-backward fa-2x"></i>
        </div>
        <div class="playpause-track" onclick="playpauseTrack()">
            <i class="fa fa-play-circle fa-5x"></i>
        </div>
        <div class="next-track" onclick="nextTrack()">
            <i class="fa fa-step-forward fa-2x"></i>
        </div>
    </div>

    <div class="slider_container">
        <div class="current-time">00:00</div>
        <input type="range" min="1" max="100"
               value="0" class="seek_slider"></input>

        <div class="total-duration">00:00</div>
    </div>

    <div class="slider_container">
        <i class="fa fa-volume-down"></i>
        <input type="range" min="1" max="100"
               value="99" class="volume_slider"></input>

        <i class="fa fa-volume-up"></i>
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
                    {repeatedCode}
                 
                </div>
                     
      <Button variant="outline-secondary">Save  [ Quiz ]</Button>{''}

            </div>
            </section>
            </div>
            </section>
    

    );
}; export default Createquiz;
