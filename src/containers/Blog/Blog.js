import React, { Component } from 'react';

import classes from './Blog.css';
import Posts from  './Posts/Posts';
// import axios from 'axios';
// import axios from '../../axios';
class Blog extends Component {
    render () {
        return (
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts/>
            </div>
        );
    }
}

export default Blog;