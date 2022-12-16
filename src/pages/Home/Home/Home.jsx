import React from "react";
import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ServicesContainer from "../ServicesContainer/ServicesContainer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Get Snappy</title>
      </Helmet>
      <Banner></Banner>
      <ServicesContainer></ServicesContainer>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
