import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Radium, { StyleRoot } from 'radium';
import Person from "./Person/Person";

class App extends Component {
  // this state  variable only available in componant which are extending the class  Componat and that state varibake only accesible only in same componant
  //where it is created so Best thing about it is ,when the values of state changes it totally render that componanat. so user can see updatred values.
  state = {
    persons: [
      { id: "sdsd", name: "Harshal", age: 30 },
      { id: "wert", name: "Sumit", age: 29 },
      { id: "qwerty", name: "Pragat", age: 31 },
    ],
    otherPerson: "other person",
    showPerson: false,
  };

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Harshal Deshmukh';  //these will not work becoz react will not recognized that
    //used below method for chnage state and  this will chk which part need to be change depends on what we passed by comparing state var actual state.
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Sumit", age: 29 },
        { name: "Pragat", age: 30 },
      ]
    });
  };

  deletePersonHandler = (personIndex) => {

    //this will copy the referece i.e pointer .This is wrong way when 
    //var persons=this.state.persons  

    //always copy element like below boc zsplice directly modified array 
    //so if we just refer state directly then actual pointe which has reference to state will be modified here so 
    //always copy like below


    //this method used for slection and copy to var,also eccpet argument from where and to select
    // var persons = this.state.persons.slice(); 

    var persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  changeNameByIndexHandler = (event, index) => {
    var person = { ... this.state.persons[index] };

    person.name = event.target.value;

    var persons = [...this.state.persons];
    persons[index] = person;

    // this.state.persons[0].name = 'Harshal Deshmukh';  //these will not work becoz react will not recognized that
    //Here we are chnageing the 2nd obje name prop on chnage event and evnet.target ppinting to input box and event is the name of event which gets occured
    this.setState({ persons: persons });
  };
  changeNameByIdHandler = (event, id) => {
    var personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    var person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    var persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersons = () => {
    var doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {
    // inline css
    const style = {
      backgroundColor: "crimson",
      padding: "16px",
      fontSize: "20px",
      fontFamily: "Aerial",
      fontWeight: "bold",
      color: "white",
      cursor: "pointer",
      borderRadius: "10px",
      border: "1px solid white",
      [':hover']: {
        backgroundColor: "orange",
        color: "brown"
      }

    };


    let persons = null;
    if (this.state.showPerson) {
      persons =
        (
          <div>
            {  this.state.persons.map((person, index) => {
              // we need to specify key to below jsx and 'key ' is an attribute provided by jsx because React 
              //uses virtual dom it does not know the tag below has differnet value/state and it also dont understand
              //what need to be adjusted in case element change / remove so it need to be unique for React prespective
              // So give the unique id .In Real world that will be the id of person/any asset in list 
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changByIndex={(event) => this.changeNameByIndexHandler(event, index)}
                changeById={(event) => this.changeNameByIdHandler(event, person.id)} >

              </Person>
            })}

          </div>
        )
      style.backgroundColor = "green";
      style[':hover'] = {
        backgroundColor: "red",
        color: "white"
      }

    }
    const textStyle = [];
    if (this.state.persons.length === 2) {
      textStyle.push('red');
    }
    if (this.state.persons.length === 1) {
      textStyle.push('bold');
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1 className={textStyle.join(' ')}>This Is My First React App</h1>
          <h4>Below is my team</h4>
          <button onClick={this.togglePersons} style={style}>
            Toggle Persons
        </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
