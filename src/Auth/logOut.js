import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const LogOut = () => {
    useEffect(() => {
        localStorage.clear();
    })
    return (
        <div><Redirect to="/" /></div>
    )
}

export default LogOut