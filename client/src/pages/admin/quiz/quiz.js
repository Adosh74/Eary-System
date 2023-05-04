import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import img1 from './OIP.jpg';
import './Quiz.css';
import img2 from './edit.jpg';
import img3 from './sevenup.jpg';

const Quiz = () => {
  return (
    <div>
      <div className="containe">
        <div className="card">
          <Link to="/createquiz">
            <button>
              <input
                type="Image"
                src={img1}
                alt="quiz"
                className="quizimg"
              ></input>
            </button>
          </Link>

          <div className="introo">
            <h1 className="g">Quiz</h1>
            <p className="ll">
              The <span>Quiz</span> You can create it from Here{' '}
            </p>
          </div>
        </div>

        <div>
          <img src={img3} alt="logo" className="logo"></img>
        </div>

        <div className="card">
          <Link to="/editquiz">
            <button>
              <input
                type="Image"
                src={img2}
                alt="quiz"
                className="edit"
              ></input>
            </button>
          </Link>

          <div className="introo">
            <h1 className="g">Edit-Quiz</h1>
            <p className="ll">
              The <span>Quiz</span> You can Edit it from Here{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
