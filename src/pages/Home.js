
import Header from "../components/header/Header";
import logo from "../svg_files/HoC_MASTER_v1_splitFour.svg";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Landing-Page-Header">House of Cardano</h1>
        </header>
      </div>
      <main>
      <Header />
      </main>
    </div>
  );
};

export default Home;
