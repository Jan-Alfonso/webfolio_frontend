import React, { useEffect, useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";

function App() {
  const [screenLoading, setScreenLoading] = useState(true); // Set to true initially
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setFadeOut(true); // Start fade-out after 1500ms
      setTimeout(() => {
        setScreenLoading(false); // Hide the loader after fade-out
      }, 1000); // Match the fade-out transition duration
    }, 2000); // Duration of the loading phase
  }, []);

  return (
    <>
      {screenLoading ? (
        <Loader fadeOut={fadeOut} /> // Pass fadeOut state as a prop to Loader
      ) : (
        <HashRouter>
          <div className="header">
            <Header />
          </div>
          <div className="body-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </div>
        </HashRouter>
      )}
    </>
  );
}

export default App;
