import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import { getAuthToken } from '../../../services/auth.service';
import '../createquiz/createquiz.css';

const Editequiz = () => {
  const { token } = getAuthToken();

  const [exams, setExams] = useState({
    result: [],
    update: false,
  });

  useEffect(() => {
    axios
      .get('http://localhost:4000/exam', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(data => {
        setExams({ ...exams, result: data.data.data });
        console.log(data.data.data);
      })
      .catch(err => console.error(err));
  }, [exams, exams.update, token]);

  return (
    <section className="player_edit ">
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th colSpan={2}>Exam Name</th>
              <th>View Exam</th>
              <th>Add question</th>
              <th>Delete Exam</th>
            </tr>
          </thead>
          <tbody>
            {exams.result.map(exam => {
              return (
                <tr key={exam.id}>
                  <td id="quiz_number">{exam.id}</td>
                  <td colSpan={2} id="quiz_namer">
                    {exam.name}
                  </td>
                  <td>
                    {' '}
                    <Link to={`/View_quiz_admin/${exam.id}`}>
                      <Button variant="success">View</Button>{' '}
                    </Link>{' '}
                  </td>
                  <td>
                    {' '}
                    <Link to={`/Add_question/${exam.id}`}>
                      <Button variant="success">Add</Button>{' '}
                    </Link>{' '}
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        axios
                          .delete(
                            `http://localhost:4000/exam/${exam.id}`,
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          )
                          .then(data => {
                            alert(data.data.message);
                            setExams({
                              ...exams,
                              update: !exams.update,
                            });
                          })
                          .catch(err => {
                            alert('some error occurred');
                          });
                      }}
                      variant="danger"
                    >
                      Delete
                    </Button>{' '}
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
export default Editequiz;
