import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='gauche'>
            <h2>Todo-App</h2>
        </div>

        <div className='droite'>
        <Link to='./Sign'>
          <div className='btn-connect'>
           <p>S'inscrire</p>
          </div>
          </Link>
        </div>

         
    </div>
  )
}

export default Navbar
