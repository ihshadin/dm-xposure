/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { TPrimaryBtn } from "@/types/btn.type";

const PrimaryBtn = ({ text, className, link }: TPrimaryBtn) => {
  const [btnDeg, setBtnDeg] = useState(45);

  const handleMouseMove = (e: any) => {
    const btns = document.querySelectorAll(".primaryBtn");
    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i] as HTMLElement;
      if (
        btn.innerText.split(" ").join("-").toLowerCase() ==
        text.split(" ").join("-").toLowerCase()
      ) {
        const rect = btn.getBoundingClientRect();
        const degree = e.clientY - e.clientX - rect.left;
        setBtnDeg(degree);
      }
    }
  };

  return (
    <Link
      href={link || "#"}
      style={{ "--btnDeg": `${btnDeg}deg` } as React.CSSProperties}
      onMouseMove={(e) => handleMouseMove(e)}
      className={`primaryBtn pl-5 pr-2.5 py-2.5 rounded-full capitalize text-white inline-block border border-[#FFFFFF0A] bg-[#FFFFFF30] transition-all duration-300 relative group hover:bg-[#ffffff21] ${
        className ? className : ""
      }`}
    >
      <i className="absolute inset-[-2px] flex rounded-full -z-10"></i>
      <i className="absolute inset-[-2px] flex rounded-full blur-md -z-10"></i>
      <span className="flex items-center gap-2.5 transition-all">
        {text}
        <span className="size-6 flex items-center justify-center bg-[#FFFFFF26] border border-[#ffffff21] rounded-full group-hover:translate-x-[40px] transition-all duration-500">
          <GoArrowRight className="text-secondary text-[12px]" />
        </span>
      </span>
      {/* <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div> */}
    </Link>
  );
};

export default PrimaryBtn;
