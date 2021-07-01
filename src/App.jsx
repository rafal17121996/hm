import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import StoreProvider, { StoreContext } from "./store/StoreProvider";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import Music from "./components/Music/Music";
import Photos from "./components/Photos/Photos";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Info from "./components/Info/Info";
import History from "./components/History/History";

//const Navbar = lazy(() => import('./components/Navbar/Navbar'))

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleIsMoblie = () => {
    if ((window.innerWidth <= 960) & (window.innerWidth > window.innerHeight)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    handleIsMoblie();
  }, []);

  window.addEventListener("resize", handleIsMoblie);

  return isMobile ? (
    <div className={"overlay"}>
      <i className="fas fa-sync-alt"></i> <p>Obróć swoje urządzenie</p>
    </div>
  ) : (
    <Router>
      <StoreProvider>
        <Suspense fallback={<div style={{ height: "100vh" }}>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/:item"
              render={() => (
                <>
                  <Navbar />
                  <Home />
                  <Info />
                  <Map />
                  {/* <History /> */}
                  {/* <Music /> */}
                  <Contact />
                  <Gallery />
                </>
              )}
            />
            <Route
              path="/"
              render={() => (
                <>
                  <Navbar />
                  <Home />
                  <Info />
                  <Map />

                  {/* <History />
                  <Music /> */}
                  <Contact />
                  <Gallery />
                </>
              )}
            />
          </Switch>
        </Suspense>
      </StoreProvider>
    </Router>
  );
};
export default App;
