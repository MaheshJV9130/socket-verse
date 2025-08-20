<<<<<<< HEAD
import React from "react";

const ProfilePage = () => {
  return (
    <div className="page flex items-center justify-center w-[100vw] h-[100vh]">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/socket-verse.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Mayur Gadhari
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Web Devloper
=======
"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const auth = useSelector((state) => state.auth);
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  
  useEffect(() => {
    setUsername(auth.username)
    setBio('Hey i am using SocketVerse')
  }, [])
  
  return (
    <div className="page flex items-center justify-center w-[100vw] h-[100vh]">
      
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 object-cover rounded-full shadow-lg"
            src={auth.profilePic}
            alt={auth.username}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {auth.username}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {auth.email}
>>>>>>> 906112259df1f1921096dd3022ab4b098ab31d7f
          </span>

          {/* changing area */}
          <div className="flex flex-col gap-4 mt-6 w-full px-4">
            <div className="userName flex flex-col gap-1">
              <label className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                User Name
              </label>
              <input
                type="text"
<<<<<<< HEAD
=======
                value={auth.username}
                onChange={(e)=>setUsername(e.target.value)}
>>>>>>> 906112259df1f1921096dd3022ab4b098ab31d7f
                placeholder="mayurgadhari07"
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition"
              />
            </div>
            <div className="bioArea flex flex-col gap-1">
              <label className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                Bio
              </label>
              <textarea
                rows={3}
<<<<<<< HEAD
=======
                readOnly
                value={bio}
>>>>>>> 906112259df1f1921096dd3022ab4b098ab31d7f
                placeholder="Tell us about yourself..."
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-center mt-2 px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
