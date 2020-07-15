import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './genrePlate.module.css';

const GenrePlate = ({ name }) => {
    const styles = [classes.category, classes[name]]
    return (
        <div className={styles.join(' ')}><NavLink to={name}>{name}</NavLink></div>
    )
}
GenrePlate.propTypes = {
    name: PropTypes.string
}

export default GenrePlate