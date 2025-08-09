"use client";
import ChatUI from "@/components/ChatUI";
import DefaultChatScreen from "@/components/RightSideComponents/DefaultChatScreen";
import LeftSideContainer from "@/components/LeftSideContainer";
import { useParams , useRouter} from "next/navigation";
import React, { useState } from "react";

const Home = () => {
  const [view, setView] = useState(false);
  const openChat = () => {
  
    setView(true);

  };

  return (
    <div className="w-screen flex justify-center items-center h-screen bg-red-50">
      <LeftSideContainer onclick={openChat}/>
      <div className="hidden lg:block w-[75vw] h-full bg-gradient-to-r from-[#0f172a]  to-[#334155]">
        {!view ? <DefaultChatScreen /> : <ChatUI />}
      </div>
    </div>
  );
};

export default Home;
