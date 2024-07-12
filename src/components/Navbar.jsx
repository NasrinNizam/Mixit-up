import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="py-4 bg-transparent">
        <div className="container">
           <div className="flex justify-between">
           <div className="logo"><h1>logo</h1></div>
            <div className="menu">
              <ul>
                <li><NavLink to="/"className={({ isActive }) => isActive ? "px-5 py-2 bg-black text-white font-semibold font-poppins rounded-lg " : "px-5 py-2 bg-white text-black font-semibold font-poppins rounded-lg"}>Home</NavLink></li>
              </ul>
            </div>
           </div>
       </div>
    </nav>
  )
}
