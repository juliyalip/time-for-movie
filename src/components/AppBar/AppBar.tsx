import React from "react";
import Container from "../Container/Container";
import Navigate from "../Navigate/Navigate";
import { navigateData } from "../../data/navigate";
import style from './AppBar.module.scss'

export default function AppBar() {
  return (
    <header className={style.container}>
      <Container>
      <Navigate items={navigateData} />
      <p style={{color: 'white'}}>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      </Container>
    </header>
  );
}
