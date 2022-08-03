import React, { useState } from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';
import {useNavigate} from 'react-router-dom';
import Proptypes from 'prop-types';

// async function loginUser(credentials) {

//     return fetch('http://localhost:8080/api/auth/signin', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
// }

const LoginForm = (/*{setToken},*/ props) => {

    const navigate = useNavigate();

    const handleChange = (e) => {
        props.updateForm(e.target.id, e.target.value)
    }

    const handleSignUpButton = (e) => {
        navigate('/signup');
    }

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await loginUser({
    //         username,
    //         password
    //     });
    //     setToken(token);
    //     navigate('/');
    // }

    console.log(props);
    return (
        <Container>
            <Form onSubmit={props.onSubmit}>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="id"
                        id="username"
                        placeholder="Username"
                        value={props.query.username}
                        onChange={handleChange}
                        required
                    />
                </InLineInputContainer>
                <InLineInputContainer style={{marginTop: '0.25em'}}>
                    <Input
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={props.query.password}
                        onChange={handleChange}
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
    )
}

export default LoginForm;

LoginForm.propTypes = {
    setToken: Proptypes.func.isRequired
}