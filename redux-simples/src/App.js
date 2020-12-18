import React from "react"; //estado dentro de componente fn
import "./App.css";
import Card from "../src/components/Card";
import Intervalo from "../src/components/Intervalo";
import Soma from "../src/components/Soma";
import Media from "../src/components/Media";
import Sorteio from "../src/components/Sorteio";

function App() {
  function gera_cor() {
    const hexadecimais = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let cor = "#";

    for (let i = 0; i < 6; i++) {
      cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
  }
  
  return (
    <div className="App">
      <h1>Exercício React-Redux (SIMPLES)</h1>
      <div className="linha">
        <Card title="Aleatório" color={gera_cor()}>
          <Intervalo />
        </Card>
      </div>
      <div className="linha">
        <Card title="Soma dos números" color={gera_cor()}>
          <Soma />
        </Card>
        <Card title="Média dos números" color={gera_cor()}>
          <Media />
        </Card>
        <Card title="Sorteio de um número" color={gera_cor()}>
          <Sorteio />
        </Card>
      </div>
    </div>
  );
}

export default App;
