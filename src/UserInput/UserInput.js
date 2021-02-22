import './UserInput.css'

const userInput = (props) => {
  return (
    <div className="UserInput">
      <p>Input user name</p>
      <input 
        type="text" 
        onChange={ props.changed } 
        value={ props.username }/>
    </div>
  );
}

export default userInput;