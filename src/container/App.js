import React, { useState, Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import person from '../components/Persons/Person/Person';

// const App = (props) => {
//     const [personState, setPersonState] = useState({
//         persons: [
//             { name: 'Person1', age: 28},
//             { name: 'Person2', age: 26},
//             { name: 'Person3', age: 24}
//         ]
//     });

//     const [otherState, setOtherState] = useState({otherState: 'other value'});

//     const switchNameHandler = () => {
//         setPersonState({
//             persons: [
//                 { name: 'Person1.1', age: 29},
//                 { name: 'Person2.1', age: 27},
//                 { name: 'Person3.1', age: 25}
//             ]
//         });
//     };

//     return (
//         <div className="App">
//             <h1>This is a React App</h1>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//             <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Racing</Person>
//             <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
//         </div>
//     );
// }

class App extends Component
{
    state = {
        persons: [
            { id: 'key1', name: 'Person1', age: 30 },
            { id: 'key2', name: 'Person2', age: 26 },
            { id: 'key3', name: 'Person3', age: 24 }
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 29 },
                { name: 'Person2.1', age: 27 },
                { name: 'Person3.1', age: 25 }
            ],
        });
    };

    changeNameHandler = (event, id) => {
        const persons = [...this.state.persons];
        const person = persons.find(p => p.id === id);
        person.name = event.target.value;
        this.setState({persons: persons});
    }

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        let isShowPersons = this.state.showPersons;
        this.setState({
            showPersons: !isShowPersons
        });
    }

    render() {
        // const style = {
        //     backgroundColor: 'green',
        //     color: 'white',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     ':hover': {
        //         backgroundColor: 'lightgreen',
        //         color: 'black'
        //     }
        // };

        let persons = null;
        let buttonClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person
                            click={this.deletePersonHandler}
                            changed={(event) => this.changeNameHandler(event, person.id)}
                            name={person.name}
                            age={person.age}
                            key={person.id}/>
                    })}
                </div>
            );
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // }
            buttonClass = classes.Red;
        }

        const textClasses = [];
        if (this.state.persons.length <= 2) {
            textClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            textClasses.push(classes.bold);
        }

        return (
            // <StyleRoot>
                <div className={classes.App}>
                    <h1>This is a React App</h1>
                    <p className={textClasses.join(' ')}>This is really working!</p>
                    {/* <button style={style} onClick={this.togglePersonsHandler}>Toggle Name</button> */}
                    <button className={buttonClass} onClick={this.togglePersonsHandler}>Toggle Name</button>
                    {persons}
                    {/* { this.state.showPersons ?
                        <div>
                            <Person
                                name={this.state.persons[0].name}
                                age={this.state.persons[0].age}
                                click={this.switchNameHandler.bind(this, 'Person1.2')}/>
                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Person1.3')}
                                changed={this.changeNameHandler}>
                                My hobbies: Racing
                            </Person>
                            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                        </div> : null
                    } */}

                </div>
            // </StyleRoot>
        );
    }
}

export default App;
// export default Radium(App);

