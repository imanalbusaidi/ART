import React, { useState } from "react";
import axios from "axios";
import Showstaff from "./Showstaff";
import "./Staffdetails.css";

const Staffdetails = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [usermessage, setUsermessage] = useState("");
  const [resMsg, setResMsg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showStaff, setShowStaff] = useState(false); // State to control showing the staff details

  const newUser = () => {
    if (!username || !useremail || !usermessage) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    axios
      .post("http://localhost:4002/adduser", {
        username: username,
        useremail: useremail,
        usermessage: usermessage,
      })
      .then((res) => {
        setResMsg(res.data);
        setShowStaff(true); // Set showStaff to true when user is added
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="useremail">User Email</label>
          <input
            type="email"
            id="useremail"
            placeholder="User Email"
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="usermessage">User Message</label>
          <textarea
            id="usermessage"
            placeholder="User Message"
            value={usermessage}
            onChange={(e) => setUsermessage(e.target.value)}
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="button" onClick={newUser}>
          Contact US
        </button>
      </form>
      {showStaff && <Showstaff />} {/* Render Showstaff component if showStaff is true */}
    </div>
  );
};

export default Staffdetails;

