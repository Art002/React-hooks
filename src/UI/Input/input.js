import React from 'react';
import PropTypes from 'prop-types';
import classes from './input.module.css';

const Input = ({type, value, onChange, label}) => {
    return <label className={classes.inputField}>
                {label}<br/>
                <input className={classes.input} 
                       type={type} 
                       value={value} 
                       onChange={(e) => onChange(e.target.value)}>
                </input>
            </label>
}
Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string
}

export default Input