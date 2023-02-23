
import exp from "constants";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApGD8ddaQ2cyYHFga9aWz2aImw4IXMvkE",
  authDomain: "todo-app-ba41d.firebaseapp.com",
  projectId: "todo-app-ba41d",
  storageBucket: "todo-app-ba41d.appspot.com",
  messagingSenderId: "192767257404",
  appId: "1:192767257404:web:94aac6e0feec72c1664c39",
  measurementId: "G-KDPQMXGTZP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

