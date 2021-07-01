import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";
import img from "../../assets/history2.jpeg";
import ReadMoreReact from 'read-more-react';

import { default as HistoryStyles } from "./History.module.scss";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(HistoryStyles);

const History = () => {
  const { isMobile } = useContext(StoreContext);
  return (
    <div>
      <div style={{ backgroundImage: `url(${img})` }} className={style("")}>
        {isMobile ? null : (
            <p className={style("text1")}>
              Ta historia zaczyna się właściwie już w podstawówce, kiedy to
              rodzice Moniki postanowili posłać ją rok wcześniej do zerówki i
              trafiła ona do grupy w której był Kacper. Nie pamiętają siebie z
              tamtego czasu, szczególnie że Monika wytrwała aż tydzień po czym
              jednak rodzice postanowili, że pójdzie do szkoły za rok ze
              swoim rocznikiem. Potem przyszło im spotkać się w podstawówce.
              Okazało się, że Kacper jednak kojarzył Monikę i nie omieszkał wraz
              z kolegami podejść do niej w czasie przerwy i powiedzieć, że
              "kiblowała w zerówce". Monika obstawia, że już wtedy się w niej
              kochał. Później przyszło liceum, Kacper wyjechał do Bydgoszczy i
              któregoś majowego weekendu postanowili pójść na wspólny spacer.
              Spotykali się coraz częściej, aż w końcu pocałowali się po raz pierwszy.
              Reakcje? Skrajne! Monika była przerażona, Kacper skakał z radości.
              Spotkali się trzy dni później i Monika wyznała Kacprowi miłość! Co za
              wtopa, 3 dni po pierwszym pocałunku, wyznanie "Kocham Cię"! Jak
              się okazało później ten impuls nie był przypadkowy. Czas mijał,a
              miłość rozkwitała. Przetrwali razem wiele trudnych chwil i
              przeżyli razem wiele pięknych chwil, wejście w dorosłość, wiele
              podróży, pierwszy rajd po pustyni, pierwszy trip samochodowy z
              przyjaciółmi, zakończenie liceum, studia, przeprowadzki, pierwszy
              wspólny pies i potem kot i kolejny kot i jeszcze jeden... ;) oraz
              wspólny dom za miastem, pierwsze „tak” z ust Moniki gdy we
              Włoszech Kacper postanowił się jej oświadczyć. A już za chwilę
              przeżyją pierwszy dzień jako małżeństwo, a następnie będą
              celebrować swoją miłość z najbliższymi. Już nie mogą się doczekać
              tego dnia i Was!
            </p>
        )}
      </div>
      {isMobile?<div className={style("text3")}>
      <ReadMoreReact text={'Ta historia zaczyna się właściwie już w podstawówce, kiedy to rodzice Moniki postanowili posłać ją rok wcześniej do zerówki i trafiła ona do grupy w której był Kacper. Nie pamiętają siebie z tamtego czasu, szczególnie że Monika wytrwała aż tydzień po czym jednak rodzice postanowili, że pójdzie do szkoły za rok ze swoim rocznikiem. Potem przyszło im spotkać się w podstawówce. Okazało się, że Kacper jednak kojarzył Monikę i nie omieszkał wraz z kolegami podejść do niej w czasie przerwy i powiedzieć, że "kiblowała w zerówce". Monika obstawia, że już wtedy się w niej kochał. Później przyszło liceum, Kacper wyjechał do Bydgoszczy i któregoś majowego weekendu postanowili pójść na wspólny spacer. Spotykali się coraz częściej, aż w końcu pocałowali się po raz pierwszy. Reakcje? Skrajne! Monika była przerażona, Kacper skakał z radości. Spotkali się trzy dni później i Monika wyznała Kacprowi miłość! Co za wtopa, 3 dni po pierwszym pocałunku, wyznanie "Kocham Cię"! Jak się okazało później ten impuls nie był przypadkowy. Czas mijał,a miłość rozkwitała. Przetrwali razem wiele trudnych chwil i przeżyli razem wiele pięknych chwil, wejście w dorosłość, wiele podróży, pierwszy rajd po pustyni, pierwszy trip samochodowy z przyjaciółmi, zakończenie liceum, studia, przeprowadzki, pierwszy wspólny pies i potem kot i kolejny kot i jeszcze jeden... ;) oraz wspólny dom za miastem, pierwsze „tak” z ust Moniki gdy we Włoszech Kacper postanowił się jej oświadczyć. A już za chwilę przeżyją pierwszy dzień jako małżeństwo, a następnie będą celebrować swoją miłość z najbliższymi. Już nie mogą się doczekać tego dnia i Was!'}
      readMoreText={'Zobacz więcej'}
      min={150}
      ideal={300}
      max={500} /></div>:null}
    </div>
  );
};

export default History;
