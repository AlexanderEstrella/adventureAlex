import React from "react";
import "./App.css";
import Home from "./Pages/home";
import Navbar from "./Components/Navbar";
import About from "./Pages/about.";
import Adventures from "./Pages/adventures";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
