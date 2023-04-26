import React from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import  Navbar  from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Home_user = () => {

    const Logout =() =>{ };
    return (
      <>
      
        <Navbar bg="dark" variant="dark">
           <Container>
              <Nav className="me-auto">
                <Link to="/update_user" ><Button variant="outline-success"> Update profile</Button>{' '}</Link>
              </Nav>
              <Nav className="ms-auto">
              <Link to="/" className="nav-link" onClick={Logout}>Log out</Link>
              </Nav>
           </Container>
        </Navbar>
        
        <section className="page_user">
        <div className="d-grid gap-2">
        <Link  to="/exam">
      <Button variant="primary" size="lg">
        Take the hearing assistance exam
      </Button>
        </Link>
        <Link  to="/history">
      <Button variant="secondary" size="lg">
        Show history of Exams
      </Button>
      </Link>
    </div>
    </section>
     </>
    );
};
  export default Home_user;