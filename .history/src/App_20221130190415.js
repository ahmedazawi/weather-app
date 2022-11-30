import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Details from "./components/Details";

import Store from "./assets/data/Store";
function App() {
  if (located) {
    return (
      <div className="App">
        <button>Locate me</button>
      </div>
    );
  }
  return (
    <>
      <Header />
      <Store>
        <Details />
      </Store>
    </>
  );
}

export default App;
