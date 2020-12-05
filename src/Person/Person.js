import React from "react";

/* props name will be anything.It is an object and person tag attribute
/are properties are in that object so we can access it like  {props.name} and if it under the class 
Then it will be like {this.props.name}*/
const person = (props) => {
  return (
    <p>
      I am a {props.name} and I am {props.age} years old {props.children}
      {/* you can put in same 'p' see above or you can 
          do like below */}
       
    </p>
  );
};

export default person;
