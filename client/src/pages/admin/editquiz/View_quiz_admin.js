import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link, useParams } from 'react-router-dom';
import { getAuthToken } from '../../../services/auth.service';

const View_quiz_admin = () => {
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
        .get(`http://localhost:3000/View_quiz_admin/${id}`, {
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
    
    <section className="player_edit ">
    <div>
      <Table striped bordered hover variant="dark">
      <thead>
            <tr>
              <th>id</th>
              <th colSpan={2}>Question Text</th>
            
              <th>Delete </th>
            </tr>
          </thead>
      <tbody>
      {answer.result &&
                !answer.finished &&
                answer.result.questions && (
                  <form onSubmit={e => submit(e)}>
      {answer.result.questions.map((q, index) => {
                          return (
                <tr key={index}>
                  <td id="quiz_number">{index}</td>
                  <td colSpan={2} id="quiz_namer">
                  {q.text}
                  </td>
                  
                  
                  <td>
                    <Button
                  
                    >
                      Delete
                    </Button>{' '}
                  </td>
                </tr>
              );
            })}
             </form>
                )}
          </tbody>      
                
        
      </Table>
    </div>
  </section>
   
  );
};
export default View_quiz_admin;
