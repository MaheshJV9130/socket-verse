import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoComponent = ({size = 80 , font = '5xl'}) => {
  return (
    <Link
      href="/welcome"
      className="flex items-center text-2xl font-semibold text-white animate-pulse"
    >
      <Image
      priority
        width={size}
        height={size}
        className={`md:w-[${size}] md:h-[${size}] w-10 h-10 mr-2 rounded-full`}
        src="/socket-verse.jpg"
        alt="logo"
      />
      <h1 className={`md:text-${font} font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 drop-shadow-[0_4px_12px_rgba(138,43,226,0.5)] tracking-wide`}>
        SocketVerse
      </h1>
    </Link>
  )
}

export default LogoComponent
