import "./App.css";
import Card from "../src/components/Card";
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
        <Card title="Card #01" color={gera_cor()}>X</Card>
      </div>
      <div className="linha">
        <Card title="Card #02" color={gera_cor()}>X</Card>
        <Card title="Card #03" color={gera_cor()}>Y</Card>
        <Card title="Card #04" color={gera_cor()}>X</Card>
      </div>
    </div>
  );
}

export default App;
