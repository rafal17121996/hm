import React, { useEffect, useState } from "react";
import bemCssModules from "bem-css-modules";
import { default as ConfirmationStyles } from "./Confirmation.module.scss";
// import bg from "../../assets/bg1.jpg";
import Popup from "../Popup/Popup";

const style = bemCssModules(ConfirmationStyles);

const Confirmation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style("")}>
      <div className={style("wrapper")}>
          <h1>Hej wesele!</h1>
          <span>
            Mamy nadzieję, że będziecie tego dnia razem z nami. Poniżej,
            znajdziecie opcje potwierdzenia swojej obecności oraz alternatywną –
            poinformowania nas, że nie możecie przybyć na nasze wesele. Prosimy
            o informację do 10 września 2021.
          </span>
          <button onClick={() => setIsOpen(true)} className={style("btn")}>
            Potwierdz obecność!
          </button>
        <Popup open={isOpen} onClose={() => setIsOpen(false)}></Popup>
      </div>
    </div>
  );
};

export default Confirmation;
