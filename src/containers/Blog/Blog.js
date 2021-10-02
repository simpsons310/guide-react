import React, { Component } from 'react';
import classes from './Blog.css';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Posts from  './Posts/Posts';
import NewPost from './NewPost/NewPost';
class Blog extends Component {
    render () {
        return (
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>
                                New Post
                            </Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>

            </div>
        );
    }
}

export default Blog;