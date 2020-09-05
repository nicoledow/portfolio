import React from "react";

import "./App.css";
import Header from "./Components/Header";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/Theme";
import Guidebar from "./Containers/Guidebar";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Guidebar />
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
