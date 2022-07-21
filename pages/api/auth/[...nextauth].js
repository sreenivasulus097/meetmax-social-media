import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

import { auth, db } from "../../../firebase.config";
import * as fireStoreFunctions from "firebase/firestore";

import CredentialsProvider from "next-auth/providers/credentials";
import { getSession, signIn } from "next-auth/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "credentials",
      name: "Credentials",
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        console.log("next auth email and password", email, password);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        // console.log("user credentials next auth", userCredentials);
        if (!userCredential.user) {
          throw new Error("You haven't registered yet");
        }
        if (userCredential) {
          return userCredential.user;
        }
      },
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
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      // session.user.tag = token;

      if (session.user?.email) {
        const userRec = auth.currentUser;
        //   session.user.tag = userRec;

        const docRef = doc(db, "users", userRec.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          session.user.tag = docSnap.data();
        }
      }
      return session;
    },
  },
});
