import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'iwonka'
  }

  usernameChangeClickHandler = () => {
    this.setState({
      username: 'iwuska'
    });
  }

  usernameChangeHandler = (name) => {
    this.setState({
      username: name
    });
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };
    const panleStyle = {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <div style={ panleStyle }>
          <button
            style={ buttonStyle }
            onClick={ this.usernameChangeClickHandler }>Reset</button>
        </div>
        <UserInput 
          changed={ this.usernameChangedHandler } 
          username={ this.state.username }/>
        <UserOutput 
          username={ this.state.username } 
          click={ this.usernameChangeClickHandler }/>
        <UserOutput 
          username={ this.state.username } 
          click={ this.usernameChangeClickHandler }/>
        <UserOutput 
          username="Iwonka" 
          click={ this.usernameChangeClickHandler }/>
      </div>
    );
  }
}

export default App;
