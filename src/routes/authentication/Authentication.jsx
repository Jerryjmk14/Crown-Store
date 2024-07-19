import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../firebase/firebase";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";

export default function Authentication() {
  return (
    <div>
      <h2>Sign In Page</h2>
      <SignIn />
      <SignUp />
    </div>
  );
}
