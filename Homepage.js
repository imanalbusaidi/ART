import React from "react";
import "./Homepage.css";
import bg from "./cover.png";
import boxImg from "./box.png";
import photoImg from "./photography.png";
import paymentImg from "./payment.png";
import designImg from "./design.png";
import digImg from "./dig.png"; // Import the new image

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="top-container">
        <div className="blue-container">
          <img src={bg} alt="Artwork" className="artwork-image" />
          <div className="text-container">
            <div>
              <h2>Welcome to Tiny Hands Gallery</h2>
              <p>Discover the #1 Solution for Preserving Your Little Artist's Masterpieces!</p>
            </div>
            <div>
              <h4>Transforming Piles of Precious Art into Cherished Art Books and Stunning Framed Mosaics</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="how-it-works-container">
        <h2 className="how-it-works-title">Discover the inner workings!</h2>
        <div className="steps-container">
          <div className="step">
            <img src={boxImg} alt="Step 1" className="step-image" />
            <h3 className="step-title">Fill the Box</h3>
            <p className="step-text">Fill the box with your child's art and pick a Book, a Mosaic, or both!</p>
          </div>
          <div className="step">
            <img src={photoImg} alt="Step 2" className="step-image" />
            <h3 className="step-title">Professional Photography</h3>
            <p className="step-text">Our photographers capture and showcase your child's creativity.</p>
          </div>
          <div className="step">
            <img src={paymentImg} alt="Step 3" className="step-image" />
            <h3 className="step-title">Make Payment</h3>
            <p className="step-text">Receive a customized invoice. Pay only for what you've sent and chosen.</p>
          </div>
          <div className="step">
            <img src={designImg} alt="Step 4" className="step-image" />
            <h3 className="step-title">Custom Design</h3>
            <p className="step-text">Our team designs your Book or Mosaic. Review and approve before printing.</p>
          </div>
        </div>
      </div>

      {/* New section for the added feature */}
      <div className="digital-access-container">
        <img src={digImg} alt="Digital Access" className="digital-access-image" />
        <div className="digital-access-text">
          <h3>Receive Digital Image Access</h3>
          <p> Enjoy three months of complimentary access, with the choice to extend through a membership.</p>
          <p> Accessible via your Artkive account on the website and iOS App, offering the option for extended safekeeping.</p>
          <p> Additionally, order extra books or mosaics featuring your digital images.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
