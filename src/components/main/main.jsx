
import React from "react";
import "./main.css";
import Carrousel from '../carrousel/carrousel';
import Marcas from '../marcas/marcas';
import CardsContainer from '../cardsContainer/cardsContainer';
import Catalogo from '../catalogo/catalogo';
import InfoExtra from '../infoExtra/infoExtra';

const Main = () => {

  return (
    <>
      <Marcas/>
      <Carrousel/>
      <CardsContainer />
      <Catalogo />
      <InfoExtra />
    </>
  );
};

export default Main;
