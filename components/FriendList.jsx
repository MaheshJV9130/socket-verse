import Image from "next/image";
import React from "react";

const FriendList = ({ msg = 'email@windster.com' , onclick}) => {
  return (
    <li className="py-3 sm:py-4 cursor-pointer" onClick={onclick}>
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
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {msg}
          </p>
        </div>
      </div>
    </li>
  );
};

export default FriendList;
