import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import bemCssModules from "bem-css-modules";
import { useAlert } from 'react-alert'

import { default as PopupStyles } from "./Popup.module.scss";
import axios from "axios";
import { useHistory } from "react-router";

const style = bemCssModules(PopupStyles);

let config = {
  headers: {
    ApiKij: process.env.apiKey,
  },
};

const Popup = ({ open, onClose }) => {
  if (!open) return null;

  const [guests, setGuests] = useState([]);
  const [guests2, setGuests2] = useState([]);
  const alert = useAlert()


  const history = useHistory();

  const updateList = () => {
    const guest = history.location.pathname.substring(1);
    axios
      .get(
        `https://weddingonline-test.azurewebsites.net/api/guest/getguests/HaniaMiłosz/${guest}`,
        config
      )
      .then((response) => {
        if (response.status == 200) {
          setGuests(response.data);
        } else {
          // alert.show('Coś poszło nie tak')
        }
      })
      .catch((error) => {
        console.log('error');
      });
  };

  useEffect(() => {
    updateList();
  }, []);

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  const handleStatus = (number, item) => {
    let config = {
      headers: {
        ApiKij: process.env.apiKe,
      },
    };

    const data = {
      weddingUniqueName : 'HaniaMiłosz',
      guestConfirmations: [
        {
          guestId: item.guestId,
          decisionStatus: number
        }
      ]
    };


    axios
      .post(
        `https://weddingonline-test.azurewebsites.net/api/guest/confirm`,
        data,
        config
      )
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          alert.show('Dziękujemy za informację')
          let newArray = [...guests]  ;
          newArray[0].decisionStatus = number
          console.log(newArray)
          console.log(guests)
          setGuests(
            newArray
          )
        } else {
          alert.show('Coś poszło nie tak :(')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return ReactDom.createPortal(
    <div className={style("")}>
      <div className={style("popup_background")} />
      <div className={style("popup")}>
        {guests.map((item) => (
          <div  className={style("guest")} key={item.firstName}>
            <h1>
              {item.firstName} {item.lastName}

            </h1>
            <p>Status:{" "}{item.decisionStatus == 0 ? "Nieokreślony" : null}
              {item.decisionStatus == 1 ? "Brak obecności" : null}
              {item.decisionStatus == 2 ? "Niezdecydowany" : null}
              {item.decisionStatus == 3 ? "Potwierdzony" : null}</p>
            <div className={style("btnWrapper")}>
              <button onClick={() => handleStatus(3, item)}>
              Bawimy się z Wami do rana
              </button>
              {/* <button onClick={() => handleStatus(2, item)}>
              Jeszcze nie wiem
              </button> */}
              <button onClick={() => handleStatus(1, item)}>
              Niestety mnie nie będzie
              </button>
            </div>
          </div>
        ))}

        <div onClick={() => onClose()} className={style("close")}>
          <i onClick={() => onClose()}  className="fas fa-times"></i>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Popup;
