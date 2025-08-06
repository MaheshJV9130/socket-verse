import React from 'react'
import LogoComponent from './LogoComponent'
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   
    <footer className="bg-gray-900 relative bottom-0 text-gray-300 px-6 py-10 w-screen">
         {/* Logo & Tagline */}
        <div className="flex flex-col justify-center items-center">
          <LogoComponent size={40} font='2xl' className="text-2xl font-bold text-white"></LogoComponent>
          <p className="mt-1 text-xs md:text-2xl text-gray-400 font-bold text-center">
            Real-time chat across galaxies. Connect instantly, securely.
          </p>
        </div>

      <div className="max-w-7xl mx-auto flex text-center md:text-left justify-center items-center mt-10 h-full">

        {/* Quick Links */}
        <div className="w-1/2 text-center border-dashed border-blue-600/20 border-t-0 border-l-0 border-b-0 border-r-2 ">
          <h3 className="text-xs md:text-xl font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 md:text-base text-[9px]">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/explore" className="hover:text-white">Features</Link></li>
            <li><Link href="/get-started" className="hover:text-white">Get Started</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className='flex justify-center items-center flex-col w-1/2 h-full'>
          <h3 className="text-xs md:text-xl font-semibold text-white mb-2">Connect with us</h3>
          <div className="flex justify-center md:justify-start space-x-2 md:space-x-5 mt-2">
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a target='_blank' href="https://github.com/MaheshJV9130/socket-verse" className="hover:text-white"><FaGithub size={20} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />
      <p className="text-center text-[9px] md:text-sm text-gray-500">
        © {new Date().getFullYear()} SocketVerse. All rights reserved.
      </p>
    </footer>
  );
};


export default Footer
