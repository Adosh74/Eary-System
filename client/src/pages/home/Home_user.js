import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { getAuthToken } from '../../services/auth.service';

const Home_user = () => {
  const { user } = getAuthToken();

  return (
    <>
      <section className="page_user">
        <div className="d-grid gap-2">
          <h2>Hello {user.username}</h2>
          <Link to="/Multiple_exams">
            <Button variant="primary" size="lg">
              Take the hearing assistance exam
            </Button>
          </Link>
          <Link to="/history">
            <Button variant="secondary" size="lg">
              Show history of Exams
            </Button>
          </Link>
          <Link to="/update_user">
            <Button variant="outline-success">Update profile</Button>{' '}
          </Link>
        </div>
      </section>
    </>
  );
};
export default Home_user;
