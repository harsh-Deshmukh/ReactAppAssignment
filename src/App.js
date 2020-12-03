import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

      <div className="App">
        <h1>This is MY first react app</h1>
        <h4>Below is my team</h4>
        <Person name="Harshal" age="30" />
        <Person name="Sumit" age="29" >Hobbie is Cricket</Person>
        <Person name="Pragat" age="31" />
      </div>
    );
  }
}

export default App;
