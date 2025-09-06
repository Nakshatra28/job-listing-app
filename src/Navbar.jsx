import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
  )
}

export default Navbar