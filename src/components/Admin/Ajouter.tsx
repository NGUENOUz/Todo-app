import React from 'react'

function Ajouter() {
  return (
    <div>
       <div className='Ajouter'>
          
          <h1>Ajout des nouvelles taches</h1>
     <form>
          <input type='text' name='titre' placeholder='titre'></input>

          <input type='text' name='accroche' placeholder='accroche'></input>

          <textarea id='description' placeholder='description'></textarea>

          <input type='text' name='status' placeholder='status'></input>

          <div className='btn-ajout'>
             <button type='submit' id='ajouter'>Ajouter</button>
          </div>

     </form>
       </div>
    </div>
  )
}

export default Ajouter
