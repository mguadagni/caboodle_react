import React, { useState, useRef, useEffect } from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setsuccess] = useState(false);
    
    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd)
        setUser('');
        setPwd('');
        setsuccess(true);
    }

    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     props.updateForm(e.target.id, e.target.value)
    // }

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
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} 
            aria-live="assertive">{errMsg}</p>
            <Form onSubmit={handleSubmit}>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="username"
                        id="username"
                        placeholder="Username"
                        ref={userRef}
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                </InLineInputContainer>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
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