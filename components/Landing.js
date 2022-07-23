import { signOut } from "next-auth/react";
import React from "react";
import Layout from "./Layout";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const Landing = ({ user }) => {
  return (
    <Layout>
      <div className="flex flex-col w-2/12 text-md justify-center bg-red-500">
        <div className="flex m-4 p-2 hover:bg-[#4e5d78] hover:rounded-md hover:text-white">
          <HiOutlineViewGrid className="mx-2 mt-1 inline-block text-lg " />
          <span className="inline-block">Feed</span>
        </div>
        <div>
          <IoPeopleSharp />
          My Community
        </div>
        <div>Messages</div>
        <div>Notification</div>
        <div>Explore</div>
        <div>Profile</div>
        <div>Settings</div>
        <div>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
