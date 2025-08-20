import React from 'react'
import { MdCancel } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";

const Req = (
    {
  username = "Mark",
  profilePic = "https://staticfanpage.akamaized.net/wp-content/uploads/sites/34/2024/10/Mark-Zuckerberg.jpg",
}
) => {
  return (
    <li className="py-3 sm:py-4 cursor-pointer w-1/2 mx-auto">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    className="object-cover w-14 lg:w-16 h-14 lg:h-16 rounded-full"
                    src={profilePic}
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {username}
                  </p>
                </div>
                <div className="flex gap-5">
                  <MdCancel title="Reject Req" size={30} />
                  <IoMdPersonAdd title="Accept Req" size={30} />
                  {/* <MdOutlineAddCircle title="Send Request" size={30} /> */}
                </div>
              </div>
            </li>
  )
}

export default Req
