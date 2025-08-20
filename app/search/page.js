"use client";
import UserFind from "@/components/UserFind";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  const [searchResult, setSearchResult] = useState([])
  const search = async (username) => {
    let req = await fetch("http://localhost:8080/user/find-friend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:'include',
      body: JSON.stringify({ username: username }),
    });
    req = await req.json();
    setSearchResult(req)
   
  };
  return (
    <div className="h-screen w-screen relative">
      <form
        className="flex justify-center items-center mt-[2%] border-2 w-fit mx-auto rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          placeholder="Search Friends"
          className="p-2  outline-0 rounded-xs "
        />
        <button className="p-2 cursor-pointer">
          <BsSearch size={25} />
        </button>
      </form>
      <ul
        role="list"
        className="divide-y w-full mx-auto m-2 divide-gray-200 dark:divide-gray-700 overflow-y-auto max-h-[90%] container mb-12"
      >
        {searchResult.length === 0 && <>
          <p className="text-center text-sm m-2 p-2 font-extralight">Suggestion for you</p>
          <UserFind/>
        </>}
        {searchResult.map((user,i)=>(

        <UserFind username={user.username} profilePic={user.profilePic} key={i} />
        
        ))}
      </ul>
    </div>
  );
};

export default Search;
