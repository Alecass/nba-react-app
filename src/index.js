import React from "react";
import ReactDOM from "react-dom";

//
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//components
import Routes from "./routes";

const App = () => {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
