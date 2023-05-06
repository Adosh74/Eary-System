import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import {
  getAuthToken,
  removeAuthToken,
} from '../services/auth.service';

const Header = () => {
  const navigate = useNavigate();

  const { token, user } = getAuthToken();

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
          {user && !user.isAdmin && (
            <Nav className="me-auto">
             <Link  to="/home_user">
        <Button variant="primary" type="submit"  style={{backgroundColor:"black"}} >
           Home
        </Button>
        </Link>  
            </Nav>
          )}
          {user && user.isAdmin && (
            <Nav className="me-auto">
              <Link className="AD-header" to="/home_admin">
                Home
              </Link>
            </Nav>
          )}
          <Navbar bg="dark" variant="dark">
            <Container>
              {!token && (
                <>
                  <Nav className="ms-auto">
                    <Link className="AD-header" to="/">
                      Login
                    </Link>
                  </Nav>
                  <Nav className="ms-auto">
                    <Link className="AD-header" to="/register">
                      Register
                    </Link>
                  </Nav>
                </>
              )}
              {token && (
                <Nav
                  onClick={() => {
                    removeAuthToken();
                  }}
                  className="ms-auto"
                >
                  <Link className="AD-header" to="/">
                    Log out
                  </Link>
                </Nav>
              )}
            </Container>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
