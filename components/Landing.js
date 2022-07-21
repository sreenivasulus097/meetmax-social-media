import { signOut } from "next-auth/react";
import React from "react";

const Landing = () => {
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => signOut()}>signout</button>
    </div>
  );
};

export default Landing;
