import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import bemCssModules from "bem-css-modules";

import { default as MapStyles } from "./Map.module.scss";
import img from "../../assets/HM.jpg";

gsap.registerPlugin(ScrollTrigger);

const style = bemCssModules(MapStyles);

function Mapa(props) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 52.58527977198758, lng: 17.39493838295808 }}
    >
      <Marker
        onClick={() => {
          setOpen2(true);
        }}
        position={{ lat: 52.58527977198758, lng: 17.39493838295808 }}
      >
        {open2 && (
          <InfoWindow
            onCloseClick={() => {
              setOpen2(false);
            }}
          >
            <div>Sala</div>
          </InfoWindow>
        )}
      </Marker>
      <Marker
        onClick={() => {
          setOpen(true);
        }}
        position={{ lat: 52.589556806096844, lng: 17.262475830681502 }}
      >
        {open && (
          <InfoWindow
            onCloseClick={() => {
              setOpen(false);
            }}
          >
            <div>Kościół</div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Mapa));

const Map = () => {
  const [offset, setOffset] = useState();

  let image = useRef(null);
  let map = useRef(null);

  const handleScroll = () => setOffset(window.pageYOffset);

  window.addEventListener("scroll", handleScroll);

  const mystyle = {
    backgroundPositionY: offset * 0.7 + "px",
  };

  useEffect(() => {
    gsap.set([image, map], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    gsap.fromTo(
      image,
      { x: "-=100" },
      {
        duration: 2,
        x: "+=100",
        autoAlpha: 1,
        scrollTrigger: {
          trigger: image,
          start: "top 90%",
          toggleActions: "play complete none none",
          markers: false,
        },
      }
    );
    gsap.fromTo(
      map,
      { y: "+=100" },
      {
        duration: 2,
        y: "-=100",
        autoAlpha: 1,
        scrollTrigger: {
          trigger: image,
          start: "top 90%",
          end: "bottom 50%",
          toggleActions: "play complete none none",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div id="route" className={style("")}>
      <div className={style("wrapper")}>
        <div className={style("left")}>
          <img
            ref={(el) => {
              image = el;
            }}
            className={style("img")}
            src={img}
            alt=""
          />
        </div>
        <div
          ref={(el) => {
            map = el;
          }}
          className={style("right")}
        >
          <div className={style("location")}>
            <h2>Ślub odbędzie się</h2>
            <p>
              01.10.2021 o godz. 16:00 <br />
              W kościele Chrystusa Wieczystego Kapłana<br/>
              ul. 28 Grudnia, Gniezno
            </p>
          </div>
          <div className={style("location")}>
            <h2>Po ceremonii kościelnej</h2>
            <p>
            Zapraszamy na przyjęcie weselne, <br/> które odbędzie się w Restauracji <br/> Stary Kamionek w Kamionku
            </p>
          </div>

          <div className={style("map")}>
            <WrappedMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBtH3x10QgQaasPBEz8oXcxM-CBL-Iog-0"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
  //AIzaSyBtH3x10QgQaasPBEz8oXcxM-CBL-Iog-0
};
export default Map;
