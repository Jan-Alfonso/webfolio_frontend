import React, { useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Home from "./components/Home/Home";
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
        <BrowserRouter>
          <>
            <Home />
          </>
        </BrowserRouter>
      )}
    </>
  );
}


export default App;
