import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import Tab from 'react-bootstrap/Tab';
import { Link, useParams } from 'react-router-dom';

import { getAuthToken } from '../services/auth.service';

const Exam = () => {
  const { token } = getAuthToken();
  const { id } = useParams();

  const [answer, setAnswer] = useState({
    result: [],
    finished: false,
    grade: 0,
    update: false,
  });

  const [userA, setuserA] = useState([]);

  const form = useRef({
    userAnswer: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/exam/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(data => {
        console.log(data.data.data);
        setAnswer({ ...answer, result: data.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }, [answer.finished]);

  const submit = e => {
    e.preventDefault();
    console.log(userA);
    axios
      .post(
        `http://localhost:3000/answer/${id}`,
        {
          answer: userA,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(data => {
        alert('ok');

        setAnswer({
          ...answer,
          grade: data.data.grade,
          finished: true,
        });
        console.log(data.data.grade);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <section className="page_user">
          <div>
            <section className="cards" id="services">
              <h2 className="title">{answer.result.name}</h2>
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="secondary" />
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
              <Spinner animation="border" variant="warning" />
              <Spinner animation="border" variant="info" />
              <Spinner animation="border" variant="light" />
              <Spinner animation="border" variant="dark" />
              <br /> <br /> <br /> <br /> <br />
              {answer.finished && (
                <h1>congratulation your grade is {answer.grade}</h1>
              )}
              {answer.result &&
                !answer.finished &&
                answer.result.questions && (
                  <form onSubmit={e => submit(e)}>
                    <div className="content">
                      <div className="card_Q">
                        {answer.result.questions.map((q, index) => {
                          return (
                            <Accordion key={index}>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  {q.text}
                                </Accordion.Header>
                                <Accordion.Body>
                                  <Tab.Container id="list-group-tabs-example">
                                    <ListGroup>
                                      <ListGroup.Item
                                        onClick={() => {
                                          setuserA([
                                            ...userA,
                                            q.options.one,
                                          ]);
                                          console.log(...userA);
                                        }}
                                      >
                                        {q.options.one}
                                      </ListGroup.Item>

                                      <ListGroup.Item
                                        onClick={() => {
                                          setuserA([
                                            ...userA,
                                            q.options.two,
                                          ]);
                                          console.log(...userA);
                                        }}
                                      >
                                        {q.options.two}
                                      </ListGroup.Item>

                                      <ListGroup.Item
                                        onClick={() => {
                                          setuserA([
                                            ...userA,
                                            q.options.three,
                                          ]);
                                          console.log(...userA);
                                        }}
                                      >
                                        {q.options.three}
                                      </ListGroup.Item>
                                    </ListGroup>
                                  </Tab.Container>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          );
                        })}
                      </div>
                      <Button
                        variant="primary"
                        type="submit"
                        className="submit"
                      >
                        <h4>submit</h4>
                      </Button>
                    </div>
                  </form>
                )}
            </section>
          </div>
        </section>
      </div>
    </>
  );
};
export default Exam;
