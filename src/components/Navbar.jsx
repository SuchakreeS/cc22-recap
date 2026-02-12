import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div className='mb-5 flex  justify-center text-2xl gap-8 font-bold bg-gray-900 text-white p-5'>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "register">Register</NavLink>
        <NavLink to = "post">Post</NavLink>
    </div>
  )
}

export default Navbar