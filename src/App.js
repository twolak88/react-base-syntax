import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      //parenthesis needed here to mark jsx code
      //jsx code not html
      //one root element
      <div className="App">
        <h1>Hi, this is my first react app!!</h1>
        <h1>another heading can be add only insight App</h1>
        <Person name="Max" age="32" />
        <Person name="Mat" age="23">
          His hobbies: racing
        </Person>
        <Person name="Tom" age="33" />
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
