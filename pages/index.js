import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";
import SignUp from "../components/signup/SignUp";
import "./i18nextInit";

export default function Home() {
  return (
    <div className="">
      <Layout>
        <SignUp />
      </Layout>
    </div>
  );
}
