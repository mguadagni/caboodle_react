import React, { useState, useRef, useEffect, useContext } from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const LoginForm = ({query, updateForm, onSubmit}) => {

    const handleChange = (e) => {
        updateForm(e.target.id, e.target.value)
    }

    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    const [success, setsuccess] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    // }

    const navigate = useNavigate();

    const handleSignUpButton = (e) => {
        navigate('/signup');
    }

    return (
        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="http://localhost:3000/">Go to Home</a>
                </p>
            </section>
        ) : (
        <Container>
            <Form onSubmit={onSubmit}>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="username"
                        id="username"
                        placeholder="Username"
                        onChange={handleChange}
                        value={query.username}
                        required
                    />
                </InLineInputContainer>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={query.password}
                        required
                        type="password"
                    />
                </InLineInputContainer>
                <Button style={{marginTop: '1em'}}>Login</Button>
            </Form>
            <Form onSubmit={handleSignUpButton}>
                <p style={{marginTop: '4em'}}>Don't have an account?</p>
                <Button>Sign Up!</Button>
            </Form>
        </Container>
        )}
        </>
    )
}

export default LoginForm;