import React, { useStete } from "react";
import "./App.css";
import Header from "./layout/Header";
import Details from "./components/Details";

import ContextApi from "./assets/data/ContextApi";
function App() {
  const [lang, setLang] = useStete(0);
  return (
    <div className="App">
      <ContextApi.Provider value={lang}>
        <Header />
        <Details />
      </ContextApi.Provider>
    </div>
  );
}

export default App;
