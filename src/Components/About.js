import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Tunes to Match Your Mood
        </h1>
        <p className="primary-text">
        Music has the power to reflect and influence our emotions. It can lift our spirits, calm our minds, or intensify our feelings.
        </p>
        <p className="primary-text">
        Whether you're happy, sad, or anything in between, there's a tune to match your mood, making music an essential companion in our emotional lives.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default About;