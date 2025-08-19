"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import NavToolBar from "./NavToolBar";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleAdd = async () => {
    let req = await fetch(`http://localhost:8080/user/add-friend`, {
      method: "POST",
      credentials: "include",
       headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({username : inputValue})
    });
    req = await req.json();
    
  };
  return (
    <nav>
      <ul>
        <NavToolBar />
        <li className="flex justify-center items-center mt-4 border-2 w-fit mx-auto rounded-xl ">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search Friends"
            className="p-2  outline-0 rounded-xs "
          />
          <button className="p-2 cursor-pointer" onClick={handleAdd}>
            <BsSearch size={25} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
