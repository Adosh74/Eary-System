import React, { useState } from "react";
import  axios  from "axios";

export const Login = (props) => {
    const url="http://localhost:3000/login"
    const [data, setData] = useState({
        email:"",
        password:""
    })
    function submit(e){
        e.preventDefault();
        axios.post(url, {
            email:data.email,
            password:data.password
           } )
           .then(res => {
            console.log(res.data)
           })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={(e)=> submit(e)}>
                <label htmlFor="email">email</label>
                <input value={data.email} onChange={(e) => handle(e)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={data.password} onChange={(e) => handle(e)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Are you User? Register Here.</button>
        </div>
    )
}