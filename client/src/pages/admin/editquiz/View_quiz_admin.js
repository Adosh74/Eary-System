import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';

import { getAuthToken } from '../../../services/auth.service';

const View_quiz_admin = () => {
  const { token } = getAuthToken();
  const { id } = useParams();

  const [exams, setExams] = useState({
    result: [],
    update: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/exam/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(data => {
        setExams({ ...exams, result: data.data.data.questions });
        console.log(data.data.data.questions);
      })
      .catch(err => {
        alert(`some thing went wrong`);
        console.log(err);
      });
  }, [exams.update]);

  return (
    <section className="player_edit ">
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>
                <h5>Question</h5>
              </th>
              <th>op1</th>
              <th>op2</th>
              <th>op3</th>
              <th>
                <h5>Answer</h5>
              </th>
              <th>
                <h5>Delete</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {exams.result &&
              exams.result.map((ques, index) => {
                return (
                  <tr key={index}>
                    <td>{ques.text}</td>
                    <td>{ques.options.one}</td>
                    <td>{ques.options.two}</td>
                    <td>{ques.options.three}</td>
                    <td>{ques.answer}</td>
                    <td>
                      <Button
                        onClick={() => {
                          axios
                            .put(
                              `http://localhost:4000/exam/${id}/${index}`,
                              {
                                key: 'value',
                              },
                              {
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                },
                              }
                            )
                            .then(data => {
                              alert(data.data.message);
                              setExams({ ...exams, update: true });
                            })
                            .catch(err => {
                              alert('some error occurred');
                              console.log(err);
                            });
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};
export default View_quiz_admin;
