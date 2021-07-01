import React from "react";
import bemCssModules from "bem-css-modules";

import { default as GifttStyles } from "./Gift.module.scss";
import img from '../../assets/flowers.png'

const style = bemCssModules(GifttStyles);

const Giftt = () => {
  return (
    <div className={style("")}>
      <div className={style("wrapper")}>
        <img src={img} alt=""/>
        <h1>Drodzy goście </h1>
        <h2>Równie mocno jak kwiaty ucieszy nas wino</h2>
         
       
      </div>
    </div>
  );
};

export default Giftt;
