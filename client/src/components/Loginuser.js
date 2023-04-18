import React from 'react'

function Loginuser() {
  return (
    <div class="Login-box">
    <h1>User</h1>
    <form>
      <label>Email</label>
      <input type="email" placeholder="" />
      <label>Password</label>
      <input type="password" placeholder="" />
      <button class='submit'>Login</button>
      <closeform></closeform></form>
      <p class="para-2">
    Are you  Admin? <a href="">Log in as Admin</a>
  </p>
  </div>
  )
}

export default Loginuser