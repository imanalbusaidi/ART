import React, { useState, useEffect } from "react";
import Axios from "axios";

const Specstaff = () => {
  const [specificUser, setspecificUser] = useState([]);
  const [username, setusername]=useState("");
    
  useEffect(() => {
    Axios.get("http://localhost:4002//getUser/:id")
      .then((response) => {
        console.log(response);
        setspecificUser(response.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
        <form className="form-default">
        <input
          type="text"
          id="t1"
          placeholder="User Name"
          onChange={(e) => setusername(e.target.value)}
        />
        <button type="button" onClick={useEffect} className="btn bg-danger">
          Show User
        </button>
      </form>
      <table className="table table-default">
        <thead className="bg-info">
          <td>User Name</td>
          <td>User Email</td>
          <td>User Messege</td>
        </thead>
        <tbody>
          {specificUser.map((st) => {
            return (
              <tr>
                <td>{st.username}</td>
                <td>{st.useremail}</td>
                <td>{st.usermessage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

