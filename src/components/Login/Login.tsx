import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
function Login() {
  return (
    <div className='login'>
      <div className='login-form'>
        <h1>Mon compte </h1>
        <form>

            <input type={"text"} placeholder="Email"></input>

            <input type={"text"} placeholder="Password"></input>

          <div className='btn-submit'>
            <Link to="/create">
            <button type='submit' placeholder='Enter'>Connect </button>
            </Link>
          </div>

          <p>Vous n'avez pas encore de compte ? Data.titre</p>
          <Link to="/Sign">
           <button type='submit' className='btn-sign'>
            S'inscrire 
           </button>
           </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
