import React, { useEffect, useRef, useState } from "react";
import bemCssModules from "bem-css-modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { default as MusicStyles } from "./Music.module.scss";

const style = bemCssModules(MusicStyles);

gsap.registerPlugin(ScrollTrigger);

import bg from "../../assets/music.jpg";
import axios from "axios";

const Music = () => {
  const [state, setState] = useState({
    name: "",
    artist: "",
  });
  const [errors, setErrors] = useState("");
  const [offset, setOffset] = useState();

  let form = useRef(null);

  const handleScroll = () => setOffset(window.pageYOffset);

  window.addEventListener("scroll", handleScroll);

  const handleOnSubmit = (e) => {
    let config = {
      headers: {
        ApiKij: "12nfhfkjaha983ZKsakjh12989S11",
      },
    };
    const data = {
      weddingName: "ŚlubMoniki_i_kacpra",
      title: state.name,
      author: state.artist 
    };
    e.preventDefault();
    axios
    .post(
      `https://weddingonline-test.azurewebsites.net/api/wedding/addsong`,
      data,
      config
    )
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
    setState({
      name: "",
      artist: "",
    });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    gsap.set(form, { autoAlpha: 0 });

    gsap.fromTo(
      form,
      { y: "+=100" },
      {
        duration: 1,
        y: "-=100",
        autoAlpha: 1,
        scrollTrigger: {
          trigger: form,
          start: "top 90%",
          toggleActions: "play complete none none",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      id="music"
      className={style("")}
    >
      <h1 className={style("title")}>
        Jeśli macie piosenkę, która zawsze porywa Was na parkiet dajcie znać.{" "}
        <br /> Na pewno usłyszycie ją na weselu.
      </h1>
      <form
        ref={(el) => {
          form = el;
        }}
        onSubmit={handleOnSubmit}
      >
        <input
          placeholder="Podaj nazwę piosenki"
          name="name"
          type="text"
          value={state.name}
          onChange={onInputChange}
        />
        <input
          placeholder="Podaj wykonawcę"
          name="artist"
          type="text"
          value={state.artist}
          onChange={onInputChange}
        />
        <button>Dodaj</button>
      </form>
    </div>
  );
};

export default Music;
