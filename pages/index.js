import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const { push, asPath } = useRouter();
  console.log("router", asPath);
  useEffect(() => {
    if (!session) {
      console.log("session not ready", session);
      //  push(`/auth/signin?callbackUrl=${asPath}`);
      push("/auth/signin");
    } else {
      console.log("session ready");
      router.push("/home");
    }
  }, []);

  console.log("session", session);
  return (
    <div className="">
      {status === "loading" ? <div>Loading..........</div> : ""}
    </div>
  );
}
