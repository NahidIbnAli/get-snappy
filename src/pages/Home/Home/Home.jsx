import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ServicesContainer from "../ServicesContainer/ServicesContainer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesContainer></ServicesContainer>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
