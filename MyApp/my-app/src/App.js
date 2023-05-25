import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import "./styles/app.css"

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Navigation />
        <Container />
      </div>
    </div>
  );
}

export default App;
