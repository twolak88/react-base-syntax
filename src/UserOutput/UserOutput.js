import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>User details:</p>
      <p onClick={props.click}>User name: {props.username}</p>
      <button onClick={props.click}>Reset</button>
    </div>
  );
}

export default userOutput;