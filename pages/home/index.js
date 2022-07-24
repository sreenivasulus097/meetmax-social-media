import Layout from "../../components/Layout";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoPeopleSharp, IoPersonOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { getProviders, getSession, useSession, signOut } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const home = () => {
  const sideList = [
    { id: 1, icon: HiOutlineViewGrid, title: "Feed", path: "/home" },
    { id: 2, icon: IoPeopleSharp, title: "My Community", path: "/community" },
    { id: 3, icon: TiMessages, title: "Messages", path: "/messages" },
    {
      id: 4,
      icon: IoMdNotificationsOutline,
      title: "Notification",
      path: "/notification",
    },
    { id: 5, icon: MdOutlineExplore, title: "Explore", path: "/explore" },
    { id: 6, icon: IoPersonOutline, title: "Profile", path: "/profile" },
    { id: 7, icon: FiSettings, title: "Settings", path: "/settings" },
  ];

  return (
    <Layout pageTitle="Social Media - Feed">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-2/12 text-sm justify-center">
          {sideList.map((sideNav, index) => {
            const Icon = sideNav.icon;
            return (
              <div
                key={sideNav.id}
                className="flex mx-4 mt-1 p-2  hover:bg-[#4e5d78] hover:rounded-md hover:text-white"
              >
                <Link href={sideNav.path} passHref>
                  <a>
                    <Icon className="mx-2 mt-0 inline-block text-lg " />
                    <span className="inline-block">{sideNav.title}</span>
                  </a>
                </Link>
              </div>
            );
          })}
          <div className="flex mx-4 mt-1 p-2 hover:bg-[#4e5d78] hover:rounded-md hover:text-white">
            <button onClick={() => signOut()}>
              <FiLogOut className="mx-2 mt-1 inline-block text-lg " />
              <span className="inline-block">Logout</span>
            </button>
          </div>
        </div>
        <div className="w-5/12 bg-[#fafafb] mx-1">Posts</div>
        <div className="w-3/12 bg-[#fafafb] mx-1">Events</div>
        <div className="w-2/12">Friends</div>
      </div>
    </Layout>
  );
};

export default home;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login-page"])),
      session,
      providers,
    },
  };
}
