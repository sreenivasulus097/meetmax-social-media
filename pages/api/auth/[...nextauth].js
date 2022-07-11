import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

import { db } from "../../../firebase.config";
import * as fireStoreFunctions from "firebase/firestore";
//import { auth } from "../../../firebase.config";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    // signIn: "/auth/sigin",
  },
  adapter: FirebaseAdapter({
    db: db,
    ...fireStoreFunctions,
  }),
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});
