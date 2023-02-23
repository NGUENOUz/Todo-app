 import {collection, getFirestore} from 'firebase/firestore'
import App from '../App';
import { app } from '../db/firebase';
 export const Firestore=getFirestore(app);

 // liste des taches 

 export const tachescollection=collection(Firestore,'todo-app')


