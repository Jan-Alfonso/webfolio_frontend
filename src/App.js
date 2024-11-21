import React, { useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";

function App() {


  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);


  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <>
            <Header />
          </>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
