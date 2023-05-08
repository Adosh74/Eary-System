import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { getAuthToken } from '../services/auth.service';

const Multiple_exams = () => {
  const { token, user } = getAuthToken();

  const [exams, setExams] = useState({
    result: [],
    update: false,
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/exam', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(data => {
        setExams({ ...exams, result: data.data.data });
        console.log(data.data.data);
      })
      .catch(err => console.error(err));
  }, [exams.update]);

  return (
    <div>
      <section className="page_user">
        <div>
          <section className="cards" id="services">
            <h2 className="title">Choose Quiz</h2>
            <div className="content">
              {exams.result.map((exam, index) => {
                return (
                  <div key={index} className="card_choose_Q">
                    <Link to={`/Exam/${exam.id}`}>
                      <Button variant="outline-danger" type="submit">
                        {exam.name}
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Multiple_exams;
