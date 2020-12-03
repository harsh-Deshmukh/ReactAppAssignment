import React, {Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // this state  variable only available in componant which are extending the class  Componat and that state varibake only accesible only in same componant
  //where it is created so Best thing about it is ,when the values of state changes it totally render that componanat. so user can see updatred values.
  state = {
    persons: [
      { name: "Harshal", age: 30 },
      { name: "Sumit", age: 29 },
      { name: "Pragat", age: 31 },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>This is MY first react app</h1>
        <h4>Below is my team</h4>
        <button>Submit</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

        {/* we can put plaon text or any other componant within componnat as child
         look below for sumit childeren is "HObbies is...." so we can display it like
         refer Person
         */}

        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hobbie is Cricket</Person>

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
