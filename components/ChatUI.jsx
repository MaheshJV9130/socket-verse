'use client'
import React, { use, useEffect, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import OwnMsg from "./RightSideComponents/OwnMsg";
import ChatHeader from "./RightSideComponents/ChatHeader";
import MediaDrawer from "./RightSideComponents/MediaDrawer";
const ChatUI = () => {
  const [isDrawer, setIsDrawer] = useState(false)


  return (
    <div className="relative h-screen">
      <ChatHeader isDrawer={isDrawer} mediaDrawer={setIsDrawer}/>
      <div className="flex-1 overflow-y-scroll chatScroll p-4 max-h-[80%]">
        <div className="flex flex-col justify-end h-full overflow-y-scroll space-y-2 ">
          <OwnMsg msg={"Hello"} />
          
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex items-center gap-2 bg-slate-950 p-2">
        {/* File Upload */}
        <div>
          <label
            htmlFor="file"
            className="cursor-pointer text-gray-300 hover:text-white"
            title="Attach files"
          >
            <MdAttachFile size={25} />
          </label>
          <input type="file" multiple id="file" className="hidden" />
        </div>

        {/* Textarea */}
        <textarea
          placeholder='Type your message...'
          className="flex-1 p-2 bg-slate-800 text-white rounded-lg outline-none resize-none 
               placeholder-gray-400 focus:ring-2 focus:ring-blue-500 
               scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900"
          rows={1}
        />

        {/* Send Button */}
        <button
          className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
          title="Send message"
        >
          <BsSendFill size={20} />
        </button>
      </div>
      {isDrawer && <MediaDrawer/>}
    </div>
  );
};

export default ChatUI;
