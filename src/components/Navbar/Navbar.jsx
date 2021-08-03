import React, { useEffect, useState, useContext } from "react";
import bemCssModules from "bem-css-modules";
import { Link } from "react-scroll";
import img from "../../assets/219538867_411232146899970_8984585591312915675_n.png";

import { MenuItems } from "./MenuItem/MenuItem";
import { StoreContext } from "../../store/StoreProvider";

import { default as NavbarStyles } from "./Navbar.module.scss";

const style = bemCssModules(NavbarStyles);

const Navbar = () => {
  const { isMobile } = useContext(StoreContext);

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);


  const Items = MenuItems.map((item, index) => {
    return (
      <li  key={index} className={style("nav-item")}>
        <Link
          smooth={true}
          duration={1000}
          to={item.url}
          className={style("nav-links")}
        >
          {item.title}
        </Link>
      </li>
    );
  });




  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  const handleScroll = () => {
    if (!isMobile) {
      const currentScrollPos = window.pageYOffset;
      const newVisible = prevScrollpos > currentScrollPos;

      setPrevScrollpos(currentScrollPos);
      setVisible(newVisible);
    } else {
      setVisible(true);
    }
  };
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={style("")}>
        <div>
          <div className={style("logo-wrapper")}>
            <div className={style("logo-border")}>
              <img className={style("logo")} src={img} alt="" />
            </div>
            
          </div>
          
        <div className={style("wrapper")}>
          
          <div className={style("menu-button")} onClick={handleOnClick}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={style("nav-menu")}>{Items}</ul>
        </div>
        </div>
        
       
      </nav>
    </>
  );
};

export default Navbar;
