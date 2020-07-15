import React from 'react';
import { Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classes from './input.module.css';

const SelectField = ({onChange, options, label}) => { 
    const option = Object.keys(options).map(( value , i) => {
        return {key: i, value: value, text: value}
    })
    
    return <label className={classes.inputField} value={option.value}>
                {label}<br/>        
                <Select placeholder='Select Genre' options={option} onChange={(e) => onChange(e.target.textContent)}/>
           </label>
}
SelectField.propTypes = {
    options: PropTypes.object,
    onChange: PropTypes.func,
    label: PropTypes.string
}

export default SelectField