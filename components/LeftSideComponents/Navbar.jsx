import React from "react";
import { BsSearch } from 'react-icons/bs';

import NavToolBar from "./NavToolBar";

const Navbar = () => {
  return (
   
      <nav>
        <ul>
          <NavToolBar/>
          <li className="flex justify-center items-center mt-4 border-2 w-fit mx-auto rounded-xl ">
            <input
              type="text"
              placeholder="Search Friends"
              className="p-2  outline-0 rounded-xs "
            />
            <button className="p-2 cursor-pointer">
              <BsSearch size={25} />
            </button>
          </li>
        </ul>
      </nav>
  
  );
};

export default Navbar;
