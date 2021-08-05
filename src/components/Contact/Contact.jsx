import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";

import { default as ContactStyles } from "./Contact.module.scss";
import img from "../../assets/morda1.jpg";
import img1 from "../../assets/she1.jpg";
import img2 from "../../assets/IMG-3005 (1).jpg";
import img3 from "../../assets/IMG-3242 (1).jpg";
import img4 from "../../assets/he1.jpg";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(ContactStyles);

const Contact = () => {
  const { isMobile } = useContext(StoreContext);
  return (
    <section id="contact" className={style("")}>
      {isMobile ? (
        <div className={style("wrapper")}>
          <div className={style("section")}>
            <img className={style("main-img")} src={img2} />
            <p>hanna orlikowska</p>
            <p className={style("phone")}>
              <a href="tel:696-192-338">Tel. 696 192 338</a>
            </p>
            <p style={{ color: "#DC9E9D" }} className={style("name")}>
              panna młoda
            </p>
          </div>
          <div className={style("section")}>
            <img className={style("main-img")} src={img3} />
            <p>miłosz rzeźnik</p>
            <p className={style("phone")}>
              <a href="tel:512-514-374">Tel. 512 514 374</a>
            </p>
            <p style={{ color: "#DC9E9D" }} className={style("name")}>
              pan młody
            </p>
          </div>
          <div className={style("section")}>
            <img className={style("second-img")} src={img1} />
            <p>marta orlikowska</p>
            <p className={style("phone")}>
              <a href="tel:666-308-643">Tel. 666 308 643</a>
            </p>
            <p style={{ color: "#C25623" }} className={style("name")}>
              świadkowa
            </p>
          </div>
          <div className={style("section")}>
            <img className={style("second-img")} src={img4} />
            <p>piotr chudy</p>
            <p className={style("phone")}>
              <a href="tel:601-658-987">Tel. 601 658 987</a>
            </p>
            <p style={{ color: "#C25623" }} className={style("name")}>
              świadek
            </p>
          </div>
        </div>
      ) : (
        <div className={style("wrapper")}>
          <div className={style("section")}>
            <img className={style("second-img")} src={img1} />
            <p>marta orlikowska</p>
            <p className={style("phone")}>
              <a href="tel:666-308-643">Tel. 666 308 643</a>
            </p>
            <p style={{ color: "#C25623" }} className={style("name")}>
              świadkowa
            </p>
          </div>
          <div className={style("section")}>
            <img className={style("main-img")} src={img2} />
            <p>hanna orlikowska</p>
            <p className={style("phone")}>
              <a href="tel:696-192-338">Tel. 696 192 338</a>
            </p>
            <p style={{ color: "#DC9E9D" }} className={style("name")}>
              panna młoda
            </p>
          </div>
          <div className={style("section")}>
            <img className={style("main-img")} src={img3} />
            <p>miłosz rzeźnik</p>
            <p className={style("phone")}>
              <a href="tel:512-514-374">Tel. 512 514 374</a>
            </p>
            <p style={{ color: "#DC9E9D" }} className={style("name")}>
              pan młody
            </p>
          </div>
          <div className={style("section")}>
            <img className={style("second-img")} src={img4} />
            <p>piotr chudy</p>
            <p className={style("phone")}>
              <a href="tel:601-658-987">Tel. 601 658 987</a>
            </p>
            <p style={{ color: "#C25623" }} className={style("name")}>
              świadek
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
