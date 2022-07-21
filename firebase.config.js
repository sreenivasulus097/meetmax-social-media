// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA5AX1edtP_lGqcv_yFeoPL0XkIPpkbbJc",
  authDomain: "meetmax-social-media.firebaseapp.com",
  projectId: "meetmax-social-media",
  storageBucket: "meetmax-social-media.appspot.com",
  messagingSenderId: "766559029074",
  appId: "1:766559029074:web:96188a4fc977d59e4e1c8b",
};
//  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,

// Initialize Firebase
console.log("get apps", getApps().length);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
console.log("get apps after init", getApps().length);
const auth = getAuth(app);
console.log("firebase config auth", auth);
export { app, db, storage, auth };

console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working");
