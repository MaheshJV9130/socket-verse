'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './LeftSideComponents/Navbar'
import FriendComponent from './LeftSideComponents/FriendComponent'
import { useSelector } from 'react-redux'

const LeftSideContainer = ({onclick}) => {
  const auth = useSelector((state) => state.auth);
  const [friends, setFriends] = useState([])
  const getFriend = async()=>{
  const req = await fetch(`http://localhost:8080/user/friends` , {credentials:'include'})
  const res = await req.json()
 
  setFriends(res)
 }
 useEffect(() => {
   getFriend()
 }, [])
 
  return (
   <div className="w-screen lg:w-[30vw] h-full bg-blue-950 ">
        <Navbar />

        <div className="w-full  p-4 mx-auto  h-full rounded-lg shadow-sm sm:p-8 ">
          <ol className="flex justify-evenly gap-5  mb-4 items-center">
            <span className="cursor-pointer text-xs font-medium me-2 px-2.5 py-0.5 rounded-xs bg-gray-700 text-gray-300">
             Friends {friends.length}
             
            </span>
            <span className="cursor-pointer text-xs font-medium me-2 px-2.5 py-0.5 rounded-xs bg-gray-700 text-gray-300">
              Groups {0}
            </span>
          </ol>
          <div className="flow-root w-full  h-[80%] ">
            <ul
              role="list"
              className="divide-y w-full divide-gray-200 dark:divide-gray-700 overflow-y-scroll max-h-full container mb-12"
            >
            {/* FriendList here  */}
            
            
            {friends.length === 0 ? (
              <p className="text-center text-red-500 font-medium">
                No Friends Yet
              </p>
            ) : (
              friends.map((user, idx) => (
                <FriendComponent key={user._id || idx} user={user} />
              ))
            )}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default LeftSideContainer
