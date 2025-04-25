// Showstaff.js

import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Showstaff.css";

const Showstaff = () => {
  const [listOfUser, setlistOfUser] = useState([]);
  const [countRecords, setcountRecords] = useState(0);
  
  useEffect(() => {
    Axios.get("http://localhost:4002/getAllUser")
      .then((response) => {
        console.log(response);
        setlistOfUser(response.data.user);
        setcountRecords(response.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="">
            <th>User Name</th>
            <th>User Email</th>
            <th className="message-column">User Message</th>
          </tr>
        </thead>
        <tbody>
          {listOfUser.map((st, index) => (
            <tr key={index}>
              <td>{st.username}</td>
              <td>{st.useremail}</td>
              <td>{st.usermessage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total Records: {countRecords}</h4>
    </div>
  );
};

export default Showstaff;

