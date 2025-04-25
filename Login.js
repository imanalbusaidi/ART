import React, { useState } from "react";
import "./Login.css";

import user_icon from "./person.png";
import email_icon from "./email.png";
import password_icon from "./password.png";
import side_image from "./side_image.png";

export const Login = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="my-login-container">
      <img src={side_image} alt="Side " className="my-side-image" />
      <div className="my-container">
        <div className="my-header">
          <div className="my-text">{action}</div>
          <div className="my-underline"></div>
        </div>
        <div className="my-inputs">
          {action === "Login" ? null : (
            <div className="my-input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name"/>
            </div>
          )}
          <div className="my-input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id"/>
          </div>
          <div className="my-input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"/>
          </div>
        </div>
        {action === "Sign Up" ? null : (
          <div className="my-forgot-password">Lost Password? <span>Click Here! </span></div>
        )}
        <div className="my-submit-container">
          <div className={action === "Login" ? "my-submit gray" : "my-submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
          <div className={action === "Sign Up" ? "my-submit gray" : "my-submit"} onClick={() => setAction("Login")}>Login</div>
        </div>
      </div>
    </div>
  );
};
