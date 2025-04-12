import React from 'react'
import {Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Homepage from './pages/home/HomePage'
import { Toaster } from 'react-hot-toast'


function App() {

  
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/> } />
      <Route path='/signup' element={<SignUpPage/> } />
      <Route path='/login' element={  <LoginPage/> }/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App