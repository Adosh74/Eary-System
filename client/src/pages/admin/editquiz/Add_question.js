import axios from 'axios';
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useParams } from 'react-router-dom';

import { getAuthToken } from '../../../services/auth.service';
import '../createquiz/createquiz.css';

const Add_question = () => {
  const { id } = useParams();
  const { token } = getAuthToken();

  const form = useRef({
    text: '',
    one: '',
    two: '',
    three: '',
    answer: '',
  });

  const submit = e => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:4000/exam/${id}`,
        {
          questions: {
            text: form.current.text.value,
            options: {
              one: form.current.one.value,
              two: form.current.two.value,
              three: form.current.three.value,
            },
            answer: form.current.answer.value,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(data => {
        alert(data.data.message);
      })
      .catch(err => {
        alert('some error occurred');
        console.log(err);
      });
  };
  return (
    <section className="player">
      <div>
        <section className="cards" id="services">
          <h2 className="title">Add Question</h2>
          <form onSubmit={e => submit(e)}>
            <div className="content">
              <div className="details"></div>
              <div className="mb-3" style={{ paddingTop: '80px' }}>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Question text
                  </InputGroup.Text>
                  <Form.Control
                    ref={val => {
                      form.current.text = val;
                    }}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </div>
              <br />
              <ol type="A">
                <li className="option">
                  <span id="option0"></span>
                  <input
                    ref={val => {
                      form.current.one = val;
                    }}
                    type="text"
                    className="vzz"
                  ></input>
                </li>

                <li className="option">
                  <span id="option1"></span>
                  <input
                    ref={val => {
                      form.current.two = val;
                    }}
                    type="text"
                  ></input>
                </li>
                <li className="option">
                  <span id="option2"></span>
                  <input
                    ref={val => {
                      form.current.three = val;
                    }}
                    type="text"
                  ></input>
                </li>
              </ol>
              <Form.Control
                ref={val => {
                  form.current.answer = val;
                }}
                type="text"
                placeholder="Answer"
              />
              <br /> <br /> <br /> <br /> <br />
              <Button
                variant="primary"
                type="submit"
                className="submit"
              >
                ADD
              </Button>
              {''}
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
export default Add_question;
