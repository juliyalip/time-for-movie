import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import AppBar from "../AppBar/AppBar";

export default function Layout() {
  return (
    <>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
