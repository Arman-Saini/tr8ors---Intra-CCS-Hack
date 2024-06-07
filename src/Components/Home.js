import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            The Music You Need
          </h1>
          <p className="primary-text">
          The modern world, with its rapid pace and constant demands, often leaves people feeling overwhelmed, anxious, and stressed.
          Unveil personalized playlists designed to improve mental health by analyzing the music a person listens to, detects mood patterns.
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;