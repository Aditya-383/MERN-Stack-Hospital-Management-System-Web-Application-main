import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p align="justify">
          TrustCare Medical Group has been a cornerstone of healthcare in 
          Burdwan, West Bengal since 2020. 
          It was founded with a vision of providing <strong>Best HealthCare services for the Least price</strong>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
