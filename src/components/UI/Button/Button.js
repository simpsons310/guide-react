import React from 'react';
import classes from './Button';

const button = (props) => (
    <button
        className={[clases.Button, classes[props.buttonType]].join(' ')}
        onClick={props.clicked}
    >
        {props.children}
    </button>
)

export default button;