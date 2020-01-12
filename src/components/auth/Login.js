import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { usePostRequest } from '../../helpers/PostRequest';
import Button from '@material-ui/core/Button';

export const Login = () => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    const [fire, setFire] = useState(false)

    usePostRequest('users/auth/login', loginForm, fire)

    function handleChange(e) {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    }
    function submitHandler(e) {
        e.preventDefault()
        setFire(true) 
    }

    return (
        <form noValidate autoComplete="off" onSubmit={submitHandler}>
            <TextField
                id="email"
                label="Email"
                name='email'
                autoComplete="currentPassword"
                onChange={handleChange}
            />
            <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                name='password'
                onChange={handleChange}
            />
            <Button type='submit'>Login</Button>
        </form>
    );
}