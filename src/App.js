import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import useFetch from "./hooks/FetcHook";
function App() {
  const { response, error, isLoading } = useFetch(
    "http://localhost:3000/users"
  );
  if (isLoading) {
    
    return <h1>Cargando sitio...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <ul>
        {response.map((item) => (
          <li id={item.id}>{item.name}</li>
        ))}
        console.log(response.data)
      </ul>
    </div>
  );
}

export default App;
