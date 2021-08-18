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

fetch('../public/poolMetaData.json').then(response => {
    console.log(response);
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data);
  }).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });

export default App;
