import React from "react";

import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import  Navbar  from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Home_user = () => {
  const navigate = useNavigate(); 
    const Logout =() =>{

      if (localStorage.get("/Home_user")) localStorage.removeItem("/Home_user");
      navigate("/")
    };
    return (
      <>
        <Navbar bg="dark" variant="dark">
           <Container> 
              <Nav className="me-auto">
                <Link className="AD-header" to="/update_user">Update profile</Link>
              </Nav>
              <Nav className="ms-auto">
              <Link className="nav-link" onClick={Logout}>Log out</Link>
              </Nav>
            
  
           </Container>
  
        </Navbar>
     </>
    );
};
  export default Home_user;