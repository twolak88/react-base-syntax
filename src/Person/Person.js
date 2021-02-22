const person = (props) => {
    return (
        <div>
            <p>He is {props.name} and he is {props.age}!</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;