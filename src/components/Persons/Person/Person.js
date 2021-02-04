import React, { Component } from 'react';
// import Radium from 'radium';
import classes from './Person.css';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 1000px)': {
    //         width: '500px'
    //     }
    // };
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

// class Person extends Component {
//     render() {
//         return (<p>I'm a {this.props.name} and I am {this.props.age} years old</p>);
//     }
// }

export default person;
// export default Radium(person);
// export default Person;