import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Header title={pageTitle} />
      <main className=" min-h-screen  dark:text-white max-w-[1500px] mx-auto  bg-gradient-to-r from-[#F6F9FF] to-[#FFFFFF] text-black dark:bg-none dark:bg-darkBgColor">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
