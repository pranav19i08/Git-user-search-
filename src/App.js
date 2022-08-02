import React from "react";
import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./components/main";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
      </Router>
    </>
  );
}

export default App;
