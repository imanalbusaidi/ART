import React, { useState, useEffect } from "react";
import "./About.css"; // Import the CSS file
import bg1 from "./bg1.jpg";
import bg2 from "./bg2.jpg";
import bg3 from "./bg3.jpg";
import bg4 from "./bg4.jpg";
import bg5 from "./bg5.jpg";
import bg6 from "./bg6.png";

const images = [bg1, bg2, bg3, bg4, bg5, bg6];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`
  };

  return (
    <div className="about-container" style={backgroundImageStyle}>
  <div className="text-container">
    <div className="info">
      <h1 className="title">Welcome to Tiny Hands Gallery 🎨</h1>
      <p className="animated-text">
        Unleash your child's creativity with Tiny Hands Gallery, where imagination becomes art and dreams come true! 🚀
      </p>
      <p className="animated-text">
        From personalized keepsakes to beautiful art books, we turn your child's doodles into timeless treasures 🖼️.
      </p>
      <p className="animated-text">
        Join our community today and preserve memories that will last a lifetime. Visit Tiny Hands Gallery now and start the adventure!
      </p>
    </div>
  </div>
</div>

  );
};

export default About;
