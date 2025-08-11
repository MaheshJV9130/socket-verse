"use client";
import ChatUI from "@/components/ChatUI";
import DefaultChatScreen from "@/components/RightSideComponents/DefaultChatScreen";
import LeftSideContainer from "@/components/LeftSideContainer";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { setUser } from "@/redux/authSlice";
import jwtToUserData from "@/utils/jwtDecoder";
import { useDispatch } from "react-redux";

const Home = () => {
 const getUserdata = async()=>{
  const req = await fetch(`${process.env.BACKEND_URL}/` , {method:'POST'})
  cons
 }
  const dispatch = useDispatch();
  useEffect(() => {
    const getUerData = jwtToUserData();
    if (getUerData) {
      dispatch(setUser(getUerData));
      
    }
  }, []);

  const [view, setView] = useState(false);
  const openChat = () => {
    setView(true);
  };

  return (
    <div className="w-screen flex justify-center items-center h-screen bg-red-50">
      <LeftSideContainer onclick={openChat} />
      <div className="hidden lg:block w-[75vw] h-full bg-gradient-to-r from-[#0f172a]  to-[#334155]">
        {!view ? <DefaultChatScreen /> : <ChatUI />}
      </div>
    </div>
  );
};

export default Home;
