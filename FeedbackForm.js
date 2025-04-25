import React, { useState, useEffect } from 'react';
import axios from "axios";



const FeedbackForm = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [resMsg, setresMsg] = useState("");

  const [listOfStaff, setlistOfStaff] = useState([]);
  const [countRecords, setcountRecords] = useState(0);
  const [responseMsg, setresponseMsg] = useState();

  useEffect(() => {
    axios.get("http://localhost:4002/getfeedback")
      .then((response) => {
        console.log(response);
        setlistOfStaff(response.data.FBK);
        setcountRecords(response.data.count);})
      .catch((err) => {
        console.log(err);
      });
    }, []);


    const delFBK = async (id) => {
      axios.delete(`http://localhost:4002/delete/${id}`).then((response) => {
        setlistOfStaff(
          listOfStaff.filter((val) => {
            return val._id !== id;
          })
        );
        setcountRecords(response.data.count);
        setresponseMsg(response.data.msg);
      });
    };

  const newFK = () => {
    axios
      .post("http://localhost:4002/submit-feedback", {
        username: username,
        email: email,
        message: message,
      })
      .then((res) => {
        setresMsg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });


  
 
    
  };
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Feedback Form</h1>
      <form >
        <div className="mb-3">
          <label htmlFor="username" className="form-label" >Name:</label>
          <input type="text" className="form-control" id="username" name="username"  onChange={(e) => setusername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" onChange={(e) => setemail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="4" onChange={(e) => setmessage(e.target.value)} required></textarea>
        </div>
        <button type="submit"  onClick={newFK} className="btn btn-primary">Submit Feedback</button>
      </form>
      <div>
        <br></br>        <br></br>
        <h2 className="mt-5 mb-4">Feedback Data</h2>
      <table className="table">
        <thead >
          <td>Name</td>
          <td>Email</td>
          <td>comment</td>
        </thead>
        <tbody>
          {listOfStaff.map((st) => {
            return (
              <tr>
                <td>{st.username}</td>
                <td>{st.email}</td>
                <td>{st.message}</td>
                <td><button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => delFBK(st._id)}>
                    Delete
                  </button></td>
              </tr>

            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
  
}

export default FeedbackForm;


