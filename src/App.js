import React from "react";
import Search from "./components/Search";
import "./App.css";

function App() {
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=a2526df0";

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
