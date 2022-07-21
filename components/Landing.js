import { signOut } from "next-auth/react";
import React from "react";

const Landing = ({ user }) => {
  return (
    <div>
      <h1>Home page</h1>
      <p>User : {user}</p>
      <button onClick={() => signOut()}>signout</button>
    </div>
  );
};

export default Landing;
