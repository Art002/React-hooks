import React, { useState } from 'react';
import is from 'is_js';
import { postData } from './../FetchData/fetchData';
import Button from './../UI/Button/button';
import Input from './../UI/Input/input';
import classes from './auth.module.css';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [disabled, setDisabled] = useState(true)

    const checkValidation = (mail,pass,passConf) => {
        is.email(mail) && (/^[a-zA-Z0-9]{6,25}$/).test(pass) && pass === passConf
        ? setDisabled(false)
        : setDisabled(true)
    }
    const onSignUpSubmit = async(e) => {
        e.preventDefault()
            try {
                const params = {email, password, returnSecureToken: true}
                await postData('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYK2xbWVCuzCg_JobwecBLj22kfrsO12U', params)
            }catch(err){
                
            }
    }
    const onEmailChange = (value) => {
        setEmail(value)
        checkValidation(value, password, checkPassword)
    }
    const onPasswordChange = (value) => {      
        setPassword(value)
        checkValidation(email, value, checkPassword)
    }
    const onPasswordConfirm = (value) => {
        setCheckPassword(value)
        checkValidation(email, password, value)
    }
    
    return <form className={classes.addForm} onSubmit={onSignUpSubmit}>
            <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>Sign Up</legend>    
                    <Input type='email' 
                           value={email} 
                           onChange={onEmailChange} 
                           label='Enter Email:'
                    />
                    <Input type='text' 
                           value={password} 
                           onChange={onPasswordChange} 
                           label='Enter Password:'
                    />
                    <Input type='text' 
                           value={checkPassword} 
                           onChange={onPasswordConfirm} 
                           label='Confirm Password:'
                    />
            </fieldset>
            <Button value='Sigh Up' disabled={disabled}/>
            </form>
}

export default SignUp