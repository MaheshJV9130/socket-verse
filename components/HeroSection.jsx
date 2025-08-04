import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import LogoComponent from "./LogoComponent";
import Link from "next/link";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <>
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <BackgroundVideo />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto h-full mt-10 md:mt-0">
        <LogoComponent />
        <h2 className="text-2xl md:text-5xl font-extrabold text-white text-center">
          Welcome to SocketVerse
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 text-center mt-4 max-w-2xl">
          A real-time chat universe where conversations never stop.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-10">
          <Link
            href="/get-started"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Get Started
          </Link>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Explore
          </button>
        </div>
        {/* <div className="w-full bg-gray-800/50 backdrop-blur-md rounded-lg shadow border border-gray-700 sm:max-w-md xl:p-0">
      
    </div> */}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default HeroSection;
