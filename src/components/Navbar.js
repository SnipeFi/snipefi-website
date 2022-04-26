import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
          <Link to="/" className="pl-8">SnipeFi</Link>

          <div className="px-4 cursor-pointer md:hidden">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                 <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="pr-8 md:block hidden">
            <Link to='/' className="p-4">Home</Link>
            <Link to='/product' className="p-4">Product</Link>
            <Link to='/tokenomics' className="p-4">Tokenomics</Link>
            <Link to='/roadmap' className="p-4">Roadmap</Link>
            <Link to='/about' className="p-4">About</Link>
          </div>
      </nav>
    )
  }