import React from "react";
import img1 from './OIP.jpg'
import img2 from './edit.jpg'
import img3 from './sevenup.jpg'
import './Quiz.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


 const Quiz =()=>{
    return(
        <div >
        <div className="head" style={{paddingBottom:"0px",paddingRight:"1150px"}}>
        <Link  to="/home_admin">
        <Button variant="primary" type="submit"  style={{backgroundColor:"black"}} >
        Home
        </Button>
        </Link>  
        </div>
        <div class="containe">
           

            <div class="card">

                <Link to="/createquiz"> 
          <button>
                   <input type="Image" src={img1} alt="quiz" class="quizimg"></input> 
                   
                   </button> 
                   
                   </Link>


                   
                   <div class="introo">
                    <h1 class="g">Quiz</h1>
                    <p class="ll">The <span>Quiz</span> You can create it from Here </p>
                   </div>
                    </div>

                    <div>      
            < img src={img3} alt="logo" class="logo"></img> 
            </div>

                    <div class="card">
                   
                <Link to ="/editquiz"> 
          <button>
                   <input type="Image" src={img2} alt="quiz" class="edit"></input> 
                   
                   </button> 
                   
                   </Link>
         
         
          <div class="introo"> 
           <h1 class="g">Edit-Quiz</h1>
           <p class="ll">The <span>Quiz</span> You can Edit it from Here </p>
          </div>
           </div>

        </div>
           
        </div>
    );
 };
 export default Quiz;