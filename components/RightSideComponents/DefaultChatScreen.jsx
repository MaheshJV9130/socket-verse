import React from "react";
import Image from "next/image";

const DefaultChatScreen = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center ">
      <Image
        src="/socket-verse.jpg"
        alt="logo"
        className="rounded-full"
        width={200}
        height={200}
      />
      <div>
        <h2 className="text-2xl md:text-5xl font-extrabold text-white text-center">
          Welcome to SocketVerse
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 text-center mt-4 max-w-2xl">
          A real-time chat universe where conversations never stop.
        </p>
      </div>
    </div>
  );
};

export default DefaultChatScreen;
