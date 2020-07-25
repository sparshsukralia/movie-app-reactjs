import React from "react";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
