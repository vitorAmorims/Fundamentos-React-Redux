import './App.css';
import Card from '../src/components/Card'
function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (SIMPLES)</h1>
      <div className="linha">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="linha">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
