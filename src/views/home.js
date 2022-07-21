import React from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import Features from "../components/features";
import Hero from "../components/hero";
import Team from "../components/team";
import Footer from "../components/footer";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ColombianDevs</title>
        <meta property="og:title" content="Original Supportive Jay" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <Features rootClassName="features-root-class-name"></Features>
      <Hero rootClassName="hero-root-class-name"></Hero>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default Home;
