import React from "react";
import Navigate from "../Navigate/Navigate";
import { navigateData } from "../../data/navigate";

export default function AppBar() {
  return (
    <header>
      <Navigate items={navigateData} />
    </header>
  );
}
