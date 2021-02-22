import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Mat", age: 23 },
      { name: "Tom", age: 31 },
    ],
  };

  render() {
    return (
      //parenthesis needed here to mark jsx code
      //jsx code not html
      //one root element
      <div className="App">
        <h1>Hi, this is my first react app!!</h1>
        <h1>another heading can be add only insight App</h1>
        <button>Switch Name</button>
        <Person
          name={ this.state.persons[0].name }
          age={ this.state.persons[0].age }
        />
        <Person
          name={ this.state.persons[1].name }
          age={ this.state.persons[1].age }
        >
          His hobbies: racing
        </Person>
        <Person
          name={ this.state.persons[2].name }
          age={ this.state.persons[2].age }
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Hi, this is my first react app!!')
    // );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>This is my first react app!!</h1>
//     </div>
//   );
// }

export default App;
