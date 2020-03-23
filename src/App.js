import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Eddie O"
          email="eddieo23@gmail.com"
          phone="777-777-7777"
        />
      </div>
    );
  }
}

export default App;
