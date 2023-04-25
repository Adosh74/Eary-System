import React from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import  Navbar  from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const History = () => {
    const navigate = useNavigate(); 

    const Logout =() =>{
      if (localStorage.get("/Home_user")) localStorage.removeItem("/Home_user");
      navigate("/")
    };
    return (
        <div>
        <div className="head" style={{paddingBottom:"0px",paddingRight:"1150px"}}>
        <Link  to="/home_user">
        <Button variant="primary" type="submit"  style={{backgroundColor:"black"}} >
           Home
        </Button>
        </Link>  
        </div>
        <div>
        <section className="page_user">
        <div>
        <section class="cards" id="services">
        <h2 class="title">History</h2>
        <div class="content">
            <div class="card_histors">
                
              
            </div>
        </div>
    </section>
        </div>
        </section>
            
        </div>
    </div>
    );
};
  export default History;
