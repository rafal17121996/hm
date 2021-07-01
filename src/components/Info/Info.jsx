import React, { useEffect, useState } from "react";
import bemCssModules from "bem-css-modules";
import { default as InfoStyles } from "./Info.module.scss";
// import bg from "../../assets/bg1.jpg";
import Popup from "../Popup/Popup";



const style = bemCssModules(InfoStyles);

const Info = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className={style("")}>
      <div className={style("wrapper")}>
        <div className={style("left")}>
          <h1>Bierzemy Ślub!</h1>
          <span>
            Mamy nadzieję, że będziecie tego dnia razem z nami. Poniżej
            znajdziecie wszystkie niezbędne informacje organizacyjne oraz sekcję
            „potwierdzanie obecności”, w której jednym kliknięciem zapiszecie
            się na nasz ślubny newsletter i powiadomicie o swoim przybyciu.
          </span>
          <button onClick={() => setIsOpen(true)} className={style("btn")}>Potwierdz obecność!</button>
        </div>
          <Popup
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></Popup>
      </div>

{/*       
      <svg className={style("wave")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,197.3C672,192,768,224,864,208C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg> */}

    </div>
  );
};

export default Info;
