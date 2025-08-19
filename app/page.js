"use client";
import ChatUI from "@/components/ChatUI";
import DefaultChatScreen from "@/components/RightSideComponents/DefaultChatScreen";
import LeftSideContainer from "@/components/LeftSideContainer";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { setUser } from "@/redux/authSlice";
import jwtToUserData from "@/utils/jwtDecoder";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [friends, setFriends] = useState([])
  const auth = useSelector((state) => state.auth);

 
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserData = jwtToUserData();
    if (getUserData) {
      dispatch(setUser(getUserData));
     
      
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
