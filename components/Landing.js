import { signOut } from "next-auth/react";
import React from "react";

const Landing = () => {
  return (
    <div>
      <button onClick={() => signOut()}>signout</button>
    </div>
  );
};

export default Landing;
