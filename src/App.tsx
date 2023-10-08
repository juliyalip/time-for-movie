import React from "react";
import { Routes, Route } from "react-router-dom";
import {Router} from './data/routes'
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import NoMatch from "./pages/NoMatch/NoMatch";

function App() {
  return (
    <Routes>
      <Route path={Router.Home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={Router.Movies} element={<Movies />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
