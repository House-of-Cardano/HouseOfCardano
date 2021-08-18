import logo from './HoC_4_illustrator.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Landing-Page-Header">
          House of Cardano
        </h1>
      </header>
    </div>
  );
}

fetch("./poolMetadata.json")
  .then(function(resp) {
      return resp.json();
  })
  .then(function(data) {
      console.log(data);
  })

export default App;
