import React from 'react'

function Login() {
  return (
    <div class="Login-box">
      <h1>Admin</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <button class='submit'>Login</button>
        <closeform></closeform></form>
        <p class="para-2">
      Are you Normal User? <a href="">Log in as User</a>
    </p>
    </div>
  )
}

export default Login
