import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isMobilemenuOpen,setMobileMenuOpen]=useState(false)
    const togglemenu = ()=> setMobileMenuOpen(!isMobilemenuOpen)
  return (
<>
<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
    <div className='flex items-center gap-10 z-50'>
        <Link to='/' >
        <img src="/netflix-logo.png" alt="netflix-logo" className='w-32 sm:w-40 ' />
        </Link>
      <h1> This is Home page</h1>
    </div>

    {isMobilemenuOpen && (
        <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
           <h1>This is Homr Page</h1>
        </div>
    )}
</header>
</>  )
}

export default Navbar