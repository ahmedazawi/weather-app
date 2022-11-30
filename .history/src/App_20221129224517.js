import React, { useStete } from "react";
import "./App.css";
import Header from "./layout/Header";
import Details from "./components/Details";

import Store from "./assets/data/Store";
function App() {
  return (
    <div className="App">
      <Header />
      <Store>
        <Details />
      </Store>
    </div>
  );
}

export default App;
