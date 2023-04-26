import React from "react";
import './createquiz.css'
const Createquiz = () => {

    return (
        <div class="player">

            <div class="details">
                <div class="now-playing">Question 1</div>
                <div class="track-art"></div>
                <div class="track-name">Track Name</div>
              

                <label for="file"  id="auu">Upload Audio</label> 

                <input type="file" id="audiofile" ></input>

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
                    value="99" class="volume_slider" ></input>
               
                    <i class="fa fa-volume-up"></i>
            </div>
            <ol type="A">
                <li class="option"><span id="option0"></span><input type="text" class="vzz"></input></li> 
                
                <li class="option"><span id="option1"></span><input type="text" ></input></li>
                <li class="option"><span id="option2"></span><input type="text" ></input></li>
  
            </ol>
            <button  class="btn btn-success btn-sm">accept</button>
        </div>
    );
}; export default Createquiz;

