import React from "react";
import bemCssModules from "bem-css-modules";

import { default as ContactStyles } from "./Contact.module.scss";
import img from "../../assets/morda1.jpg";

const style = bemCssModules(ContactStyles);

const Contact = () => {
  return (
    <section id="contact" className={style("")}>
      <div className={style("wrapper")}>
        <div className={style("section")}>
        <img src={img} />
          {/* <h2>Świadek</h2> */}
          <p>
            Marta Orlikowska
            <br />
            Tel. 666 308 643
          </p>
        </div>
        <div className={style("section")}>
          <img src={img} />
          {/* <h2>Panna Młoda</h2> */}
          <p>
            Hanna Orlikowska <br />
            Tel. 696 192 338
          </p>
        </div>

        <div className={style("section")}>
          <img src={img} />
          {/* <h2>Pan Młody</h2> */}
          <p>
            Miłosz Rzeźnik
            <br />
            Tel. 512 514 374
          </p>
        </div>

        <div className={style("section")}>
        <img src={img} />
          {/* <h2>Świadek</h2> */}
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
