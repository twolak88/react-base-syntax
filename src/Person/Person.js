const person = (props) => {
  return (
    <div>
      <p onClick={ props.click }>
        He is { props.name } and he is { props.age }!
      </p>
      <p>{ props.children }</p>
    </div>
  );
};

export default person;
