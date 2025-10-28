import React from "react";
import "./App.css";
import Nav from "./components/navbar/nav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
