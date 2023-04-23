import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import  Navbar  from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


const Header = () => {

    const Logout =() =>{};

    return (
         <>
            <Navbar bg="dark" variant="dark">
               <Container>
                 <Navbar.Brand > Eary System </Navbar.Brand>
                  <Nav className="me-auto">
 
                  <Link className="AD-header" to="/home">Home</Link>
                    <Link className="AD-header" to="/login_admin">Admin</Link>
                    <Link className="AD-header" to="/login_user">User</Link> 

                  </Nav>
                  <Nav className="ms-auto">
                  <Link className="nav-link" onClick={Logout}>Log out</Link>
                  </Nav>
                

               </Container>

            </Navbar>
         </>
    );
};
  export default Header ;