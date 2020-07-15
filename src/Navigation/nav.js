import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import classes from './nav.module.css'

const Nav = ({ location }) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const getToken = localStorage.getItem('token')
        setToken(getToken)
    },[location.pathname])
    const NotLogged = [
        <li className={classes.navItem} key={token + 1}>
            <NavLink to='/'>Main Page</NavLink>
        </li>,
        <li className={classes.navItem} key={token + 2}>
            <NavLink to='/addMusic'>Add Music</NavLink>
        </li>,
        <li className={classes.navItem} key={token + 3}> 
            <NavLink to='/signUp'>Sign Up</NavLink>
        </li>,
        <li className={classes.navItem} key={token + 4}>
            <NavLink to='/signIn'>Sign In</NavLink>
        </li>
    ]
    const logged = [
        <li className={classes.navItem} key={token + 5}>
            <NavLink to='/'>Main Page</NavLink>
        </li>,
        <li className={classes.navItem} key={token + 6}>
            <NavLink to='/addMusic'>Add Music</NavLink>
        </li>,
        <li className={classes.navItem} key={token + 7}> 
            <NavLink to='/logOut'>Log Out</NavLink>
        </li>
    ]
    
    return (
        <nav className={classes.navContainer}>
            <div className={classes.navList}>
                <ul>
                    {
                        token
                        ?  logged
                        :  NotLogged
                    }
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Nav)