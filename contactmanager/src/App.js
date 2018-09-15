import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    const name = false;

    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
