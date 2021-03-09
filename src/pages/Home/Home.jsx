import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div id="home-page">
      <Navbar />
      <div className="container">
        <Jumbotron />
      </div>
    </div>
  );
};

export default Home;
