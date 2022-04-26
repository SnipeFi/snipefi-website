import React from "react"
import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-16">SnipeFi</h1>
            <Link className="mt-5 py-6 px-10 bg-purple-500 rounded-full text-3xl hover:bg-purple-200 transition duration-300 ease-in-out flex items-center animate-bounce" to="/menu">
                Launch App{' '}
            </Link>
        </div>
    )
  }