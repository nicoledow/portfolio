import React from "react";
import Container from "@material-ui/core/Box";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Header />
        <Navbar />
      </Container>
    </div>
  );
}

export default App;
