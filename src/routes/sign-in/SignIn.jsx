import React from "react";
import { signInWithGooglePopup } from "../../firebase/firebase";

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
}
