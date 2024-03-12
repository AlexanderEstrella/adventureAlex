import Navbar from "./Navbar";
import Adventures from "./Adventures";
import Frontdetails from "./Frontdetails";
import Footer from "./Footer";
import Landing from "./Landing";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";

const Home = () => {
  return (
    <div>
      
      <Landing />
      <Frontdetails />
      <Adventures />
    </div>
  );
};

export default Home;
