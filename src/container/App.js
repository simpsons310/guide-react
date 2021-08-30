import React, { Component } from 'react';

import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

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
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    }

    loginHandler = () => {
        this.setState({authenticated: true});
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
            <Aux classes={classes.App}>
                <button 
                    onClick={() => {this.setState({ showCockpit: false })}}
                >
                    Remove Cockpit
                </button>
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}
                >
                    {this.state.showCockpit ? (
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            personsLength={this.state.persons.length}
                            clicked={this.togglePersonsHandler} />
                    ) : null}
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
