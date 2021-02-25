import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const textClasses = [];
    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        textClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        textClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={textClasses.join(' ')}>This is really working!</p>
            <button 
                className={buttonClass}
                onClick={props.clicked}>
                Toggle Name
            </button>
        </div>
    );
};

export default cockpit;