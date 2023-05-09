import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { getAuthToken } from '../../services/auth.service';

const Home_user = () => {
  const { user } = getAuthToken();

  return (
    <>
      <audio controls>
        <source
          src="https://file-examples.com/storage/fe734802fc6459067bb6fad/2017/11/file_example_OOG_1MG.ogg"
          type="audio/ogg"
        />
      </audio>
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
          <Link to={`/update_user/${user.user_id}`}>
            <Button variant="outline-success">Update profile</Button>{' '}
          </Link>
        </div>
      </section>
    </>
  );
};
export default Home_user;
