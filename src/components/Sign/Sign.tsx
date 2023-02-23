import { documentId } from 'firebase/firestore';
import React, { HtmlHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import './Sign.scss'
// let nombre: string= "nom";
// let nom= document.getElementById('nom');
// let prenom= document.getElementById('prenom')

// let valider=document.getElementById('valider');

// valider?.addEventListener('onclick',()=>{
//   if (nom.value=="" && prenom.value== ""){
// console.log('les champs sont vides');
//   }
// })

let nom= document.getElementsByName('nom');

let valider= document.getElementById('valider');

valider?.addEventListener('onClick',()=>{
  alert("bienvenue "+nom.values);
})



function Sign() {
  return (
    <div className='Sign'>
     <div className='bloc-sign'>
     <h1>S'inscrire</h1>
     <form>
        <input type={"text"} placeholder="Nom :" name='nom' id="nom"></input>

        <input type={"text"} placeholder="Prenom :" id="prenom"></input>

        <input type='text' placeholder="Email :" id="email"></input>

        <input type='password' placeholder="Password :" id="password"></input>

        <p><i>Profile :</i></p>
        <select  id='profile'>
        <option value='Visiteur'>Visiteur</option>
        <option value='Admin'>Admin</option>
  
        </select>
 
        <div className='btn-send'>
            <Link to="/Login">
            <button type='submit' id='valider'>Valider </button>
            </Link>
        </div>
     </form>
        </div>   
 

    </div>
  )
}

export default Sign
