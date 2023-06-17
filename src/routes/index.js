import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/cars" element={<PokeList />} /> */}

    </Routes>
  );
}

export default Router;
