import React from "react";
import "./button.scss";

/*
default

inverted

google sign in
*/

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <div>
      <button
        className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
        {...otherProps}>
        {children}
      </button>
    </div>
  );
}
