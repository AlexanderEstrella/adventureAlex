import Navbar from "./Components/Navbar";
import Adventures from "./Components/Adventures";
import Frontdetails from "./Components/Frontdetails";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Frontdetails />
      <Adventures />
    </div>
  );
};

export default Home;
