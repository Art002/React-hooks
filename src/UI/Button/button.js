import React from 'react';
import PropTypes from 'prop-types';
import classes from './button.module.css';

const Button = ({type, value, disabled, onClick}) => {
    return <div className={classes.buttonWrapper}>
                <button type={type} className={classes.formButton} disabled={disabled} onClick={onClick}>
                    {value}
                </button>
           </div>
}
Button.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button