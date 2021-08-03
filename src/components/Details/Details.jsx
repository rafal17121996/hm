import React, { useEffect, useState } from "react";
import bemCssModules from "bem-css-modules";
import { default as DetailsStyles } from "./Details.module.scss";
import bg from "../../assets/Obraz1.jpg";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/Icon3.png";

const style = bemCssModules(DetailsStyles);

const Details = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="info" className={style("")}>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={style("wrapper")}
      ></div>
      <div className={style("info-wrapper")}>
        <div className={style("info")}>
          <div className={style("title-wrapper")}>
            <h3 className={style("info-title")}>Kiedy</h3>
          </div>
          <h5 className={style("info-text1")}>1 października 2021</h5>
          <p className={style("info-text2")}>piątek, godz. 16:00</p>
        </div>
        <div className={style("info")}>
          <div className={style("title-wrapper")}>
            <h3 className={style("info-title")}>Gdzie</h3>
            <h2 className={style("info-title2")}>ceremonia</h2>
          </div>

          <h5 className={style("info-text1")}>
            Kościół Chrystusa <br /> Wieczystego Kapłana
          </h5>
          <p className={style("info-text2")}>ul. 28 Grudnia, <br /> Gniezno</p>
          <form action="https://www.google.com/maps/place/Ko%C5%9Bci%C3%B3%C5%82+rzymskokatolicki+pw.+Chrystusa+Wieczystego+Kap%C5%82ana/@52.5136154,17.6079867,15z/data=!4m2!3m1!1s0x0:0xf4d91f1ae9966cc3?sa=X&ved=2ahUKEwjI0-3Cj5PyAhVQEncKHZrcB94Q_BIwEnoECFQQBQ">
            <input
              className={style("info-button")}
              type="submit"
              value="zobacz na mapie"
            />
          </form>
        </div>
        <div className={style("info")}>
          <div className={style("title-wrapper")}>
            <h3 className={style("info-title")}>Gdzie</h3>
            <h2 className={style("info-title2")}>wesele</h2>
          </div>
          <h5 className={style("info-text1")}>Stary Kamionek</h5>
          <p className={style("info-text2")}>Kamionek 12, <br /> Kiszkowo</p>
          <form action="https://www.google.com/maps/place/Stary+Kamionek/@52.584491,17.393548,15z/data=!4m2!3m1!1s0x0:0xa3017882277ff726?sa=X&ved=2ahUKEwjGko63j5PyAhVMpYsKHf-3DK8Q_BIwH3oECFQQBQ">
            <input
              className={style("info-button")}
              type="submit"
              value="zobacz na mapie"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
