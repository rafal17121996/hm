import React from "react";
import bemCssModules from "bem-css-modules";
import { default as WineStyles } from "./Wine.module.scss";

const style = bemCssModules(WineStyles);

const Wine = () => {
  return (
    <div className={style("")}>
      <div className={style("wrapper")}>
        <h1>Drodzy Goście, </h1>
        <span>
          jeśli nie stanowi to dla Was problemu, prosimy o podarowanie nam wina
          zamiast kwiatów :)
        </span>
      </div>
    </div>
  );
};

export default Wine;
