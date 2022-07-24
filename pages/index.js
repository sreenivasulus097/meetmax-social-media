import styles from "../styles/Home.module.css";
import { getSession, useSession, signOut, getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginLayout from "../components/utils/LoginLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Landing from "../components/Landing";

export default function Home({ providers }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  //console.log("router", asPath);
  console.log("status", status);
  console.log("session in landing page", session);

  /* session.accessToken = token.accessToken;
      session.user.tag = token;
      session.user.testDetail = user; */

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
  if (status === "loading") {
    return <div>Loading..........</div>;
  }
  if (!session)
    return (
      <LoginLayout
        pgLabel="signin"
        pageTitle="Social Media - Sign In"
        providers={providers}
      />
    );
  else router.push("/home");

  {
    /*return (
    <div className="align-center">
      {status === "loading" ? <div>Loading..........</div> : ()}
    </div>
  ); */
  }
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
