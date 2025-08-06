import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { BsThreeDotsVertical } from 'react-icons/bs';
import LogoComponent from "./LogoComponent";
const ChatToolBar = () => {
  return (
    <div className="mt-4 flex justify-center items-center gap-7 px-4">
      <div className="my-auto">
        <LogoComponent size={20} font="xl"/>
      </div>
      <ol className="flex justify-evenly gap-2">
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white cursor-pointer"
        >
          <FaUserFriends size={20} />

          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-white  text-xs rounded-full -top-1 -end-1 ">
            20
          </div>
        </button>
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white cursor-pointer"
        >
          <IoMdNotifications size={20} />

          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-white  text-xs rounded-full -top-1 -end-1 ">
            20
          </div>
        </button>
        <button className="cursor-pointer">
          <BsThreeDotsVertical size={20} />
        </button>
      </ol>
    </div>
  );
};

export default ChatToolBar;
