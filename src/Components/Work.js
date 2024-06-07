import React from "react";
import Music from "../Assets/pattern-icon.png";
import Step from "../Assets/foot-step-icon.png";
import TV from "../Assets/tv-monitor-icon.png";

const Work = () => {
  const workInfoData = [
    {
      image: Music,
      title: "Music Pattern",
      text: "Discover music tailored to your listening habits by analyzing your music preferences and suggesting songs that match your unique taste",
    },
    {
      image: Step,
      title: "Foot Steps",
      text: "Reveal music curated to your activity level by matching songs to the number of steps you take, enhancing your experience.",
    },
    {
      image: TV,
      title: "Entertainment",
      text: "Uncover music recommendations based on your viewing habits, matching songs to the TV shows and Netflix series you enjoy watching.",
    },
  ];
  return (
    <div id="work" className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">What To Use?</h1>
        <p className="primary-text">
        Explore a customized music experience based on an array of factors including your mood, activity, and preferences, allowing you to find the perfect soundtrack for every moment effortlessly.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <button className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Work;