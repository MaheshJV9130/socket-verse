"use client";
import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const BackBtn = () => {
  const router = useRouter();
  const path = usePathname();

  if (path == "/profile" || path == '/search') {
    return (
      <div
        className="absolute left-[5%] top-[5%]"
        onClick={() => router.back()}
      >
        <MdArrowBack title="back" size={30} />
      </div>
    );
  }
};

export default BackBtn;
