import React, { useState } from "react";
import  axios  from "axios";

export const Register = (props) => {
    const url="http://localhost:3000/register"
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        phone:""
    })
    function submit(e){
        e.preventDefault();
        axios.post(url, {
            name:data.name,
            email:data.email,
            password:data.password,
            phone:data.phone
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
            <h2>Register</h2>
        <form className="register-form" onSubmit={(e)=> submit(e)}>
            <label htmlFor="name">Full name</label>
            <input value={data.name} name="name"onChange={(e) => handle(e)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={data.email} onChange={(e) => handle(e)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={data.password} onChange={(e) => handle(e)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="phone">phone</label>
            <input value={data.phone} onChange={(e) => handle(e)} type="phone" placeholder="0123456789" id="phone" name="phone" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log-in here.</button>
    </div>
    )
}