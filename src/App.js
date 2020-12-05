import React, { Component } from "react";
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
    otherPerson: "other person",
  };

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Harshal Deshmukh';  //these will not work becoz react will not recognized that
    //used below method for chnage state and  this will chk which part need to be change depends on what we passed by comparing state var actual state.
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Sumit", age: 29 },
        { name: "Pragat", age: 30 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>This is MY first react app</h1>
        <h4>Below is my team</h4>
        <button onClick={this.switchNameHandler.bind(this,"Harshal Deshmukh")}>Click to change state</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        {/* we can put plaon text or any other componant within componnat as child
         look below for sumit childeren is "HObbies is...." so we can display it like
         refer Person
         */}

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"Akhiliz")}
        >
          {" "}
          Hobbie is Cricket
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
