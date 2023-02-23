import { useState } from 'react'
import './App.scss'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NOTFOUND } from 'dns'
import Create from './create'
import Details from './Details'
import Notfound from './Notfound'
import Bloc from './Bloc'
import Login from './components/Login/Login'
import Sign from './components/Sign/Sign'

function App() {

  let nom="scot";
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Sign' element={<Sign/>}/>
      <Route path='/create' element={<Create/>}/>;
      <Route path='/tache/:id' element={<Details/>}/>;
      <Route path='*' element={<Notfound/>}/>;
      <Route path='/' element={<Bloc/>}/>;
    </Routes>
  )
}

export default App
