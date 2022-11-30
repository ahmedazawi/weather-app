import "./App.css";
import Header from "./layout/Header";
import Details from "./components/Details";
function App() {
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
