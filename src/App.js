import { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [personsState, setPersons] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Mat", age: 23 },
      { name: "Tom", age: 31 }
    ]
  });
  const [otherState, setOtherState] = useState({
    otherState: "other state"
  })
  
  console.log(personsState, otherState)

  const switchNameHandler = () => {
    // DONT USE THAT: this.state.persons[0].name = "Max2";
    setPersons({
      persons: [
        { name: "Max2", age: 28 },
        { name: "Mat2", age: 12 },
        { name: "Tom", age: 31 },
      ]
    });
  };

  return (
    //parenthesis needed here to mark jsx code
    //jsx code not html
    //one root element
    <div className="App">
      <h1>Hi, this is my first react app!!</h1>
      <h1>another heading can be add only insight App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        His hobbies: racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', {className: 'App'},
  //   React.createElement('h1', null, 'Hi, this is my first react app!!')
  // );
};

export default App;
