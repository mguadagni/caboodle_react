import React, { useState } from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';
import {useNavigate} from 'react-router-dom';
import Login from './Login';
import Proptypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

const LoginForm = ({setToken}) => {

    const navigate = useNavigate();

    const handleSignUpButton = (e) => {
        navigate('/signup');
    }

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        navigate('/');
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <Input type='text' onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                <p>Password</p>
                    <Input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <Button style={{marginTop: '1em'}}>Login</Button>
            </form>
            <Form onSubmit={handleSignUpButton}>
                <p style={{marginTop: '4em'}}>Don't have an account?</p>
                <Button>Sign Up!</Button>
            </Form>
            
        </Container>
    )
}

export default LoginForm;

LoginForm.propTypes = {
    setToken: Proptypes.func.isRequired
}