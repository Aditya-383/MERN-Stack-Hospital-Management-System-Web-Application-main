import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Biography"}
        imageUrl={"/about_us.jpeg"}
      />
      {/* <Biography imageUrl={"/whoweare.png"} /> */}
    </>
  );
};

export default AboutUs;
