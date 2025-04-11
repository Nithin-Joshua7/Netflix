import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Homepage from './pages/home/HomePage'
import { Toaster } from 'react-hot-toast'

import { Loader } from 'lucide-react'
import { useEffect } from 'react'
import { useAuthStore } from '../store/authUser'


function App() {

  const { user, isCheckingAuth, authCheck } = useAuthStore();

	useEffect(() => {
		authCheck();
	}, [authCheck]);

	if (isCheckingAuth) {
		return (
			<div className='h-screen'>
				<div className='flex justify-center items-center bg-black h-full'>
					<Loader className='animate-spin text-red-600 size-10' />
				</div>
			</div>
		);
	}
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/> } />
      <Route path='/signup' element={!user ? <SignUpPage/> : <Navigate to = {'/'} />} />
      <Route path='/login' element={ !user ? <LoginPage/> : <Navigate to = {'/'} />}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App