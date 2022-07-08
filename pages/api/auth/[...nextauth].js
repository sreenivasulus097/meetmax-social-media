import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import * as fireStoreFunctions from "firebase/firestore";
import { db } from "../../../firebase.config";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/sigin",
  },
  adapter: FirebaseAdapter({
    db: db,
    ...fireStoreFunctions,
  }),
});
