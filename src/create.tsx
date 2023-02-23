import React, { useEffect } from 'react'
import {onSnapshot} from 'firebase/firestore';
import { tachescollection } from './components/controller';
import './Create.scss'




function Create() {

  useEffect(()=>
        onSnapshot (tachescollection , (snapshot)=>
          { snapshot.docs.map((doc)=>
          {console.log(doc,"doc");})
        }
         ))
  return (
    <div className='Block'>
        <h1>Liste des taches </h1>
        <div className='block-taches'>
           <span className='titre'>Tache 1</span>
           <span className='description'>Dans cette tache , 
           votre mission est de livré tout les clients de la ville en moins de 24h</span>
           <div className='date-publication'>
             <span>Publier le 12/11/2023</span>  
            <span className='status'>Disponible</span>
            
            </div>

           <div className='btn-plus'>
            <img src="./assets/plus.png"></img>
           </div>
        </div>


        <div className='block-taches'>
           <span className='titre'>Tache 2</span>
           <span className='description'>Dans cette tache , 
           votre mission est de livré tout les clients de la ville en moins de 24h</span>
           <div className='date-publication'>
             <span>Publier le 12/11/2023</span>  
            <span className='status'>Disponible</span>
            
            </div>

           <div className='btn-plus'>
            +
           </div>
        </div>


        <div className='block-taches'>
           <span className='titre'>Tache 3</span>
           <span className='description'>Dans cette tache , 
           votre mission est de livré tout les clients de la ville en moins de 24h</span>
           <div className='date-publication'>
             <span>Publier le 12/11/2023</span>  
            <span className='status'>Disponible</span>
            
            </div>

           <div className='btn-plus'>
            +
           </div>
        </div>
    </div>
  )
}

export default Create

