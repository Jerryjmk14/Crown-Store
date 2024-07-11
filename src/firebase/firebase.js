// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6T_0pwlRvyBSLoI59Tdv-B3DZE247e4k",
  authDomain: "crown-store-d157c.firebaseapp.com",
  projectId: "crown-store-d157c",
  storageBucket: "crown-store-d157c.appspot.com",
  messagingSenderId: "572397394816",
  appId: "1:572397394816:web:a500259520d98b99bfbf65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
