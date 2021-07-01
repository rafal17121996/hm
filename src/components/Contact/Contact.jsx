import React from "react";
import bemCssModules from "bem-css-modules";

import { default as ContactStyles } from "./Contact.module.scss";

const style = bemCssModules(ContactStyles);
import img from "../../assets/bg1.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundImage: `url(${img})`,
      }}
      className={style("")}
    >
      {/* <h1 className={style("title")}>Kontakt</h1> */}
      <div className={style("wrapper")}>
        <div className={style("section")}>
          <img src="https://img.icons8.com/ios-filled/50/000000/bride.png" />
          <h2>Panna Młoda</h2>
          <p>
            Hanna Orlikowska <br />
            Tel. 696 192 338
          </p>
        </div>

        <div className={style("section")}>
          <img src="https://img.icons8.com/ios/50/000000/groom.png" />
          <h2>Pan Młody</h2>
          <p>
            Miłosz Rzeźnik
            <br />
            Tel. 512 514 374
          </p>
        </div>
      </div>
      <div className={style("wrapper")}>
          <div className={style("section")}>
          <h2>Świadek</h2>
          <p>
          Marta Orlikowska
            <br />
            Tel. 666 308 643
          </p>
        </div>

        <div className={style("section")}>
          <h2>Świadek</h2>
          <p>
          Piotr Chudy
            <br />
            Tel. 601 658 987
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
