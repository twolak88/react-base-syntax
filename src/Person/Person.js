const person = (props) => {
  return (
    <div>
      <p onClick={ props.click }>
        He is { props.name } and he is { props.age }!
      </p>
      <p>{ props.children }</p>
      <input type="text" onChange={ props.changed } value={ props.name } />
    </div>
  );
};

export default person;
