import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [sideDrawerIsVisiable, setSideDrawerIsVisiable] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisiable(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisiable(!sideDrawerIsVisiable);
    };

    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer open={sideDrawerIsVisiable} closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);