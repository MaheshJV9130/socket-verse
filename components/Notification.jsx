import React from "react";

import Req from "./Req";

const Notification = () => {
  return (
    <>
      <h1 className="text-center text-3xl mt-2 font-bold">Notifications</h1>
      <ul className="divide-y divide-gray-500 h-[90vh] container overflow-y-auto mx-auto">
       <Req/>
      </ul>
    </>
  );
};

export default Notification;
