import React , {  useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from 'axios';
import { getAuthToken } from "../services/auth.service";


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
         <section class="cards" id="services">
                <h2 class="title">Choose an exam</h2>
            <div class="content">
                    
            {exams.result.map(exam => {
              return ( 
                <div class="card_choose_Q" >
                <Link  to="/Exam" >  
                <Button variant="outline-danger" type="submit"  >
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
