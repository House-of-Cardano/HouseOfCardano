import logo from './svg_files/HoC_MASTER_v1_splitFour.svg';
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

fetch('./poolMetaData.json')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors

export default App;