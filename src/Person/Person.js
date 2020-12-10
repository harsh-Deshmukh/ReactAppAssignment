import React from "react";
import "./Person.css";

/* props name will be anything.It is an object and person tag attribute
/are properties are in that object so we can access it like  {props.name} and if it under the class 
Then it will be like {this.props.name}*/
const person = (props) => {
  return (
    <div className="Person">
      <p>
        I am a {props.name} and I am {props.age} years old </p>
      {/* you can put in same 'p' see above or you can 
          do like below */}
      <p>{props.children}</p>


      {/* 
    our goal is to change above name when user type in below text box  This is called as One way binding
       AND 
      we are using value attribute to diaply last name in inout box    THIS is called as Two way binding 
      
      Here u well get waring chk on console becoz when we use value as attribute we need to specify onChange event .which is not done for 1st and 3rd object in App.js 
      else use defaultValue as attribute but you well nt get updated last value when you click on button in this app .
      
      */}
      <div className="input_area">
        <div>
      <label htmlFor="{ props.id}" value="BY Ib=ndex">By List Index: </label>
      <input id={ props.id} type="text" onChange={props.changByIndex} value={props.name} ></input>
     </div>
        <div>
      <label htmlFor="{props.id}" value="BY Ib=ndex">BY Person Id: </label>
          <input id={props.id} type="text" onChange={props.changeById} value={props.name}></input>
        </div>
      </div>
      <button onClick={props.click}>Delete</button>
      
    </div>
  );
};

export default person;
