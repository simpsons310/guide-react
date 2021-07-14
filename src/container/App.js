import React, { Component } from 'react';

import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component
{
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 'key1', name: 'Person1', age: 30 },
            { id: 'key2', name: 'Person2', age: 26 },
            { id: 'key3', name: 'Person3', age: 24 }
        ],
        showPersons: false,
        showCockpit: true
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWithMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

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
        console.log('[App.js] render')
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.changeNameHandler} />
            );
        }

        return (
                <div className={classes.App}>
                    <button 
                        onClick={() => {this.setState({ showCockpit: false })}}
                    >
                        Remove Cockpit
                    </button>
                    {this.state.showCockpit ? (
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            personsLength={this.state.persons.length}
                            clicked={this.togglePersonsHandler} />
                    ) : null}
                    {persons}
                </div>
        );
    }
}

export default App;
