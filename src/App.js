import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Navbar from "./Components/Navbar";
import About from "./Pages/about.";
import Adventures from "./Pages/adventures";
import Footer from "./Components/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adventures" element={<Adventures />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
