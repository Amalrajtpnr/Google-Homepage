import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BiSearch } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="google">
        <h1 className="title">Google</h1>
        <div className="input">
          <BiSearch size={20} color="grey" />
          <input
            type="text"
            placeholder="Search Google or type a URL"
            className="search"
          />
          <BiMicrophone size={20} color="blue" />
        </div>
      </div>
    </div>
  );
}

export default App;
