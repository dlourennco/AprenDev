import React from 'react'
import './login.css'

function LoginForm () {
  return (
      <div>
        <form id="form">
          <h1 id="title">AprenDev</h1>
          <div class="input-group">

            <div class="input-block">
              <label for="user">User</label>
              <input name="user" id="user"/>
            </div>

            <div class="input-block">
              <label for="password">Password</label>
              <input type="password"name="password" id="password"/>
            </div>
            
          </div>
          <button type="submit" id="button" onclick="login()">Login</button>
        </form>
      </div>
  )

}

export default LoginForm