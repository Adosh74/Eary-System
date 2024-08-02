import axios from 'axios';
import React, { useRef,  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

import { getAuthToken } from '../../../services/auth.service';
import './createquiz.css';

const Createquiz = () => {
  const { token } = getAuthToken();
  const navigate = useNavigate();

  const form = useRef({
    name: '',
    audio_file: null,
  });

  const submit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.current.name.value);
    if (
      form.current.audio_file.files &&
      form.current.audio_file.files[0]
    ) {
      formData.append('audio_file', form.current.audio_file.files[0]);
    }

    axios
      .post('http://localhost:4000/exam', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(data => {
        alert(data.data.message);
        navigate(`/Add_question/${data.data.data.id}`);
      })
      .catch(err => {
        alert('some error occurred');
      });
  };

  return (
    <section className="player">
      <div>
        <section className="cards" id="services">
          <h2 className="title">Create Quiz</h2>
          <form onSubmit={e => submit(e)}>
            <div className="content">
              <div className="details">
                <div className="track-art"></div>
                <div className="track-name">Track Name</div>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label>Upload Audio</Form.Label>
                  <Form.Control
                    type="file"
                    size="sm"
                    ref={val => {
                      form.current.audio_file = val;
                    }}
                  />
                </Form.Group>
              </div>
              <div className="mb-3" style={{ paddingTop: '80px' }}>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Quiz Name
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    ref={val => {
                      form.current.name = val;
                    }}
                  />
                </InputGroup>
              </div>
              <Button
                variant="primary"
                type="submit"
                className="submit"
              >
                Save [ Quiz ]
              </Button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
export default Createquiz;
