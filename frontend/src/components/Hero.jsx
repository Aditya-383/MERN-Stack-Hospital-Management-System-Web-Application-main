import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p align="justify">
          At <strong>TrustCare Medical Group</strong>, we are committed to providing exceptional healthcare services with a focus on quality, compassion, and innovation. Our team of dedicated physicians and healthcare professionals strives to improve lives and promote well-being. Here's a glimpse into our story
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero"/>
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
