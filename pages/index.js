import styles from "../styles/Home.module.css";
import { getProviders, getSession, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginLayout from "../components/utils/LoginLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Landing from "../components/Landing";

export default function Home({ providers }) {
  const { data: session, status } = useSession();
  const { push, asPath } = useRouter();
  console.log("router", asPath);
  /* useEffect(() => {
    if (!session) {
      console.log("session not ready", session);
      //  push(`/auth/signin?callbackUrl=${asPath}`);
      push("/auth/signin");
    } else {
      console.log("session ready");
      router.push("/home");
    }
  }, []); */
  if (!session)
    return (
      <>
        <button onClick={() => signOut()}>signout</button>
        <LoginLayout
          pgLabel="signin"
          pageTitle="Social Media - Sign In"
          providers={providers}
        />
      </>
    );
  else return <Landing />;
  console.log("session", session);
  return <div className="">{!session ? <div>Loading..........</div> : ""}</div>;
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);
  const { locale } = context;
  // console.log("csrf", { csrfToken });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login-page"])),
      session,
      providers,
    },
  };
}
