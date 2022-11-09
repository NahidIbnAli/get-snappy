import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ServicesContainer from "../ServicesContainer/ServicesContainer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesContainer></ServicesContainer>
      <About></About>
    </div>
  );
};

export default Home;
