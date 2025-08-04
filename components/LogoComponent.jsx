import Link from 'next/link'
import React from 'react'

const LogoComponent = () => {
  return (
    <Link
      href="/"
      className="flex items-center mb-6 text-2xl font-semibold text-white animate-pulse"
    >
      <img
        className="md:w-20 md:h-20 w-12 h-12 mr-2 rounded-full"
        src="/socket-verse.jpg"
        alt="logo"
      />
      <h1 className="md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 drop-shadow-[0_4px_12px_rgba(138,43,226,0.5)] tracking-wide">
        SocketVerse
      </h1>
    </Link>
  )
}

export default LogoComponent
