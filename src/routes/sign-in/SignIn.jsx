import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../firebase/firebase";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
}
