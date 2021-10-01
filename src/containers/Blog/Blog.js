import React, { Component } from 'react';
import classes from './Blog.css';
import Posts from  './Posts/Posts';
// import axios from 'axios';
import { Route } from 'react-router-dom';
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
                <Route path="/" exact render={ () => <Posts/> } />
            </div>
        );
    }
}

export default Blog;