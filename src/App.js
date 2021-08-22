import logo from "./svg_files/HoC_MASTER_v1_splitFour.svg";
import RHS from "./svg_files/HoC_MASTER_v1_effectOne.svg";
import ADA from "./svg_files/ADA_symbol.svg";
import HOC from "./svg_files/LOGO.svg"

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Landing-Page-Header">House of Cardano</h1>
        </header>
      </div>

      <div className="gateway">
        <main className="logo">
        <img src={HOC} className="" alt="logo" />
        </main>
        <div className="LHS">
          <img src={ADA} className="" alt="logo" />
        </div>
        <div className="RHS">
          <img src={RHS} className="App-logo-gateway" alt="logo" />
        </div>

        <footer>FOOTER tbd</footer>
      
      </div>
    </div>
  );
}

fetch("./poolMetaData.json")
  // Handle success
  .then(response => response.json()) // convert to json
  .then(json => console.log(json)) //print data to console
  .catch(err => console.log("Request Failed", err)); // Catch errors

export default App;
