import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <hr />
      <Outlet />
      <Footer />
    </Container>
  );
}
