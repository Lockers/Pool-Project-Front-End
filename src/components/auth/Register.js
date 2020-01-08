import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { usePostRequest } from '../../helpers/PostRequest';
import Button from '@material-ui/core/Button';

export const Register = () => {

    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        role: 'admin'
    })

    const [fire, setFire] = useState(false)

    usePostRequest('users/auth/register', registerForm, fire)

    function handleChange(e) {
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })
    }
    function submitHandler(e) {
        e.preventDefault()
        setFire(true)
    }

    return (
        <form noValidate autoComplete="off" onSubmit={submitHandler}>
            <TextField
                id="userName"
                label="User Name"
                name='username'
                autoComplete="currentUsername"
                onChange={handleChange}
            />
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
            <Button type='submit'>Register</Button>
        </form>
    );
}