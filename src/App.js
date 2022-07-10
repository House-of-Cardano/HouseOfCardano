import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Millions from "./components/cardano-millions/CardanoMillions";
import Learn from "./components/learn/Learn";
import Play from "./components/play/Play";

import "./App.css";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cardano-millions">
            <Millions />
          </Route>
          <Route path="/cardano-millions-learn">
            <Learn />
          </Route>
          <Route path="/cardano-millions-play">
            <Play />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

fetch("./poolMetaData.json")
  // Handle success
  .then((response) => response.json()) // convert to json
  .then((json) => console.log(json)) //print data to console
  .catch((err) => console.log("Request Failed", err)); // Catch errors

export default App;

// ========================================================================================================================

// function App() {
//   return (
//     <div>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="Landing-Page-Header">House of Cardano</h1>
//         </header>
//       </div>
//     </div>
//   );
// }

// ========================================================================================================================
