"use client";

import React from "react";
import {
  FaRocket,
  FaUserFriends,
  FaLock,
  FaCode,
  FaGlobe,
} from "react-icons/fa";
import BackgroundVideo from "@/components/BackgroundVideo";
import LogoComponent from "@/components/LogoComponent";
import Link from "next/link";

const features = [
  {
    icon: <FaRocket size={28} />,
    title: "Real-Time Messaging",
    description:
      "Send and receive messages instantly with powerful Socket.IO integration.",
  },
  {
    icon: <FaUserFriends size={28} />,
    title: "Friend & Room Chats",
    description: "Chat globally, privately with friends, or join custom rooms.",
  },
  {
    icon: <FaGlobe size={28} />,
    title: "Online Presence",
    description: "See who’s online, offline, or active in a chat room.",
  },
  {
    icon: <FaLock size={28} />,
    title: "Secure Login",
    description:
      "Google-authenticated login using NextAuth for security and ease.",
  },
  {
    icon: <FaCode size={28} />,
    title: "Powered by Modern Tech",
    description: "Built with Next.js, Express.js, MongoDB, and Tailwind CSS.",
  },
];

const ExplorePage = () => {
  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-y-scroll">
      <BackgroundVideo />
      {/* Banner */}
      <div className="z-10 absolute top-0 right-0 w-full h-full ">
        <div className="text-center max-w-4xl mx-auto flex justify-center items-center flex-col mt-10">
          <LogoComponent />
          <p className="text-gray-200 text-sm md:text-xl font-semibold mt-2">
            Discover the future of real-time communication — fast, secure, and
            beautifully designed.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-5 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 p-6 cursor-pointer rounded-xl shadow-md  hover:shadow-blue-500/30 transition-all"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5 text-center">
          <p className="text-sm md:text-lg mb-4">
            Ready to join the universe of chats?
          </p>
          <Link
            href="/auth"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};


export default ExplorePage;
