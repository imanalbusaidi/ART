// App.js or Routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Staffdetails from './Components/Staffdetails';
import Header from "./Components/Header";
import Homepage from "./Components/Homepage"; // Import your homepage component
import { Login } from "./Components/Login"; // Import Login as a named export
import Footer from "./Components/Footer";
import About from "./Components/About";
import FeedbackForm from "./Components/FeedbackForm";
import ShowProduct from "./Components/ShowProduct";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/ShowProduct" element={<ShowProduct  />} />
        <Route path="/Staffdetails" element={<Staffdetails />} />
        <Route path="/Showstaff" element={<Staffdetails />} />
        <Route path="/feedbackform" element={<FeedbackForm/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
