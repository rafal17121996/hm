import React, {useEffect, useState } from "react";
import StoreProvider, { StoreContext } from "./store/StoreProvider";
import { Provider } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { HashRouter as Router, Switch, Route } from "react-router-dom";

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
import Details from "./components/Details/Details";
import Confirmation from "./components/Confirmation/Confirmation";
import Wine from "./components/Wine/Wine";


//const Navbar = lazy(() => import('./components/Navbar/Navbar'))

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 2000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 1000,
  },
};

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
    <AlertProvider template={AlertTemplate} {...options}>
    <Router>
      <StoreProvider>
          <Switch>
            <Route
              exact
              path="/:item"
              render={() => (
                <>
                  <Navbar />
                  <Home />
                  <Details />
                  <Contact />
                  <Confirmation />
                  {/* <Wine /> */}
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
                  <Details />
                  <Contact />
                  {/* <Confirmation /> */}
                  {/* <Wine /> */}
                  <Gallery />
                </>
              )}
            />
          </Switch>
      </StoreProvider>
    </Router>
    </AlertProvider>
    // <AlertProvider template={AlertTemplate} {...options}>
    //   <StoreProvider>
    //   <Router >
    //     <Switch>
    //       <Route path="/:item">
    //         <Details />
    //       </Route>
    //       <Route path="/topics">
    //         <Map />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    // </Router>
    //   </StoreProvider>
    // </AlertProvider>
  );
};
export default App;
