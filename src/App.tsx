import React from "react";

import { FirstComponent } from "./components/FirstComponent"

function App() {
  const name: string = "Maik";
  const age: number = 26;
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  }

  return (
    <div className="App">
      <h1>TypeScrip com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <p>Está trabalhando!</p>
      )}

      <h3>{userGreeting(name)}</h3>

      <FirstComponent />
    </div>
  );
}

export default App;
