import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";


//This one is react hooks which allows us replace class based componant with hooks so that the state is also accessible in fuction based componant 
// previously which was allowed only in Class based componant

const app = () => {
  // this state  variable only available in componant which are extending the class  Componat and that state varibake only accesible only in same componant
  //where it is created so Best thing about it is ,when the values of state changes it totally render that componanat. so user can see updatred values.
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Harshal", age: 30 },
      { name: "Sumit", age: 29 },
      { name: "Pragat", age: 31 },
    ],
     });

  //1 drawback of 'Hooks' is we loss the data when we change the state. and only those data are displayed which we passed as arg 
  //so to overcome this we call useState like below;
  const [otherState, setOtherState] = useState('some other state');
  
  console.log(personState, otherState);
  
  const switchNameHandler = () => {
    // personState.name = 'Harshal Deshmukh';  //these will not work becoz react will not recognized that 
    //used below method for chnage state and  this will chk which part need to be change depends on what we passed by comparing state var actual state.
    setPersonState({
      persons: [
        { name: "Harshal Deshmukh", age: 31 },
        { name: "Sumit", age: 29 },
        { name: "Pragat", age: 30 },
      ]
    })
  };


  return (
    <div className="App">
      <h1>This is MY first react app</h1>
      <h4>Below is my team</h4>
      <button onClick={switchNameHandler}>Click to change state</button>

      <Person name={personState.persons[0].name} age={personState.persons[0].age} />

      {/* we can put plaon text or any other componant within componnat as child
         look below for sumit childeren is "HObbies is...." so we can display it like
         refer Person
         */}

      <Person name={personState.persons[1].name} age={personState.persons[1].age}> Hobbie is Cricket</Person>

      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
};
export default app;