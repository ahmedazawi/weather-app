import React, { useStete } from "react";
import "./App.css";
import Header from "./layout/Header";
import Details from "./components/Details";

import Store from "./assets/data/Store";
function App() {
  const [lang, setLang] = useStete(0);
  return (
    <div className="App">
      <Store>
        <Header />
        <Details />
      </Store>
    </div>
  );
}

export default App;
