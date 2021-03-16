import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import FetcHook from "./hooks/FetcHook";
function App() {

  return (
    <div className="App">
      <header className="App-header">
 
        <FetcHook />
      </header>
    </div>
  );
}

export default App;
