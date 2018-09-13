import React from "react";
import ReactDOM from "react-dom";
import PersonList from "./data";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>React Axios</h2>
      <h4>
        An example of Axios.js, a promised based HTTP client for the browser and
        node.
      </h4>
      <br />
      <PersonList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
