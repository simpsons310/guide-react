import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const textClasses = [];
    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = classes.Red;
    }
    if (props.personsLength <= 2) {
        textClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);
