import React, { useEffect, useState} from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./App.css";


function App() {


  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);


  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <HashRouter>
          <div>
          <Header />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route exact path="/about" element={<About />}></Route> */}
            <Route exact path="/projects" element={<Projects />}></Route>
          </Routes>
        </HashRouter>
      )}
    </>
  );
}


export default App;
