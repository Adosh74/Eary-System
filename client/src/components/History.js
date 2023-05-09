import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { getAuthToken } from '../services/auth.service';

const History = () => {
  const { user, token } = getAuthToken();
  const navigate = useNavigate();

  const [history, setHistory] = useState({
    result: [],
    update: false,
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/answer/history', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(data => {
        setHistory({ ...history, result: data.data.data });
        console.log(data.data.data);
      })
      .catch(err => {
        alert('something went wrong');
        console.log(err);
      });
  }, []);
  return (
    <div className="page_user_history">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Exam Name</th>
            <th colSpan={2}>Time</th>
            <th>Grade</th>
            <th>lsa</th>
          </tr>
        </thead>
        <tbody>
          {history.result.length > 0 &&
            history.result.map((his, index) => {
              return (
                <tr key={index}>
                  <td id="quiz_number">{his.exam.name}</td>
                  <td colSpan={2} id="quiz_namer">
                    {his.createdAt.toString()}
                  </td>
                  <td>
                    <h1>
                      <Badge bg="info">{his.grade}</Badge>
                    </h1>
                  </td>
                  <td>
                    {' '}
                    <Link to="/View_quiz_user">
                      <Button
                        variant="primary"
                        type="submit"
                        className="submit"
                      >
                        View
                      </Button>{' '}
                    </Link>{' '}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
export default History;
