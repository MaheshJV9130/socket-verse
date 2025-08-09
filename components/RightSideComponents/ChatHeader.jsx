'use client'
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import MediaDrawer from "./MediaDrawer";

const ChatHeader = ({mediaDrawer , isDrawer}) => {

  return (
    <div className="p-4 flex justify-between items-center bg-slate-950">
      <div className="flex items-center">
        <div className="shrink-0">
          <img
            className="object-cover w-16 h-16 rounded-full"
            src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/34/2024/10/Mark-Zuckerberg.jpg"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Mark Bhai
          </p>
          <p className="text-sm text-gray-600">online</p>
        </div>
      </div>
      <div className="flex justify-evenly gap-5 items-center">
        <button className="hover:bg-gray-800 p-2 rounded-xl" title="Search in chat">
          <BsSearch size={25} />
        </button>
        <button className="hover:bg-gray-800 p-2 rounded-xl" title="Media" onClick={()=>mediaDrawer(prev=>!prev)}>
            {!isDrawer ?<img src="/folder.png" alt="media" width={25} height={25} className="invert-100"/>:<AiOutlineClose size={25} title="close"/>}
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
