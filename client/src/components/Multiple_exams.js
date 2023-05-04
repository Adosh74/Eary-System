import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const Multiple_exams = () => {
   
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
                <h2 class="title">Choose an exam</h2>
            <div class="content">
                    
                  
                <div class="card">
                <Link  to="/Exam" >  
                <Button variant="outline-danger" type="submit"   >
                  Exam_name
                </Button>    
                </Link>   
                </div>
                

            </div>
         </section>
        </div>
        </section>
    </div>
    );
};
  export default Multiple_exams;
