import React, { useState } from 'react';
import { withRouter } from "react-router";
import { postData } from './../FetchData/fetchData';
import Button from './../UI/Button/button';
import Input from './../UI/Input/input';
import classes from './auth.module.css';

const SignIn = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onEmailChange = (value) => {
        setEmail(value)
    }
    const onPasswordChange = (value) => {
        setPassword(value)
    }

    const onSignInSubmit = async(e) => {
        e.preventDefault()
            try {
                const params = {email, password, returnSecureToken: true}
                const response = await postData('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYK2xbWVCuzCg_JobwecBLj22kfrsO12U', params)
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 2000)
                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('id', response.data.localId)
                localStorage.setItem('expire', expirationDate)
                setError('')
                history.push('/')           
            }catch(err){
                setError('User did not found')
            }
    }
    
    return <form className={classes.addForm} onSubmit={onSignInSubmit}>
            <fieldset className={classes.fieldset}>
                <legend className={classes.legend}>Sign In</legend>    
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
                    <span className={classes.errorMsg}>{error}</span>
            </fieldset>
            <Button value='Sigh In'/>
            </form>
}

export default withRouter(SignIn)