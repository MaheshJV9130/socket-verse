"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import LogoComponent from "../LogoComponent";
import { MdOutlineLogout } from "react-icons/md";
import Link from "next/link";
import { Slide, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const NavToolBar = () => {
  const auth = useSelector((state) => state.auth);

  const componentRef = useRef(0);
  const [isMenu, setIsMenu] = useState(false);
  const router = useRouter();

  const handleClickOutside = (event) => {

    if (componentRef.current && !componentRef.current.contains(event.target)) {
     setIsMenu(false);
    }
  };
   useEffect(() => {
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const logoutFuction = async () => {
    if (confirm("Are really want to Logout?")) {
      let req = await fetch("http://localhost:8080/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      req = await req.json();
      if (req.status == 200) {
        toast.success(req.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        setTimeout(() => {
          router.push("/auth");
        }, 700);
      }
    } else {
      router.push("/");
    }
  };
  return (
    <div className="mt-4 flex justify-evenly lg:justify-evenly items-center gap-2 relative">
      <div className="my-auto mr-2">
        <LogoComponent size={20} font="xl" />
      </div>
      <ol className="flex justify-evenly gap-1 md:gap-2">
        <button
        onClick={()=>router.push('/search')}
          type="button"
          className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white cursor-pointer "
          title="Find Friends"
        >
          <FaUserFriends size={20} />

         
        </button>
        <button
          type="button"
          className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white cursor-pointer "
          title="Notifications"
        >
          <IoMdNotifications size={20} />

          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-white  text-xs rounded-full -top-1 -end-1 ">
            20
          </div>
        </button>
        <button className="cursor-pointer" onClick={() => setIsMenu(!isMenu)}>

           <img src={auth.profilePic} className='rounded-full object-cover w-10 h-10'alt='profile'/>
         
        </button>
      </ol>
      {isMenu && (
        <div ref={componentRef} className="bg-slate-100 text-slate-950 w-40 h-20 absolute top-[100%] right-4 rounded-xl">
          <ol className="flex justify-center gap-2 flex-col h-full items-center">
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <button
              title="logout"
                className="flex justify-center items-center text-red-800"
                onClick={() => logoutFuction()}
              >
                <MdOutlineLogout size={20} />
                Logout
              </button>
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default NavToolBar;
