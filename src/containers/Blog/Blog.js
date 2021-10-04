import React, { Component } from 'react';
import classes from './Blog.css';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from  './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>
                                    Home
                                </NavLink></li>
                            <li><NavLink 
                                to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}
                                activeClassName={classes.active}>
                                New Post
                            </NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                    <Redirect from="/" to="/posts"/>
                    {/* <Route path="/" component={Posts}/> */}

                </Switch>
            </div>
        );
    }
}

export default Blog;