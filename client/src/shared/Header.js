import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/');
            }}
          >
            {' '}
            Eary System{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="AD-header" to="/login_admin">
              Login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
