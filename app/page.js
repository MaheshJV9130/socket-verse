"use client";
import ControlPanel from "@/components/ControlPanel";
import DefaultChatScreen from "@/components/DefaultChatScreen";
import FriendList from "@/components/FriendList";
import LogoComponent from "@/components/LogoComponent";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const Home = () => {
  const [view, setView] = useState(false);
  const openChat = () => {
    setView(true);
  };

  return (
    <div className="w-screen flex justify-center items-center h-screen bg-red-50">
      <div className=" w-[25vw] h-full bg-blue-950 ">
        <Navbar />

        <div className="w-full max-w-md p-4  h-full rounded-lg shadow-sm sm:p-8 ">
          <ol className="flex justify-evenly gap-5  items-center">
        <li className="cursor-pointer w-20 text-center bg-blue-500 hover:bg-blue-600 p-1 rounded-xs">
          Friends
        </li>
        <li className="cursor-pointer w-20 text-center bg-blue-500 hover:bg-blue-600 p-1 rounded-xs">
          Groups
        </li>
      </ol>
          <div className="flow-root h-full">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto h-[80%] container mb-12"
            >
              <FriendList onclick={openChat} />
              <FriendList onclick={openChat} />
              <FriendList onclick={openChat} />
              <FriendList onclick={openChat} />
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-[75vw] h-full bg-gradient-to-r from-[#0f172a]  to-[#334155]">
        {!view ? <DefaultChatScreen /> : <ControlPanel/>}
      </div>
    </div>
  );
};

export default Home;
